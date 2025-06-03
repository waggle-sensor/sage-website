import styled from 'styled-components'

import { getTeam, type TeamMember, type Team } from '../directory'



const TeamCard = (props: TeamMember & {team: Team}) => {
  const { name, image, institution, title, href, teamName } = props;

  return (
    <div className="flex flex-row w-full h-full">
      <div className="rounded-full bg-gray-100 rounded-lg overflow-hidden mr-4">
        {href ?
          <a href={href} className="block flex items-center justify-center">
            <img
              src={image}
              className="object-none rounded-md "
              style={{ maxWidth: '160px', maxHeight: '160px' }}
              alt={name}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/160?text=No+Image';
              }}
            />
          </a> :
          <img
            src={image}
            className="object-none rounded-md "
            style={{ maxWidth: '160px', maxHeight: '160px' }}
            alt={name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/160?text=No+Image';
            }}
          />
        }
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium text-gray-900">{href ? <a href={href} className="hover:text-blue-600">{name}</a> : name}</h3>
        <div className="text-gray-600">{institution}</div>
        <i className="text-gray-500">{typeof title == 'string' ? title : title[teamName]}</i>
      </div>
    </div>
  )
}

const LinkCard = (props: TeamMember) => {
  return <TeamCard {...props} />
}

type Props = {
  team: Team
}

export default function Team(props: Props) {
  const { team: teamName } = props

  const team = getTeam(teamName)

  return (
    <Root className="w-full">
      <div className="w-full">
        <div className="flex flex-wrap -mx-4">
          {team.map((person) => (
            <div key={person.name} className="w-full md:w-1/2 px-4 mb-8">
              <LinkCard {...person} teamName={teamName} />
            </div>
          ))}
        </div>
      </div>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  max-width: 100%;

  a {
    transition: color 0.2s ease-in-out;
  }

  h3 a:hover {
    color: rgb(0, 128, 199);
    text-decoration: underline;
  }
`

