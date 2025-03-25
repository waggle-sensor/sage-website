import styled from 'styled-components'

import type { TeamMember } from '../directory'



const TeamCard = (props: TeamMember) => {
  const { name, image, institution, title, href } = props;

  return (
    <div className="flex flex-row m-5">
      <div className="card z-0 w-[256px] md:w-[160px] md:h-[160px]">
        {href ?
          <a href={href}>
            <img src={image} />
          </a> :
          <img src={image} />
        }
      </div>
      <div className="m-0 py-2 px-4 w-[275px] max-w-[275px]">
        <h3>{href ? <a href={href}>{name}</a> : name}</h3>
        <div>{institution}</div>
        <div><i>{title}</i></div>
      </div>
    </div>
  )
}

const LinkCard = (props: TeamMember) => {
  return <TeamCard {...props} />
}

type Props = {
  data: TeamMember[]
}

export default function Team(props: Props) {
  const { data: team } = props

  return (
    <Root>
      <div className="flex flex-wrap -m-5">
        {team.map((person) => (
          <LinkCard key={person.name} {...person} />
        ))}
      </div>
    </Root>
  )
}


const Root = styled.div`
  a:hover h3 {
    color: rgb(0, 128, 199);
    text-decoration: underline;
  }
`

