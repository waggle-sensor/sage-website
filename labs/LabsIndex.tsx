
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '@site/src/components/Card'
import Button from '@mui/material/Button'
import { GitHub } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { labProjects } from './labsData'

export default function LabsIndex() {
  return (
    <Root className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
        {labProjects.map((project) => (
          <Card key={project.detailsUrl} to={project.detailsUrl} className="flex flex-col h-full">
            {/* Image or Placeholder */}
            {project.placeholder ? (
              <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-t-xl">
                <h3 className="text-2xl text-center whitespace-pre-line">{project.placeholder.text}</h3>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={project.image}
                  className="w-full h-48 object-cover rounded-t-xl"
                  alt={project.imageAlt}
                />
                {project.imageOverlay}
              </div>
            )}

            {/* Content */}
            <div className="m-4 flex flex-col flex-grow">
              <h3 className="flex justify-between items-center">
                {project.title}
              </h3>
              <p className="flex-grow text-[#444]">
                {project.description}
              </p>

              {/* Actions */}
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  {project.primaryButton && (
                    <Button
                      variant="contained"
                      {...(project.primaryButton.external
                        ? { href: project.primaryButton.url }
                        : { component: Link, to: project.primaryButton.url }
                      )}
                      onClick={(e) => e.stopPropagation()}
                      className="!text-white !normal-case"
                    >
                      {project.primaryButton.text}
                    </Button>
                  )}
                  {project.readMoreUrl && (
                    <Button
                      variant="outlined"
                      component={Link}
                      to={project.readMoreUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="!normal-case"
                      aria-label={`Read more about ${project.title}`}
                    >
                      Read More
                    </Button>
                  )}
                </div>

                {project.githubUrl && (
                  <IconButton
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="!text-black"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <GitHub />
                  </IconButton>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Root>
  )
}

const Root = styled.div`
  a {
    color: var(--ifm-link-color);
    text-decoration: var(--ifm-link-decoration);
    transition: color var(--ifm-transition-fast) var(--ifm-transition-timing-default);
  }
`

