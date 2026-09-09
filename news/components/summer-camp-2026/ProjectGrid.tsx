import React from 'react'
import Link from '@docusaurus/Link'

import './camp.css'

import {projects} from './campData'

// Every camp project, linked to its full report under /science/2026. Thumbnails
// come from science/static/thumbnails, which is served at the site root because
// science/static is a configured staticDirectory.

export default function ProjectGrid() {
  return (
    <div className="camp-projects">
      {projects.map(p => (
        <Link className="camp-project" to={`/science/2026/${p.slug}`} key={p.slug}>
          <img src={`/thumbnails/${p.slug}.png`} alt="" loading="lazy" />
          <div className="camp-project-body">
            <h3>{p.title}</h3>
            <p className="camp-project-team">{p.team.join(' · ')}</p>
            <p className="camp-project-blurb">{p.blurb}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
