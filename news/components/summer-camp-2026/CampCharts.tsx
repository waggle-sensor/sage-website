import React from 'react'

import './camp.css'

import {
  projects, days, levels, skills, agreement, quotes, surveyN,
  THEMES, totalParticipants, sites, type Theme,
} from './campData'

// Summary graphics for the camp write-up. Three small, quiet figures rather
// than one busy dashboard: what the week was made of, what the projects were
// about, and the four numbers worth remembering.

export function ScheduleStrip() {
  return (
    <figure className="camp-figure">
      <ol className="camp-days">
        {days.map(d => (
          <li key={d.date}>
            <span className="camp-day-rule" />
            <span className="camp-day-date">
              {d.date} <span className="camp-day-dow">{d.dow}</span>
            </span>
            <span className="camp-day-label">{d.label}</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}

export function ThemeChart() {
  const counts = THEMES
    .map(theme => ({theme, n: projects.filter(p => p.theme === theme).length}))
    .filter(t => t.n > 0)
    .sort((a, b) => b.n - a.n)

  const max = Math.max(...counts.map(c => c.n))

  return (
    <figure className="camp-figure">
      <div className="camp-bars" role="table"
        aria-label="Number of 2026 Sage Summer Camp projects by primary theme">
        <div className="camp-sr" role="row">
          <span role="columnheader">Theme</span>
          <span role="columnheader">Projects</span>
        </div>
        {counts.map(({theme, n}) => (
          <div className="camp-bar-row" role="row" key={theme}>
            <span className="camp-bar-label" role="rowheader">{theme}</span>
            <span className="camp-bar-track">
              <span className="camp-bar-fill" style={{width: `${(n / max) * 100}%`}} />
              <span className="camp-bar-value" role="cell">{n}</span>
            </span>
          </div>
        ))}
      </div>

      <figcaption>
        Fourteen projects by primary theme. Ecology leads, with bats, wild rice,
        bird behavior, and animals worth staying away from. Every project had to
        survive the same constraint: it runs on the node, not in a data center.
      </figcaption>
    </figure>
  )
}

// Career stage is a part-to-whole of one fixed population (the 30 attendees),
// so it reads as a donut rather than a second bar chart competing with the
// themes one. Hue is keyed to the stage itself, never to its rank, so a slice
// keeps its color if next year's numbers reorder it.
const LEVEL_COLOR: Record<string, string> = {
  'Graduate student': '#0080c7',
  'Research staff / faculty': '#eb6834',
  'Early career / recent grad': '#1baf7a',
  'Undergraduate': '#4a3aa7',
}

export function LevelChart() {
  const total = levels.reduce((s, l) => s + l.n, 0)

  // Drawn with stroke-dasharray on one circle per slice: each arc is a dash of
  // its own share of the circumference, offset by everything before it. Starts
  // at twelve o'clock and runs clockwise. The 2px gap between arcs is the
  // surface showing through, not a stroke, so slices stay distinct without a
  // border around each one.
  const SIZE = 180
  const STROKE = 26
  const r = SIZE / 2 - STROKE / 2
  const circumference = 2 * Math.PI * r

  let offset = 0
  const arcs = levels.map(({level, n}) => {
    const length = (circumference * n) / total
    const arc = {level, n, length, offset}
    offset += length
    return arc
  })

  return (
    <figure className="camp-figure camp-figure-aside">
      <div className="camp-donut">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width={SIZE} height={SIZE}
          role="img"
          aria-label={`Career stage of the ${total} attendees. ` +
            levels.map(l => `${l.level}: ${l.n}`).join('. ')}>
          <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
            {arcs.map(({level, length, offset: o}) => (
              <circle key={level}
                cx={SIZE / 2} cy={SIZE / 2} r={r}
                fill="none"
                stroke={LEVEL_COLOR[level]}
                strokeWidth={STROKE}
                strokeDasharray={`${Math.max(length - 2, 0)} ${circumference - Math.max(length - 2, 0)}`}
                strokeDashoffset={-o} />
            ))}
          </g>
          <text x={SIZE / 2} y={SIZE / 2 - 4} textAnchor="middle"
            fontSize={34} fontWeight={600} fill="#0b0b0b">{total}</text>
          <text x={SIZE / 2} y={SIZE / 2 + 18} textAnchor="middle"
            fontSize={13} fill="#898781">attendees</text>
        </svg>

        <ul className="camp-donut-key">
          {levels.map(({level, n}) => (
            <li key={level}>
              <span className="camp-swatch" style={{background: LEVEL_COLOR[level]}} />
              <span className="camp-donut-key-label">{level}</span>
              <span className="camp-donut-key-n">{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  )
}

export function CampStats() {
  const stats = [
    {value: totalParticipants, label: 'Participants'},
    {value: projects.length, label: 'Projects'},
    {value: sites.length - 1, label: 'Institutions represented'},
    {value: days.length, label: <>Days at UIC</>},
  ]

  return (
    <div className="camp-stats">
      {stats.map(s => (
        <div className="camp-stat" key={s.label}>
          <div className="camp-stat-value">{s.value}</div>
          <div className="camp-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

// Before/after confidence, as a dumbbell: one row per skill, a gray dot for the
// starting point and a blue dot for where they finished, with the gain as the
// connector. This is the emphasis pattern rather than a categorical pair — the
// story is the move, so the "after" carries the accent hue and the "before"
// recedes. Two shades of the same blue would fail the separation floor.
const BEFORE_INK = '#898781'
const AFTER_INK = '#0080c7'

export function SkillsChart() {
  // The survey's scale runs 1–5; plotting the full scale rather than cropping
  // to the data keeps the size of each gain honest.
  const MIN = 1
  const MAX = 5
  const pct = (v: number) => ((v - MIN) / (MAX - MIN)) * 100

  return (
    <figure className="camp-figure">
      <div className="camp-legend">
        <span className="camp-legend-item">
          <span className="camp-dot" style={{background: BEFORE_INK}} /> Before the camp
        </span>
        <span className="camp-legend-item">
          <span className="camp-dot" style={{background: AFTER_INK}} /> After
        </span>
      </div>

      <div className="camp-dumbbells" role="table"
        aria-label="Self-rated confidence before and after the camp, 1 to 5">
        {skills.map(({skill, before, after}) => (
          <div className="camp-dumbbell-row" role="row" key={skill}>
            <span className="camp-bar-label" role="rowheader">{skill}</span>
            <span className="camp-dumbbell-track">
              <span className="camp-dumbbell-rule" />
              <span className="camp-dumbbell-gain"
                style={{left: `${pct(before)}%`, width: `${pct(after) - pct(before)}%`}} />
              <span className="camp-dumbbell-dot"
                style={{left: `${pct(before)}%`, background: BEFORE_INK}} />
              <span className="camp-dumbbell-dot"
                style={{left: `${pct(after)}%`, background: AFTER_INK}} />
            </span>
            <span className="camp-dumbbell-delta" role="cell">
              +{(after - before).toFixed(1)}
            </span>
          </div>
        ))}
        <div className="camp-dumbbell-axis" aria-hidden="true">
          <span className="camp-bar-label" />
          <span className="camp-dumbbell-ticks">
            {[1, 2, 3, 4, 5].map(t => <span key={t}>{t}</span>)}
          </span>
          <span />
        </div>
      </div>

      <figcaption>
        Self-rated confidence, 1 (not at all) to 5 (extremely), averaged over the{' '}
        {surveyN} respondents.
      </figcaption>
    </figure>
  )
}

// With n=17 and every value between 13 and 17, proportional bars are useless —
// 17/17 and 16/17 differ by about four pixels. A unit chart encodes each
// respondent as one cell instead, so the reader counts the gap rather than
// judging a length: a single dissent is visibly a single dissent.
export function AgreementChart() {
  return (
    <figure className="camp-figure">
      <div className="camp-units" role="table"
        aria-label={`Share of the ${surveyN} survey respondents agreeing with each statement`}>
        {agreement.map(({statement, agree}) => (
          <div className="camp-unit-row" role="row" key={statement}>
            <span className="camp-bar-label camp-bar-label-wide" role="rowheader">
              {statement}
            </span>
            <span className="camp-unit-cells" aria-hidden="true">
              {Array.from({length: surveyN}, (_, i) => (
                <span key={i}
                  className={i < agree ? 'camp-unit camp-unit-on' : 'camp-unit'} />
              ))}
            </span>
            <span className="camp-unit-value" role="cell">{agree}/{surveyN}</span>
          </div>
        ))}
      </div>

      <figcaption>
        Agreed or strongly agreed; one square per respondent.
        Documentation was mentioned most often when asked what to improve.
      </figcaption>
    </figure>
  )
}

// The survey question each quote answers is context, not headline: it sits under
// the quote, revealed on hover and on keyboard focus. `tabIndex` and the visible
// focus ring in the CSS keep it reachable without a mouse, and it is always in
// the accessibility tree, so nothing is gated behind the interaction.
export function Quotes() {
  return (
    <div className="camp-quotes">
      {quotes.map(q => (
        <figure className="camp-quote" key={q.text} tabIndex={0}>
          <blockquote>{q.text}</blockquote>
          <figcaption>
            <span className="camp-quote-prompt">When asked about {q.prompt}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
