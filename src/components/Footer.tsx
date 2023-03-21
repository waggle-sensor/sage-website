import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'

import GitHub from '@mui/icons-material/GitHub'
import Twitter from '@mui/icons-material/Twitter'

import config from '../config'
const {portal} = config



export default function Footer() {

  return (
    <Root className="bg-neutral-900">
      <div className="section flex flex-col md:flex-row justify-between py-10 text-neutral-200">
        <div>
          <div className="flex muted items-center">
            <img src="https://www.nsf.gov/policies/images/NSF_Official_logo.svg" width="150"/>
            <div>
              Sage is supported by<br/> NSF Mid-Scale RI-1 grant #1935984
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-neutral-200">About</h4>
          <ul>
            <li><Link to="about">Science</Link></li>
            <li><Link to="blog">News</Link></li>
            <li><Link to="about">Publications</Link></li>
            <li><Link to="docs">Docs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-neutral-200">Browse</h4>
          <ul>
            <li><a href={`${portal}/apps`}>Apps</a></li>
            <li><a href={`${portal}/data`}>Data</a></li>
            <li><a href={`${portal}/query-browser`}>Query Browser</a></li>
            <li><a href={`${portal}/nodes`}>Nodes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-neutral-200">Contact</h4>
          <ul>
            <li><Link to={`docs/contact-us`}>Contact us</Link></li>
          </ul>
          <div className="flex">
            <IconButton href="https://github.com/waggle-sensor" target="_blank">
              <GitHub className="text-neutral-200" />
            </IconButton>
            <IconButton href="https://twitter.com/sagecontinuum" target="_blank">
              <Twitter className="text-neutral-200" />
            </IconButton>
          </div>
        </div>
      </div>
    </Root>
  )
}

const Root = styled.footer`
  ul {
    padding:0;
    list-style: none;
    a {
      color: #999999;
    }
  }
`