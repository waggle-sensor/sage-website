import React from 'react'
import styled from 'styled-components'
import Layout from '@theme/Layout'

import team, { type TeamMember } from '../team-list'

import { createGlobalStyle } from 'styled-components'

const ScrollPadding = createGlobalStyle`
  html {
    scroll-padding-top: 65px;
  }
`;


const TeamCard = (props: TeamMember) => {
  const {name, image, institution, title} = props
  return (
    <div className="flex">
      <div className="card z-0 relative w-[256px] md:w-[160px] md:h-[160px]">
        <img src={image} className=""/>
      </div>
      <p className="m-0 py-2 px-4">
        <h3>{name}</h3>
        <div>{institution}</div>
        <div><i>{title}</i></div>
      </p>
    </div>
  )
}


const LinkCard = (props: TeamMember) => {
  const {href, ...rest} = props
  return (
    <>
      {href ?
        <a href={href} className="card-container m-5">
          <TeamCard {...rest} />
        </a> :
        <div className="card-container m-5">
          <TeamCard {...rest} />
        </div>
      }
    </>
  )
}

export default function Team() {
  return (
    <Layout title="Team" description="Sage Team">
      <ScrollPadding />
      <Root className="md:max-w-screen-md lg:max-w-screen-lg mx-auto my-5">
        <h1>Team</h1>

        <p>The Sage team brings together experts from institutions across the country.</p>

        <ul>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#collaborators">Collaborators</a></li>
        </ul>

        <h2 id="leadership">Leadership</h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center -m-5">
          {team.map(person => <LinkCard key={person.name} {...person} />)}
        </div>

        <h2>Collaborators</h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center -m-5">
          {team.map(person => <LinkCard key={person.name} {...person} />)}
        </div>
      </Root>
    </Layout>
  )
}


const Root = styled.div`
  .card::after {
    display: block;
    position: relative;

    margin-top: -80px;
    height: 80px;
    width: 100%;
    content: '';
  }

  a:hover h3 {
    color: rgb(0, 128, 199);
    text-decoration: underline;
  }

  .card-container p,
  .card-container:hover p {
    color: #444;
    text-decoration: none;
  }
`

