import React, { useCallback, useEffect, useRef, useState } from 'react'

import { geoPath, geoAlbersUsa } from 'd3-geo'
import { select, pointer } from 'd3-selection'
import { axisTop } from 'd3-axis'
import { scaleLinear } from 'd3-scale'
import { Delaunay } from 'd3-delaunay'
import { schemeCategory10 as colorScheme } from 'd3-scale-chromatic'
import * as topojson from 'topojson'

import { groupBy, uniq } from 'lodash'

import us from '@site/static/geo/states-albers-10m.json'




// the bare min Job type; todo(nc): import client/component lib
type JobMap = {
  [jobID: number]: {
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
}

type App = {
  appName: string
  image: string
}

type AppSummary = App & {
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
      .attr('cursor', 'pointer')

    select(ref.current).append("defs").append("style")
      .text(`circle.highlighted { stroke: ${colorScheme[0]}; fill: ${colorScheme[0]}; }`);

    svg.selectAll("g").remove()

    const g = svg.append("g")

    const points = g
      .selectAll("g")
      .data(nodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('transform', d => `translate( ${projection([d.gps_lon, d.gps_lat]).join(",")} )`)
      .attr('r', 5)
      .attr('fill', color || 'rgb(0, 58, 29)')
      .on('click', (evt, d) => {
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


  const projection = geoAlbersUsa().scale(1300).translate([487.5, 305])
  const path = geoPath()
  const delaunay = Delaunay.from(nodes, d => d.gps_lon, d => d.gps_lat)

  return (
    <svg viewBox="0 0 959 650" width="100%" height="100%" ref={ref}>
      <path fill="#ddd" d={path(topojson.feature(us, us.objects.nation))}></path>
      <path
        fill="none"
        stroke="#fff"
        stroke-linejoin="round"
        stroke-linecap="round"
        d={path(topojson.mesh(us, us.objects.states, (a, b) => a !== b))}>
      </path>
    </svg>
  )
}



type ChartProps = {
  chartEle: HTMLElement
  apps: AppSummary[]
  onHover: (appName: string) => void
}

function initChart(props: ChartProps) {
  const {chartEle, apps, onHover} = props

  const margin = { top: 40, left: 30, right: 20, bottom: 20 }
  const canvasWidth = 600
  const canvasHeight = 550

  const maxNodes = apps[0].nodes.length

  const svg = select(chartEle).append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', `0 0 ${canvasWidth} ${canvasHeight}`)

  // create scaling functions
  const x = scaleLinear()
    .domain([0, maxNodes])
    .range([margin.left, canvasWidth - margin.right])


  // create axis
  const xAxis = axisTop(x)

  svg.append('g')
    .attr('transform', `translate(0, ${margin.top})`)
    .call(xAxis)

  const bars = svg.append('g')
    .style('cursor', 'pointer')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

  const groups = bars.selectAll(".groups")
    .data(apps)
    .enter()
    .append("g")
    .on('mouseenter', function(evt, d) {
      select(this).select('rect').attr('opacity', 1.0)
      setTimeout(() => onHover(d.appName)) // prevent flicker when entering new
    })
    .on('mouseleave', function() {
      select(this).select('rect').attr('opacity', .5)
      setTimeout(() => onHover(null))
    })
    .attr('cursor', 'pointer')
    .on('click', (evt, d) => {
      const path = d.image.replace('registry.sagecontinuum.org/', '').split(':')[0]
      window.open(`https://portal.sagecontinuum.org/apps/app/${path}?tab=data`)
    })

  groups.append('rect')
    .attr('class', 'node')
    .attr('x', 0)
    .attr('y', (d, i) => i * (barHeight))
    .attr('width', (d) => {
      const {nodes} = d
      const nodeCount = nodes.length
      const w = (nodeCount / maxNodes) * (canvasWidth - margin.right - margin.left)

      return w
    })
    .attr('height', barHeight)
    .attr('opacity', .5)
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)
    .attr('fill', (d, i) => colorScheme[i % 8])

  groups.append('text')
    .text((d) => d.appName)
    .attr('x', 4)
    .attr('y', (d, i) => (i) * (barHeight) + (barHeight/2) + 2)
    .attr('dominant-baseline', 'middle')
    .attr('font-weight', '500')
    .attr('fill', '#000')
    .attr('font-size', '12px')

  svg.append('text')
    .text('Number of Nodes')
    .attr('x', canvasWidth / 2)
    .attr('y', 15)
    .attr('text-anchor', 'middle')
    .attr('font-weight', '500')
    .attr('fill', '#33')

  const xPos = 10, yPos = canvasHeight / 2
  svg.append('text')
    .text('Active Applications')
    .attr('x', xPos)
    .attr('y', yPos)
    .attr('font-weight', '500')
    .attr('fill', '#333')
    .attr('dominant-baseline', 'central')
    .attr('text-anchor', 'middle')
    .attr('transform', `rotate(-90,${xPos},${yPos})`)
}



function getNodes() : Promise<Node[]> {
  const p1 = fetch('https://auth.sagecontinuum.org/manifests/')
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


function getRecentApps() : Promise<AppSummary[]> {
  return fetch('https://es.sagecontinuum.org/api/v1/jobs/list')
    .then(res => res.json())
    .then(jobMap => {

      // only consider active "running" jobs
      const jobs = Object.values(jobMap as JobMap)
        .filter(obj => obj.state.last_state.toLowerCase() == 'running')

      // flatten job into data {appName, image, nodes}
      const apps = jobs.flatMap(job => {
        const app = job.plugins.map(plugin => ({
          appName: plugin.name.replace(/\-top|\-bottom|\-left|\-right/g, ''), // ignore orientations
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
      const summary = Object.values(byApp)

      return summary as AppSummary[]
   })
}

const nodesToPoints = (nodes) =>
  nodes.map(obj => [obj.gps_lon, obj.gps_lat])



const barHeight = 25



export default function StatusChart() {
  const ref = useRef<HTMLCanvasElement>()
  const chartRef = useRef()
  const [globe, setGlobe] = useState<{context: CanvasRenderingContext2D, path}>()

  const [nodes, setNodes] = useState<Node[]>()
  const [visibleNodes, setVisibleNodes] = useState<Node[]>()

  const [apps, setApps] = useState<AppSummary[]>()

  const [appsOnNode, setAppsOnNode] = useState<App[]>()
  const [node, setNode] = useState<Node>()

  const [error, setError] = useState<string>(null)

  const [hoverID, setHoverID] = useState<string>(null)


  useEffect(() => {
    Promise.all([getRecentApps(), getNodes()])
      .then(([apps, nodes]) => {
        // only include relevant nodes for each app
        const vsns = nodes.map(obj => obj.vsn)
        apps = apps
          .map(obj => ({...obj, nodes: obj.nodes.filter(vsn => vsns.includes(vsn))}))
          .filter(obj => obj.nodes.length)
          .sort((a, b) => b.nodes.length - a.nodes.length)

        setApps(apps)
        setNodes(nodes)
        setVisibleNodes(nodes)
      })
      .catch(err => setError('The AI/ML status view is currently unavailable.'))
  }, [])


  useEffect(() => {
    if (!apps || !nodes) return

    const chartEle = chartRef.current
    initChart({chartEle, apps, onHover: handleChartHover})
  }, [apps, nodes])


  const handleChartHover = (appName) => {
    if (!appName) {
      // show all nodes
      setVisibleNodes(nodes)
      setHoverID(null)
      return
    }

    const vsns = apps.find(obj => obj.appName == appName).nodes
    let showNodes = nodes.filter(obj => vsns.includes(obj.vsn))

    setVisibleNodes(showNodes)
    setHoverID(appName)
  }

  const handleMapHover = (node: Node) => {
    if (!node) {
      setAppsOnNode(null)
      setNode(null)

      chartRef.current.innerHTML = "";
      const chartEle = chartRef.current
      initChart({chartEle, apps, onHover: handleChartHover})
      return
    }

    setNode(node)

    const appList = (apps || []).filter(obj => obj.nodes.includes(node.vsn))
    setAppsOnNode(appList)
  }

  const nodesWithGps = (visibleNodes || []).filter(obj => obj.gps_lon && obj.gps_lat)
  const nodeCount = (visibleNodes || []).length

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-7/12">
        {visibleNodes && apps &&
          <Map
            title={
              node ? `Node ${node.vsn}` : (
              hoverID ?
                `${nodeCount} node${nodeCount > 1 ? 's are' : ' is'} running ${hoverID}` :
                `${nodeCount} Node${nodeCount > 1 ? 's' : ''}` )
            }
            nodes={nodesWithGps}
            onHover={handleMapHover}
            color={colorScheme[apps.findIndex(obj => obj.appName == hoverID) % 8] || null }
          />
        }

        {error &&
          <p>{error}</p>
        }
      </div>

      <div className="md:w-5/12">
        {!appsOnNode &&
          <div ref={chartRef}></div>
        }

        {appsOnNode && node &&
          <div className="mx-5">
            <h3>
              <span className="text-purple">Node {node.vsn}</span>
              <span className="text-gray-700"> | {appsOnNode.length} active apps</span>
            </h3>
            <ul className="list-none p-0">
              {appsOnNode.map(obj => {
                const {appName} = obj
                return (
                  <li key={appName}>{appName}</li>
                )
              })}
            </ul>
          </div>
        }
      </div>

    </div>
  )
}
