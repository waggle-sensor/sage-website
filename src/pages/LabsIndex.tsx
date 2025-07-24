
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '@site/src/components/Card'
import ImageSearch from './labs/image-search.png'
import PTZYolo from './labs/ptz-yolo.png'


export default function LabsIndex() {

  return (
    <Root className="flex flex-col gap-8 my-8" >
      <Card to="./labs/image-search" className="flex ltr">
        <img className="md:max-w-64 max-w-32 rounded-s-xl"
          alt="screenshot of image searching for volcanoes" src={ImageSearch} />
        <div className="m-4">
          <h3 className="padding-none">
            <Link to="./labs/image-search">Image Search</Link>
          </h3>
          <p>
            Image Search enables intuitive exploration of large-scale sensor datasets using AI-powered image retrieval.
            By leveraging advanced visual search techniques, users can efficiently locate relevant
            images based on content rather than metadata, streamlining research and analysis.
          </p>
        </div>
      </Card>
      <Card to="./labs/ptz-yolo" className="flex ltr">
        <img className="md:max-w-64 max-w-32 rounded-s-xl"
          alt="deer detectection with PTZ camera" src={PTZYolo} />
        <div className="m-4">
          <h3>
            <Link to="./labs/ptz-yolo" className="nav-link">PTZ-YOLO</Link>
          </h3>
          <p>
            This lab project is about turning Pan-Tilt-Zoom (PTZ)
            cameras into smart, autonomous observers for wildlife, ecosystem hazards,
            and research. Using AI-driven object detection, it scans, zooms, and captures
            key images––eliminating constant video feeds while running autonomously at the edge.
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

