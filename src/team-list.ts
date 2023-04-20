export type TeamMember = {
  name: string
  image: string
  institution: string
  title: string
  href?: string
}


const team : TeamMember[] = [{
  name: 'Pete Beckman',
  image: require('@site/static/img/team/pete_beckman.jpg').default,
  institution: 'Northwestern University / ANL',
  title: 'Director',
  href: 'https://www.anl.gov/profile/pete-beckman',
}, {
  name: 'Nicola Ferrier',
  image: require('@site/static/img/team/nicola_ferrier.jpg').default,
  institution: 'Northwestern University / ANL',
  title: 'Deputy Director / ML@Edge',
  href: 'https://www.anl.gov/profile/nicola-j-ferrier'
}, {
  name: 'Daniel Reed',
  image: require('@site/static/img/team/dan_reed-2.jpg').default,
  institution: 'University of Utah',
  title: 'Chief Architect',
  href: null
}, {
  name: 'Jim Olds',
  image: require('@site/static/img/team/James-Olds-400.jpg').default,
  institution: 'George Mason University',
  title: 'Risk Management'
}, {
  name: 'Scott Collis',
  image: require('@site/static/img/team/scott_collis.jpeg').default,
  institution: 'Northwestern University / ANL',
  title: 'Instru. Chair / Atmosphere',
  href: 'https://www.anl.gov/profile/scott-m-collis'
}, {
  name: 'Eugene Kelly',
  image: require('@site/static/img/team/Eugene_Kelly-1-1024x1024.jpg').default,
  institution: 'Colorado State University',
  title: 'Bio / Ecology (NEON)',
  href: 'https://soilcrop.agsci.colostate.edu/faculty-2/kelly-eugene/'
}, {
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
}, {
  name: 'Ilkay Altintas',
  image: require('@site/static/img/team/ilkay_altintas.jpg').default,
  institution: 'Univ. of California-San Diego / SDSC',
  title: 'Cyberinfrastructure / Data Architect',
  href: 'https://words.sdsc.edu/ilkay/'
}, {
  name: 'Rajesh Sankaran',
  image: require('@site/static/img/team/raj_sankaran-1.jpg').default,
  institution: 'Northwestern University / ANL',
  title: 'Chief Platform Architect',
  href: 'https://www.anl.gov/profile/rajesh-sankaran'
}, {
  name: 'Valerie Taylor',
  image: require('@site/static/img/team/valerie-taylor.jpg').default,
  institution: 'University of Chicago / ANL',
  title: 'Education Chair / Curricula',
  href: 'https://www.anl.gov/profile/valerie-e-taylor'
}, {
  name: 'Mike Papka',
  image: require('@site/static/img/team/mike_papka.jpg').default,
  institution: 'University of Illinois Chicago / ANL',
  title: 'Education and Research Testbed',
  href: 'https://cs.uic.edu/profiles/papka-michael'
}, {
  name: 'Irene Qualters',
  image: require('@site/static/img/team/irene_qualters.jpeg').default,
  institution: 'Los Alamos National Lab',
  title: 'Advisory Committee Chair',
  href: 'https://www.lanl.gov/about/leadership-governance/ald-simu-comp.php'
}]


export default team
