import styled from 'styled-components'

import type { TeamMember } from '../members/members.d'

import { createGlobalStyle } from 'styled-components'

const ScrollPadding = createGlobalStyle`
  html {
    scroll-padding-top: 65px;
  }
`;


const TeamCard = (props: TeamMember) => {
  const {name, image, institution, title, href} = props
  return (
    <div className="flex">
      <div className="card z-0 w-[256px] md:w-[160px] md:h-[160px]">
        {href ?
          <a href={href}>
            <img src={image} />
          </a> :
          <img src={image} />
        }
      </div>
      <p className="m-0 py-2 px-4">
        <h3>{href ? <a href={href}>{name}</a> : name}</h3>
        <div>{institution}</div>
        <div><i>{title}</i></div>
      </p>
    </div>
  )
}


const LinkCard = (props: TeamMember) => {
  return (
    <div className="card-container m-5 max-w-48">
      <TeamCard {...props} />
    </div>
  )
}

type Props = {
  data: TeamMember[]
}

export default function Team(props: Props) {
  const {data: team} = props

  return (
    <Root>
      <ScrollPadding />
      <div className="flex flex-col md:flex-row flex-wrap items-center -m-5">
        {team.map(person => <LinkCard key={person.name} {...person} />)}
      </div>
    </Root>
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
`

