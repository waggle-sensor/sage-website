
export type Team = 'leadership' | 'collab' | 'ci' | 'ai' | 'platform' | 'past-collab' | 'past-member'

export type TeamMember = {
  name: string
  image: string
  institution: string
  title: string
  teams: Team | Team[]
  href?: string
}
