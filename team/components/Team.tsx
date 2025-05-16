import styled from 'styled-components'

import type { TeamMember } from '../directory'



const TeamCard = (props: TeamMember) => {
  const { name, image, institution, title, href } = props;

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
        <div className="text-gray-500 italic">{title}</div>
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
    <Root className="w-full">
      <div className="w-full">
        <div className="flex flex-wrap -mx-4">
          {team.map((person) => (
            <div key={person.name} className="w-full md:w-1/2 px-4 mb-8">
              <LinkCard {...person}/>
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

