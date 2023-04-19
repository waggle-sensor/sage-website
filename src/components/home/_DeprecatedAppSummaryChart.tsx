import { select } from 'd3-selection'
import { axisTop } from 'd3-axis'
import { scaleLinear } from 'd3-scale'
import { schemeCategory10 as colorScheme } from 'd3-scale-chromatic'

import { AppSummary } from './StatusChart'


const barHeight = 25


type ChartProps = {
  chartEle: HTMLElement
  apps: AppSummary[]
  onHover: (appName: string) => void
}

export function initChart(props: ChartProps) {
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
