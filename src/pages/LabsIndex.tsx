
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '@site/src/components/Card'
import ImageSearch from './labs/image-search-icon.png'
import PTZYolo from './labs/ptz-yolo.png'
import SageMCP from './labs/sage-mcp-icon.png'
import Button from '@mui/material/Button'

export default function LabsIndex() {

  return (
    <Root className="flex flex-col gap-8 my-8" >
      <Card to="./labs/image-search" className="flex ltr">
        <img className="md:max-w-64 max-w-32 rounded-s-xl"
          alt="screenshot of image searching for volcanoes" src={ImageSearch} />
        <div className="m-4">
          <h3 className="flex justify-between items-center">
            <Link to="./labs/image-search">AI Vision Insight Search</Link>
            <a
              className="github-icon"
              href="https://github.com/waggle-sensor/sage-vectordb-example"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Open Sage VectorDB Example on GitHub"
            />
          </h3>
          <p>
            AI-powered image search and retrieval enables intuitive, semantic, exploration of large-scale 
            datasets using resources hosted on the NSF National Research Platform. Users can efficiently locate relevant
            images based on content rather than keywords or metadata, streamlining 
            research and analysis. <Link to="./labs/image-search">Read more...</Link>
          </p>
          {/* todo: fix this styling override hack */}
          <Button
            variant="contained"
            href="https://portal.sagecontinuum.org/labs/image-search"
            onClick={(e) => e.stopPropagation()}
            sx={{textTransform: 'none', '&:hover': {color: '#fff', opacity: .8}}}
            className="!text-white"
          >
            Try Image Search (prototype preview)
          </Button>
        </div>
      </Card>
      <Card to="./labs/sage-mcp" className="flex ltr">
        <img className="md:max-w-64 max-w-32 rounded-s-xl"
          alt="screenshot of prompting with mcp" src={SageMCP} />
        <div className="m-4">
          <h3 className="flex justify-between items-center">
            <Link to="./labs/sage-mcp" className="nav-link">Vibe Coding and AI Agents: Sage MCP</Link>
            <a
              className="github-icon"
              href="https://github.com/waggle-sensor/sage-mcp"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              aria-label="Open Sage MCP on GitHub"
            />
          </h3>
          <p>
            Control AI-enabled edge nodes through natural conversation. Use LLM-powered IDEs like Cursor and
            Cline tp query sensor data, find edge apps, draft python code, and run jobs. Explore agentic
            instrument control.  Ask “What’s the temperature in Chicago?” or “Write a Yolo plugin,”
            and the <b>prototype</b> Sage MCP chains tools, handles auth, and lets you explore 
            vibe-coding conversations. <Link to="./labs/sage-mcp">Read more...</Link>
          </p>
        </div>
      </Card>
      <Card to="./labs/ptz-yolo" className="flex ltr">
        <img className="md:max-w-64 max-w-32 rounded-s-xl"
          alt="deer detectection with PTZ camera" src={PTZYolo} />
        <div className="m-4">
          <h3 className="flex justify-between items-center">
            <Link to="./labs/ptz-yolo" className="nav-link">PTZ-YOLO</Link>
            <a
              className="github-icon"
              href="https://github.com/waggle-sensor/ptz-app"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="ptz app github"
            />
          </h3>
          <p>
            This lab project is about turning Pan-Tilt-Zoom (PTZ)
            cameras into smart, autonomous observers for wildlife, ecosystem hazards,
            and research. Using AI-driven object detection, it scans, zooms, and captures
            key images––eliminating constant video feeds while running autonomously at the edge. <Link to="./labs/ptz-yolo">Read more...</Link>
          </p>
        </div>
      </Card>
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

