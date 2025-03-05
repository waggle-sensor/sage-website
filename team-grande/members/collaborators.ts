import type { TeamMember } from './members'


const team : TeamMember[] = [{
  name: 'Scott Collis',
  image: require('@site/static/img/team/scott_collis.jpeg').default,
  institution: 'Northwestern University / ANL',
  title: 'Instru. Chair / Atmosphere',
  href: 'https://www.anl.gov/profile/scott-m-collis'
},  {
  name: 'Frank Vernon',
  image: require('@site/static/img/team/frank_vernon.png').default,
  institution: 'Univ. of California-San Diego',
  title: 'SoCal Network and Deployment',
  href: null
}, {
  name: 'Charlie Catlett',
  image: require('@site/static/img/team/charlie_catlett-3.jpg').default,
  institution: 'Univ. of Illinois Chicago / ANL',
  title: 'Urban / Chicago',
  href: null
}]


export default team
