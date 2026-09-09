import React, {useCallback, useMemo, useRef, useState} from 'react'
import * as topojson from 'topojson-client'
import {Delaunay} from 'd3-delaunay'
import {geoAlbersUsa, geoPath} from 'd3-geo'
import us from '@site/static/geo/states-albers-10m.json'

import './camp.css'

import {sites, offMapSites, totalParticipants, type Site} from './campData'

// Where the camp's people came from: one dot per campus, sized by how many
// participants it sent, on the same Albers projection the homepage node map uses.

const WIDTH = 975
const HEIGHT = 610

// The bundled states-albers-10m.json is *already projected* — its coordinates are
// screen space (bbox ~[-58, 13, 957, 607]), not lon/lat. So the outlines are drawn
// with the identity path, while the campus dots go through the matching Albers
// projection at d3's reference scale, which is the one that file was baked with.
// Feeding the topology through the projection instead would re-project it and
// shred the geometry.
const projection = geoAlbersUsa().scale(1300).translate([487.5, 305])
const path = geoPath(null)

// Four Chicago-area schools fall within ~6px of each other at this scale, which
// is smaller than a single dot. Collapse anything inside this radius into one
// marker that carries the whole group, rather than drawing a smudge.
const CLUSTER_RADIUS = 14

type Placed = Site & {x: number; y: number}
type Cluster = {
  x: number
  y: number
  members: Placed[]
  people: number
  host: boolean
}

function buildClusters(): Cluster[] {
  const placed: Placed[] = []
  for (const site of sites) {
    const xy = projection([site.lon, site.lat])
    if (xy) placed.push({...site, x: xy[0], y: xy[1]})
  }

  const clusters: Cluster[] = []
  for (const p of placed) {
    const near = clusters.find(c => Math.hypot(c.x - p.x, c.y - p.y) < CLUSTER_RADIUS)
    if (near) {
      near.members.push(p)
    } else {
      clusters.push({x: p.x, y: p.y, members: [p], people: 0, host: false})
    }
  }

  for (const c of clusters) {
    c.people = c.members.reduce((sum, m) => sum + m.people, 0)
    c.host = c.members.some(m => m.host)
    // Anchor the cluster on its busiest member so the dot sits on a real campus.
    const anchor = [...c.members].sort((a, b) => b.people - a.people)[0]
    c.x = anchor.x
    c.y = anchor.y
  }
  return clusters
}

// Area-proportional radius: a site with four people reads as four times the ink
// of a site with one, which a linear radius would exaggerate to sixteen.
const radius = (people: number) => 4.5 + Math.sqrt(people) * 3.4

// Fixed reference sizes rather than one dot per integer: 1, 4, and 8 people
// give the reader enough anchors to interpolate the area-proportional scale
// without the key becoming a long row of near-identical small dots.
const KEY_VALUES = [1, 4, 8]
const keySteps = () => KEY_VALUES

// Labels for the sparse parts of the map only — the Northeast and the Chicago
// cluster are too crowded to label in place, so those names live in the tooltip.
// A left-anchored label near the west coast would run off the viewBox, so the
// California dots label below instead.
const LABEL_SIDE: Record<string, 'left' | 'right' | 'below' | null> = {
  'UH Mānoa': 'right',
  'Colorado State': 'left',
  'UC Davis': 'below',
  'USC': 'below',
  'Utah': 'left',
  'Kansas': 'below',
  'Florida': 'right',
  'Georgia Tech': 'right',
  'Maine': 'left',
}

export default function AttendeeMap() {
  const clusters = useMemo(buildClusters, [])
  const [active, setActive] = useState<Cluster | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  // Nearest-point hover, the way the homepage node map does it: a Delaunay
  // triangulation over the dots means the pointer only has to be *closest* to a
  // dot, never on it. Without this, a 9px marker on a 975-unit-wide map is a
  // pinpoint nobody hits.
  const delaunay = useMemo(
    () => Delaunay.from(clusters.map(c => [c.x, c.y] as [number, number])), [clusters])

  // The pointer arrives in CSS pixels; the dots live in viewBox units, and the
  // SVG is scaled to its container. Convert before asking Delaunay anything.
  const handleMove = useCallback((event: React.PointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current
    if (!svg) return
    const box = svg.getBoundingClientRect()
    const x = ((event.clientX - box.left) / box.width) * WIDTH
    const y = ((event.clientY - box.top) / box.height) * HEIGHT
    const i = delaunay.find(x, y)
    if (i >= 0) setActive(clusters[i])
  }, [clusters, delaunay])

  const nation = useMemo(
    () => path(topojson.feature(us as any, (us as any).objects.nation) as any), [])
  const stateMesh = useMemo(
    () => path(topojson.mesh(us as any, (us as any).objects.states, (a, b) => a !== b) as any), [])

  const mappedPeople = sites.reduce((s, x) => s + x.people, 0)

  return (
    <figure className="camp-figure">
      <div className="camp-map">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" role="img"
          ref={svgRef}
          onPointerMove={handleMove}
          onPointerLeave={() => setActive(null)}
          aria-label={`Map of the United States showing the ${sites.length} campuses that sent participants to the 2026 Sage Summer Camp.`}>
          <path d={nation} fill="#f1f0ec" stroke="none" />
          <path d={stateMesh} fill="none" stroke="#dcdbd4" strokeWidth={1} />

          {clusters.map((c, i) => {
            const r = radius(c.people)
            const isActive = active === c
            const label = c.members.length === 1 ? c.members[0].short : null
            const side = label ? LABEL_SIDE[label] : null

            return (
              <g key={i}>
                {/* Pointer hover is handled by the Delaunay layer on the svg,
                    so this circle exists only to carry keyboard focus and the
                    accessible name. */}
                <circle
                  cx={c.x} cy={c.y} r={Math.max(r + 8, 14)}
                  fill="transparent"
                  pointerEvents="none"
                  tabIndex={0}
                  role="button"
                  aria-label={`${c.members.map(m => m.name).join(', ')}: ${c.people} ${c.people === 1 ? 'participant' : 'participants'}`}
                  onFocus={() => setActive(c)}
                  onBlur={() => setActive(null)}
                />
                <circle
                  cx={c.x} cy={c.y} r={r}
                  fill={c.host ? '#eb6834' : '#0080c7'}
                  fillOpacity={isActive ? 0.95 : 0.72}
                  stroke="#ffffff" strokeWidth={2}
                  pointerEvents="none"
                />
                {side && (
                  <text
                    x={side === 'left' ? c.x - r - 6 : side === 'right' ? c.x + r + 6 : c.x}
                    y={side === 'below' ? c.y + r + 14 : c.y + 4}
                    textAnchor={side === 'left' ? 'end' : side === 'right' ? 'start' : 'middle'}
                    fontSize={15} fill="#52514e" pointerEvents="none">
                    {label}
                  </text>
                )}
              </g>
            )
          })}

        </svg>

        {/* The key lives outside the SVG: every empty-looking patch of the
            projection is claimed by Alaska, Hawaii or Texas at some width, and
            an HTML row reflows on a phone where an SVG transform would not. */}
        <div className="camp-map-key">
          <span className="camp-key-group">
            <span className="camp-key-label">Participants</span>
            <span className="camp-key-scale">
              <svg
                width={keySteps().reduce((w, n) => w + radius(n) * 2 + 16, -16)}
                height={radius(KEY_VALUES[KEY_VALUES.length - 1]) * 2 + 16}
                aria-hidden="true">
                {keySteps().map((n, i, all) => {
                  const maxR = radius(all[all.length - 1])
                  const cx = all.slice(0, i)
                    .reduce((w, m) => w + radius(m) * 2 + 16, 0) + radius(n)
                  return (
                    <g key={n}>
                      <circle
                        cx={cx} cy={maxR} r={radius(n)}
                        fill="#0080c7" fillOpacity={0.72}
                        stroke="#ffffff" strokeWidth={2} />
                      <text x={cx} y={maxR * 2 + 14} textAnchor="middle" fontSize={12} fill="#52514e">
                        {n}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </span>
          </span>
          <span className="camp-key-group">
            <span className="camp-swatch camp-swatch-dot" />
            Host: UIC EVL, Chicago
          </span>
        </div>

        {active && (
          <div className="camp-tip" style={{
            left: `${(active.x / WIDTH) * 100}%`,
            top: `${(active.y / HEIGHT) * 100}%`,
          }}>
            <strong>{active.people} {active.people === 1 ? 'participant' : 'participants'}</strong>
            {active.members.map(m => <span key={m.name}>{m.name}</span>)}
          </div>
        )}
      </div>

      <figcaption>
        <strong>{totalParticipants} participants, {sites.length - 1} institutions, one lab.</strong>{' '}
        The four Chicago-area schools are merged into the marker
        at EVL. Hover any dot for the names behind it.
      </figcaption>
    </figure>
  )
}
