import React, { useEffect, useRef, useState } from 'react'

import { geoPath, geoAlbersUsa } from 'd3-geo'
import { select, pointer } from 'd3-selection'
import { Delaunay } from 'd3-delaunay'
import { schemeCategory10 as colorScheme } from 'd3-scale-chromatic'
import * as topojson from 'topojson'

import { groupBy, uniq } from 'lodash'

import us from '@site/static/geo/states-albers-10m.json'

import JobMetrics from './JobMetrics'


// the bare min Job type; todo(nc): import client/component lib?
type Job = {
  nodes: {
    [vsn: string]: true | null
  }
  state: {
    last_state: string
  }
  plugins: {
    name: string
    plugin_spec: {image: string}
  }[]
}

type JobMap = {
  [jobID: number]: Job
}

export type App = {
  appName: string
  image: string
}

export type AppSummary = App & {
  nodes: string[]
}


// the bare min Node type
type Node = {
  vsn: string
  name: string // node_id
  gps_lon: number
  gps_lat: number
}


type MapProps = {
  title: string
  nodes: Node[]
  onHover: (node: Node) => void
  color?: string
}



function Map(props: MapProps) {
  const {title, nodes, onHover, color} = props

  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return

    const svg = select(ref.current)
    const projection = geoAlbersUsa().scale(1300).translate([487.5, 305])
    const delaunay = Delaunay.from(nodes, d => d.gps_lon, d => d.gps_lat)

    select(ref.current).append('defs').append('style')
      .text(`circle.highlighted { stroke: #000; fill: #000; }`)

    svg.selectAll('g').remove()

    const g = svg.append('g')

    const points = g
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('transform', d => `translate( ${projection([d.gps_lon, d.gps_lat]).join(',')} )`)
      .attr('r', 5)
      .attr('fill', colorScheme[0])
      .attr('fill-opacity', 0.65)
      .attr('cursor', 'pointer')
      .on('click', (_, d) => {
        window.open(`https://portal.sagecontinuum.org/node/${d.name}`)
      })

    svg.on('pointermove', event => {
      const p = projection.invert(pointer(event))
      const i = delaunay.find(...p)
      svg.selectAll('.node').attr('r', 5)
      points.classed('highlighted', (_, j) => i === j)
      select(points.nodes()[i]).raise().attr('r', 7)
      onHover(nodes[i])
    }).on('mouseleave', () => {
      onHover(null)
      svg.selectAll('.node').attr('r', 5)
      points.classed('highlighted', false)
    })

  }, [ref, color])

  useEffect(() => {
    const svg = select(ref.current)
    svg.selectAll('.title').remove()
    svg.append('text')
      .text(title)
      .attr('class', 'title')
      .attr('x', 959 / 2)
      .attr('y', 15)
      .attr('text-anchor', 'middle')
      .attr('font-weight', '500')
      .attr('fill', '#333')
  }, [title])


  const path = geoPath()

  return (
    <svg viewBox="0 0 959 650" width="100%" height="100%" ref={ref}>
      <path fill="#ddd" d={path(topojson.feature(us, us.objects.nation))}></path>
      <path
        fill="none"
        stroke="#fff"
        strokeLinejoin="round"
        strokeLinecap="round"
        d={path(topojson.mesh(us, us.objects.states, (a, b) => a !== b))}>
      </path>
    </svg>
  )
}


function getNodes() : Promise<Node[]> {
  const p1 = fetch('https://auth.sagecontinuum.org/manifests')
  const p2 = fetch('https://api.sagecontinuum.org/production')

  return Promise.all([p1, p2])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([manifests, meta]) => {
      const sageProject = meta.filter(obj => obj.project.toLowerCase() == 'sage')
        .map(obj => obj.vsn)

      const nodes = manifests.filter(node => sageProject.includes(node.vsn))

      return nodes
    })
}


function getRecentData() : Promise<{apps: AppSummary[], jobs: Job[]}> {
  return fetch('https://es.sagecontinuum.org/api/v1/jobs/list')
    .then(res => res.json())
    .then(jobMap => {

      // only consider active "running" jobs
      const jobs = Object.values(jobMap as JobMap)
        .filter(obj => obj.state.last_state.toLowerCase() == 'running')

      // flatten job into data {appName, image, nodes}
      const apps = jobs.flatMap(job => {
        const app = job.plugins.map(plugin => ({
          appName: plugin.name.replace(/-top|-bottom|-left|-right/g, ''), // ignore orientations
          image: plugin.plugin_spec.image,
          nodes: Object.keys(job.nodes)
        }))

        return app
      })

      // group by appName
      const grouped: {[name: string]: AppSummary[]} = groupBy(apps, 'appName')

      // aggregate nodes for each app
      const byApp = Object.entries(grouped).reduce((acc, [appName, arr]) => {
        // NOTE: let's just use a arbitrary image version (for now?)
        const image = (arr)[0].image

        // get unique set of nodes
        const nodes = uniq(arr.flatMap(obj => obj.nodes))

        return {
          ...acc,
          [appName]: {appName, image, nodes}
        }
      }, {})

      // convert to list
      const summary: AppSummary[] = Object.values(byApp)

      return {
        apps: summary,
        jobs
      }
    })
}


type Record = {
  timestamp: string
  name: string
  value: number
  meta: {node: string}
}

function getPluginCounts(vsns: string | string[]) : Promise<Record[]> {
  const vsn = Array.isArray(vsns) ? vsns.join('|') : vsns

  const params = {
    bucket: 'plugin-stats',
    start: '-24h',
    filter: {
      ...(vsn && {vsn})
    }
  }

  return fetch('https://data.sagecontinuum.org/api/v1/query', {
    method: 'POST',
    body: JSON.stringify(params)
  }).then(res => res.text())
    .then(text => {
      const data = text.trim()
        .split('\n')
        .map(str => JSON.parse(str))
      return data
    })
}


type DataCount = {
  name: 'total'
  timestamp: string
  value: string
  meta:  {
    vsn: string
    node: string
    plugin: 'registry.sagecontinuum.org/dariodematties/sound-event-detection:0.1.1',
  }
}

const getDataCount = (dataCounts: DataCount[], vsn?: string) : number => {
  if (vsn) {
    dataCounts = [...dataCounts.filter(obj => obj.meta.vsn == vsn)]
  }

  const count = dataCounts.reduce((acc, obj) => {
    return acc + obj.value
  }, 0)

  return count
}



export default function StatusChart() {
  const [nodes, setNodes] = useState<Node[]>()
  const [visibleNodes, setVisibleNodes] = useState<Node[]>()

  const [jobs, setJobs] = useState<Job[]>()
  const [apps, setApps] = useState<AppSummary[]>()
  const [dataCounts, setDataCounts] = useState()

  const [node, setNode] = useState<Node>()

  const [error, setError] = useState<string>(null)


  useEffect(() => {
    Promise.all([getRecentData(), getNodes()])
      .then(([recentData, nodes]) => {
        const {jobs} = recentData
        let {apps} = recentData

        // only include relevant nodes for each app
        const vsns = nodes.map(obj => obj.vsn)
        apps = apps
          .map(obj => ({...obj, nodes: obj.nodes.filter(vsn => vsns.includes(vsn))}))
          .filter(obj => obj.nodes.length && !obj.appName.includes('sampler'))
          .sort((a, b) => b.nodes.length - a.nodes.length)

        setJobs(jobs)
        setApps(apps)
        setNodes(nodes)
        setVisibleNodes(nodes)

        getPluginCounts(nodes.map(o => o.vsn))
          .then(data => {
            setDataCounts(data)
          })
      })
      .catch(err => {
        console.log('fetch error:', err)
        setError('The AI/ML status view is currently unavailable.')
      })
  }, [])


  useEffect(() => {
    if (!apps || !nodes) return
  }, [apps, nodes])


  const handleMapHover = (node: Node) => {
    if (!node) {
      setNode(null)
      return
    }

    setNode(node)

    // psuedo code for use showing particular nodes with an app:
    // const appList = (apps || []).filter(obj => obj.nodes.includes(node.vsn))
    // setAppsOnNode(appList)
  }

  const nodesWithGps = (visibleNodes || []).filter(obj => obj.gps_lon && obj.gps_lat)
  const nodeCount = (visibleNodes || []).length

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-7/12">
        {visibleNodes && apps &&
          <Map
            title={
              node ? `Node ${node.vsn}` :
                `${nodeCount} Node${nodeCount > 1 ? 's' : ''}`
            }
            nodes={nodesWithGps}
            onHover={handleMapHover}
            // color={colorScheme[apps.findIndex(obj => obj.appName == hoverID) % 8] || null }
          />
        }

        {error &&
          <p>{error}</p>
        }
      </div>

      <div className="md:w-5/12">
        {nodes && jobs && apps && dataCounts &&
          <JobMetrics
            node={node?.vsn}
            nodes={nodes.length}
            jobs={node ? jobs.filter(obj => node.vsn in obj.nodes).length : jobs.length}
            apps={node ? apps.filter(obj => obj.nodes.includes(node.vsn)).length : apps.length}
            records={getDataCount(dataCounts, node?.vsn)}
          />
        }
      </div>

    </div>
  )
}
