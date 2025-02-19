import { useEffect, useMemo, useRef, useState } from 'react'

import * as topojson from 'topojson'
import us from '@site/static/geo/counties-with-pr-10m.json'
import geoAlbersUsaPr from './geoAlbersUsaPr'
import { geoPath } from 'd3-geo'
import { select, pointer } from 'd3-selection'
import { Delaunay } from 'd3-delaunay'
import { schemeCategory10 as colorScheme } from 'd3-scale-chromatic'
import { groupBy, uniq } from 'lodash'

import JobMetrics from './JobMetrics'

import config from '../../config'


const notShown = {
  'Scotland': ['W06B']
}

const notShownVSNs = [].concat(...Object.values(notShown))


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
  // color?: string // todo: add hover on metrics?
}



function Map(props: MapProps) {
  const {title, nodes, onHover} = props

  const ref = useRef()

  const projection = useMemo(() =>
    geoAlbersUsaPr().scale(1300).translate([487.5, 305])
  , [])

  useEffect(() => {
    if (!ref.current) return


    const svg = select(ref.current)

    select(ref.current).append('defs').append('style')
      .text(`circle.highlighted { stroke: rgba(0, 0, 0); fill: rgba(0, 0, 0); }`)

    svg.selectAll('g').remove()

    const g = svg.append('g')

    const r = 6,
      hoverR = 8,
      opacity = .7

    // skip nodes outside of the 50 states (unless marked as notShown)
    const shownNodes = nodes.filter(o =>
      !notShownVSNs.includes(o.vsn) && projection([o.gps_lon, o.gps_lat])
    )
    const delaunay = Delaunay.from(shownNodes, d => d.gps_lon, d => d.gps_lat)

    const points = g
      .selectAll('g')
      .data(shownNodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('transform', d => `translate(${projection([d.gps_lon, d.gps_lat]).join(',')} )`)
      .attr('r', r)
      .attr('fill', colorScheme[0])
      .attr('fill-opacity', opacity)
      .attr('cursor', 'pointer')
      .on('click', (_, d) => window.open(`${config.portal}/node/${d.vsn}`))

    const xStart = 625, yStart = 580, pad = 1

    // render "not shown" / international key
    const intlKey = svg.append('g')
      .attr('class', 'not-shown-key')
      .attr('pointer-events', 'bounding-box')

    intlKey.append('text')
      .text('International:')
      .attr('x', xStart - 105)
      .attr('y', yStart)
      .attr('font-weight', '600')
      .attr('fill', '#666')

    Object.values(notShown).forEach((vsns, k) => {
      const r2 = r

      intlKey.selectAll('g')
        .data(nodes.filter(o => vsns.includes(o.vsn)))
        .enter()
        .append('circle')
        .attr('class', 'not-shown-node')
        .attr('cx', (d, i) => xStart + i * (r2 * 2 + pad))
        .attr('cy', () => yStart + (k * 20) + 25 )
        .attr('r', r2)
        .attr('fill', colorScheme[0])
        .attr('fill-opacity', opacity)
        .attr('cursor', 'pointer')
        .on('click', (_, d) => window.open(`${config.portal}/node/${d.vsn}`))
        .on('mouseenter', function(_, d) {
          select(this)
            .attr('r', hoverR)
            .classed('highlighted', true)

          onHover(d)
        })
        .on('mouseleave', function() {
          select(this)
            .attr('r', r)
            .classed('highlighted', false)
        })

      intlKey.append('text')
        .text(Object.keys(notShown)[k])
        .attr('class', 'other-nodes')
        .attr('x', xStart - (r2 * 2) + 2)
        .attr('y', yStart + (k * 20) + 26 )
        .attr('dominant-baseline', 'middle')
        .attr('text-anchor', 'end')
        .attr('font-weight', '600')
        .attr('fill', '#666')
    })

    svg.on('pointermove', event => {
      clearHoverStyle()

      const ele = event.target
      const onIntlKey = ele.classList.contains('not-shown-key') ||
        ele.closest('.not-shown-key')

      if (onIntlKey)
        return

      svg.selectAll('.node').attr('r', r).attr('fill-opacity', opacity)

      const p = projection.invert(pointer(event))
      const i = delaunay.find(...p)

      points.classed('highlighted', (_, j) => i === j)
      select(points.nodes()[i])
        .raise()
        .attr('r', hoverR)
        .attr('fill-opacity', 1.0)

      onHover(shownNodes[i])
    }).on('mouseleave', () => {
      clearHoverStyle()
      onHover(null)
    })

    const clearHoverStyle = () => {
      svg.selectAll('.node').attr('r', r).attr('fill-opacity', opacity)
      points.classed('highlighted', false)
    }
  }, [ref])


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

  const path = geoPath(projection)

  return (
    <svg viewBox="0 0 959 650" width="100%" height="100%" ref={ref}>
      <path fill="#eee" d={path(topojson.feature(us, us.objects.nation))} stroke="#aaa" strokeWidth="1"></path>
      <path
        fill="none"
        stroke="#aaa"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
        d={path(topojson.mesh(us, us.objects.states, (a, b) => a !== b))}>
      </path>
    </svg>
  )
}


function getNodes() : Promise<Node[]> {
  return fetch('https://auth.sagecontinuum.org/api/v-beta/nodes/?project__name=sage')
    .then(res => res.json())
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

  const nodesWithGps = (visibleNodes || []).filter(obj =>
    (obj.gps_lon && obj.gps_lat) || notShownVSNs.includes(obj.vsn)
  )
  const nodeCount = (visibleNodes || []).length


  if (error)
    return <p>{error}</p>

  return (
    <div className="flex flex-col md:flex-row md:justify-center">
      <div className="md:w-9/12 max-w-3xl">
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
      </div>

      <div className="md:w-3/12 flex mt-12 md:ml-12">
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
