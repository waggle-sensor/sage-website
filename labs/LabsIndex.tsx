
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
        {labProjects.map((project) => {
          const {
            id, title, description, image, imageAlt, imageOverlay, placeholder,
            primaryButton, readMoreUrl, githubUrl
          } = project

          return (
            <Card key={id} to={readMoreUrl} className="flex flex-col h-full">
              {/* Image or Placeholder */}
              {placeholder ? (
                <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-t-xl">
                  <h3 className="text-2xl text-center whitespace-pre-line">{placeholder.text}</h3>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={image}
                    className="w-full h-48 object-cover rounded-t-xl"
                    alt={imageAlt}
                  />
                  {imageOverlay}
                </div>
              )}

              {/* Content */}
              <div className="m-4 flex flex-col flex-grow">
                <h3 className="flex justify-between items-center">
                  {title}
                </h3>
                <p className="flex-grow text-[#444]">
                  {description}
                </p>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {primaryButton && (
                      <Button
                        variant="contained"
                        {...(primaryButton.external
                          ? { href: primaryButton.url }
                          : { component: Link, to: primaryButton.url }
                        )}
                        onClick={(e) => e.stopPropagation()}
                        className="!text-white !normal-case"
                      >
                        {primaryButton.text}
                      </Button>
                    )}
                    {readMoreUrl && (
                      <Button
                        variant="outlined"
                        component={Link}
                        to={readMoreUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="!normal-case"
                        aria-label={`Read more about ${title}`}
                      >
                      Read More
                      </Button>
                    )}
                  </div>

                  {githubUrl && (
                    <IconButton
                      href={githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="!text-black"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${title} on GitHub`}
                    >
                      <GitHub />
                    </IconButton>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
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

