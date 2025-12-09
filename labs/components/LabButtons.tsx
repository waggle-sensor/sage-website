import { Button } from '@mui/material'
import { labProjects } from '../labsData'
import { GitHub } from '@mui/icons-material'

type LabButtonsProps = {
  id: string
  variant?: 'horizontal' | 'vertical'
}

export default function LabButtons({ id, variant = 'horizontal' }: LabButtonsProps) {
  const project = labProjects.find(p => p.id === id)

  if (!project) {
    return null
  }

  const containerClass = variant === 'horizontal'
    ? 'flex gap-4 mb-6'
    : 'flex flex-col gap-4 mb-6'

  return (
    <div className={containerClass}>
      {project.primaryButton && (
        <Button
          variant="contained"
          {...(project.primaryButton.external
            ? { href: project.primaryButton.url }
            : { href: project.primaryButton.url }
          )}
          className="!normal-case"
        >
          {project.primaryButton.text}
        </Button>
      )}
      {project.githubUrl && (
        <Button

          startIcon={<GitHub />}
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="!normal-case"
        >
          View on GitHub
        </Button>
      )}
    </div>
  )
}
