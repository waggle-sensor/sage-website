import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'

import GitHub from '@mui/icons-material/GitHub'
import Twitter from '@mui/icons-material/Twitter'

import config from '../config'
const {docs} = config



export default function Footer() {

  return (
    <Root className="bg-neutral-900">
      <div className="section flex flex-col md:flex-row justify-between py-10 text-neutral-200">
        <div>
          <div className="flex muted items-center">
            <img src="https://www.nsf.gov/policies/images/NSF_Official_logo.svg" width="150"/>
            <div>
              SAGE is supported by<br/> NSF Mid-Scale RI-1 grant #1935984
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-neutral-200">About</h4>
          <ul>
            <li><a href="https://sagecontinuum.org/news/" target="_blank" rel="noreferrer">News</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">Docs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-neutral-200">Browse</h4>
          <ul>
            <li><Link to="/">browse 1</Link></li>
            <li><Link to="/">browse 2</Link></li>
            <li><Link to="/">foo bar</Link></li>
            <li><Link to="/">some link</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-neutral-200">Contact</h4>
          <ul>
            <li><Link to={`${docs}/contact-us`}>Contact us</Link></li>
          </ul>
          <div className="flex">
            <IconButton href="https://github.com/waggle-sensor" target="_blank"><GitHub sx={{color: '#aaa'}}/></IconButton>
            <IconButton><Twitter sx={{color: '#aaa'}}/></IconButton>
          </div>
        </div>
      </div>
    </Root>
  )
}

const Root = styled.footer`
  height: 400px;

  ul {
    padding:0;
    list-style: none;
    a {
      color: #999999;
    }
  }
`