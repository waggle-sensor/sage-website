
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '@site/src/components/Card'
import ImageSearch from './labs/image-search-icon.png'
import PTZYolo from './labs/ptz-yolo.jpg'
import SageMCP from './labs/sage-mcp-icon.png'
import Button from '@mui/material/Button'
import { GitHub } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export default function LabsIndex() {

  return (
    <Root className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3  gap-8">
        <Card to="./labs/image-search" className="flex flex-col h-full">
          <img className="w-full h-48 object-cover rounded-t-xl"
            alt="screenshot of image searching for volcanoes" src={ImageSearch} />
          <div className="m-4 flex flex-col flex-grow">
            <h3 className="flex justify-between items-center">
              AI Vision Semantic Search
            </h3>
            <p className="flex-grow">
              AI-powered semantic image search enables intuitive exploration of large-scale
              datasets. Locate relevant images based on visual content rather than metadata.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <Button
                  variant="contained"
                  href="https://portal.sagecontinuum.org/labs/image-search"
                  onClick={(e) => e.stopPropagation()}
                  className="!text-white !normal-case"
                >
                  Try It Now
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to="./labs/image-search"
                  onClick={(e) => e.stopPropagation()}
                  className="!normal-case"
                  aria-label="Open Sage VectorDB Example on GitHub"
                >
                  Read More
                </Button>
              </div>

              <IconButton
                href="https://github.com/waggle-sensor/sage-vectordb-example"
                onClick={(e) => e.stopPropagation()}
                className="!text-black"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Sage VectorDB Example on GitHub"
              >
                <GitHub />
              </IconButton>
            </div>
          </div>
        </Card>
        <Card to="./labs/sage-mcp" className="flex flex-col h-full">
          <img className="w-full h-48 object-cover rounded-t-xl"
            alt="screenshot of prompting with mcp" src={SageMCP} />
          <div className="m-4 flex flex-col flex-grow">
            <h3 className="flex justify-between items-center">
              Vibe Coding and AI-Agents: Sage MCP
            </h3>
            <p className="flex-grow">
              Control edge nodes through natural conversation. Use AI-powered IDEs to query sensors,
              find apps, and run jobs. Ask "What's the temperature in Hawaii?" and let the <i><b>prototype</b></i> MCP handle the rest.
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <Button
                  variant="contained"
                  component={Link}
                  to="docs/tutorials/sage-mcp#getting-started"
                  onClick={(e) => e.stopPropagation()}
                  className="!text-white !normal-case"
                >
                  Install Now
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to="./labs/sage-mcp"
                  onClick={(e) => e.stopPropagation()}
                  className="!normal-case"
                  aria-label="Read more about the Sage MCP"
                >
                  Read More
                </Button>
              </div>

              <IconButton
                href="https://github.com/waggle-sensor/sage-mcp"
                onClick={(e) => e.stopPropagation()}
                className="!text-black"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Sage MCP on GitHub"
              >
                <GitHub />
              </IconButton>
            </div>
          </div>
        </Card>
        <Card to="./labs/ptz-yolo" className="flex flex-col h-full">
          <div className="relative">
            <img
              src={PTZYolo}
              className="w-full h-48 object-cover rounded-t-xl"
              alt="deer detectection with PTZ camera"
            />
            <div className="absolute bottom-4 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                Elk captured at <a
                href="https://portal.sagecontinuum.org/node/W06C"
                target="_blank"
                className="font-bold !text-[#3ca4ff] hover:underline"
                onClick={(e) => e.stopPropagation()} rel="noreferrer"
              >
                AMK Ranch
              </a> in Wyoming
            </div>
          </div>
          <div className="m-4 flex flex-col flex-grow">
            <h3 className="flex justify-between items-center">
                PTZ-YOLO
            </h3>
            <p className="flex-grow">
                Using AI and Pan-Tilt-Zoom cameras for autonomous wildlife, hazard observation, and more.
                AI-driven detection scans, zooms, and captures key images at the edge using models like YOLO and Florence.
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <Button
                  variant="outlined"
                  component={Link}
                  to="./labs/ptz-yolo"
                  onClick={(e) => e.stopPropagation()}
                  className="!normal-case"
                  aria-label="Read more about the Sage MCP"
                >
                Read More
                </Button>
              </div>
              <IconButton
                href="https://github.com/waggle-sensor/ptz-app"
                onClick={(e) => e.stopPropagation()}
                className="!text-black"
                target="_blank"
                rel="noreferrer"
                aria-label="Open PTZ app repo on GitHub"
              >
                <GitHub />
              </IconButton>
            </div>
          </div>
        </Card>

        {/* placeholder about new thor nodes */}
        <Card to="./labs/next-gen-nodes" className="flex flex-col h-full">
          <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-t-xl">
            <h3 className="text-2xl text-center">Next-Generation Nodes<br/>(Coming Soon!)</h3>
          </div>
          <div className="m-4 flex flex-col flex-grow">
            <h3 className="flex justify-between items-center">
              New Sage Grande Edge Nodes
            </h3>
            <p className="flex-grow">
              The future of edge computing with Sage Grande's Next-Gen nodes, built on the NVIDIA Jetson Thor platform.
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <Button
                  variant="outlined"
                  component={Link}
                  to="./labs/next-gen-nodes"
                  onClick={(e) => e.stopPropagation()}
                  className="!normal-case"
                  aria-label="Read more about the Sage Grande thor nodes"
                >
                  Read More
                </Button>
              </div>
              {/*
                <IconButton
                  href="_____add_repo_link_here____"
                  onClick={(e) => e.stopPropagation()}
                  className="!text-black"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Sage Grande repo on GitHub"
                >
                  <GitHub />
                </IconButton>
              */}
            </div>
          </div>
        </Card>

      </div>
    </Root>
  )
}

const Root = styled.div`
  p {
    color: #444;
  }

  a {
    color: var(--ifm-link-color);
    text-decoration: var(--ifm-link-decoration);
    transition: color var(--ifm-transition-fast) var(--ifm-transition-timing-default);
  }

  h3 a:hover {
    color: var(--ifm-link-hover-color);
    text-decoration: var(--ifm-link-hover-decoration);
    cursor: pointer;
  }

`

