import type { TeamMember } from './members'

import leadership from './leadership'


const overlapping = [
  'Sean Shahkarami', 'Neal Conrad'
]

const team : TeamMember[] = [
...leadership.filter(o => overlapping.includes(o.name)),
{
  name: 'Francisco Lozano',
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  institution: 'Northwestern University',
  title: 'Software Engineer',
  // href: ''
}, {
  name: 'Peter Lebiedzinski',
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  institution: 'Northwestern University',
  title: 'Software Engineer',
  // href: ''
}]




export default team
