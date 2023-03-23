import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Arrow from '@mui/icons-material/PlayCircleOutlineRounded'

import { Card as PortalCard, CardViewStyle } from '../layout/Layout'
import CodeWindow from './CodeWindow'
import BlogPreview from './BlogPreview'
import TypeWriter from './TypeWriter'
import Footer from '../Footer'

import config from '../../config'
import { LaunchRounded } from '@mui/icons-material'
const { portal } = config



const clientSnippet =
`import sage_data_client

df = sage_data_client.query(
    start="2023-02-24T01:15:30.550Z",
    end="2023-02-24T02:15:30.550Z",
    filter={
        "plugin": ".*plugin-iio.*"
    }
)
`

const httpSnippet =
`curl -H 'Content-Type: application/json' \\
https://data.sagecontinuum.org/api/v1/query -d '
{
    "start": "-10s",
    "filter": {
        "sensor": "bme680"
    }
}
'
`

const appTemplateSnippet =
`pip3 install cookiecutter
cookiecutter gh:waggle-sensor/cookiecutter-sage-app

...
name [My Amazing App]: image_classification
repo: https://github.com/geeklair/img_class.git
author [My name]: geeklair
version [0.1.0]: 0.2.0
Select template:
1 - vision
2 - usbserial_sensor
3 - minimal
Choose from 1, 2, 3 [1]: 1
`

const edURL = 'https://sagecontinuum.org/wp-content/uploads/2019/11/LofT-Wrigley-Jose-Osorio-Chicago-Tribune-.jpg'

const scienceTexts = [
  'Climate Research',
  'Wildfire Detection',
  'Health & Saftey',
  'Weather Prediction',
  'Scientific Research',
  'Discovery'
]


type DevTools = 'client' | 'api' | 'ui' | 'template'

export default function Home() {
  const [devHover, setDevHover] = useState<DevTools>('client')

  return (
    <Root>
      <Banner className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-[#f9f9f9] text-4xl md:text-6xl md:mx-10 self-start md:self-center">
          AI @ the Edge<br/>
          for <TypeWriter texts={scienceTexts}>{' '}</TypeWriter>
        </div>

        <div className="flex flex-col md:ml-20 md:mr-40 self-start md:self-center">
          <h3 className="text-slate-300">Getting Started</h3>
          <a href="docs/about/overview" className="focused-link gap-1">Documentation <Arrow className="shadow" /></a>
          <a href={`${portal}/data`} className="focused-link gap-1">Browse Data <Arrow/></a>
        </div>
      </Banner>

      <div className="bg-white">
        <div className="section">
          <div className="text-[2em] leading-relaxed m-auto pb-12 md:text-center text-purple md:w-1/2">
            A new kind of national-scale cyberinfrastructure
            to enable AI at the Edge for science.
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-4 xl:gap-10">
            <Link to="science" className="card">
              <img src={edURL} />
              <h3>Learn</h3>
              <p>Explore some of the <Link to="science">science</Link> made possible with Sage</p>
            </Link>
            <a href={`${portal}/apps`} className="card">
              <img src={require('@site/static/img/home/create-app.png').default} />
              <h3>Contribute</h3>
              <p>Upload, build, and share <a href={`${portal}/apps`}>apps</a> for AI at the edge</p>
            </a>
            <a className="card" href={`${portal}/jobs`}>
              <img src="https://sagecontinuum.org/wp-content/uploads/2019/11/Wagman-v4.jpg" />
              <h3>Run jobs</h3>
              <p>Create <a href={`${portal}/create-job?tab=editor&start_with_sample=true`}>science goals</a> to run apps on nodes.<br/></p>
            </a>
            <a href={`${portal}/data`} className="card">
              <img src={require('@site/static/img/home/browse.png').default} />
              <h3>Browse</h3>
              <p>Browse <a href={`${portal}/data`}>data</a> from sensors and edge apps</p>
            </a>
            <Link to="docs/tutorials/accessing-data" className="card">
              <img src="https://sagecontinuum.org/wp-content/uploads/2019/11/1820-1024-tweak.jpg" />
              <h3>Analyze</h3>
              <p>Use Sage APIs to fetch, analyze, or integrate data.</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="section flex flex-col md:flex-row gap-2">
        <CardViewStyle />
        <PortalCard className="match-twitter-card md:w-2/3 h-[600px]">
          <h2>News</h2>
          <hr className="mt-8"/>
          <div className="news-list">
            <BlogPreview />
          </div>
        </PortalCard>
        <div className="md:w-1/3">
          <a
            className="twitter-timeline"
            href="https://twitter.com/sagecontinuum?ref_src=twsrc%5Etfw"
            data-height="600"
          >
            tweets from @sagecontinuum...
          </a>
        </div>
      </div>

      <div className="bg-emerald-50 border-solid border-t-2 border-b-4 border-slate-200">
        <div className="section gap-2">
          <h2 className="text-purple font-bold mb-10">Developer Friendly Tools for Research and Analysis</h2>

          <div className="flex flex-col md:flex-row text-slate-200 gap-10">

            <div className="sci-items flex flex-col gap-4 md:w-7/12 ">
              <a className="sci-item group" onMouseOver={() => setDevHover('client')} href="https://pypi.org/project/sage-data-client" target="_blank">
                <div className="flex justify-between [&>*]:text-slate-200">
                  <h3>Python Data Client</h3>
                  <div className="hidden group-hover:block"><LaunchRounded /></div>
                </div>
                <span className="text-slate-200">Easily analyze data in Pandas with the Sage Data Client</span>
              </a>
              <Link className="sci-item group" onMouseOver={() => setDevHover('api')} to="docs/tutorials/accessing-data#http-api">
                <div className="flex justify-between [&>*]:text-slate-200">
                  <h3>HTTP APIs</h3>
                </div>
                <span className="text-slate-200">Access and update data via web APIs</span>
              </Link>
              <a className="sci-item group" onMouseOver={() => setDevHover('ui')} href={`${portal}/query-browser`} target="_blank">
                <div className="flex justify-between [&>*]:text-slate-200">
                  <h3>Web Tools</h3>
                  <div className="hidden group-hover:block"><LaunchRounded /></div>
                </div>
                <span className="text-slate-200">Navigating job results and data is as easy as a few clicks</span>
              </a>
              <a className="sci-item group" onMouseOver={() => setDevHover('template')} href="https://github.com/waggle-sensor/cookiecutter-sage-app" target="_blank">
                <div className="flex justify-between [&>*]:text-slate-200">
                  <h3>Developer Templates</h3>
                  <div className="hidden group-hover:block"><LaunchRounded /></div>
                </div>
                <span className="text-slate-200">Get started quickly with templates and snippets</span>
              </a>

              <div className="hidden md:flex justify-between mx-5 text-slate-200">
                <Link className="focused-link purple gap-1" to="docs/tutorials/edge-apps/intro-to-edge-apps" >Tutorials <Arrow /></Link>
                <Link className="focused-link purple gap-1" to="docs/reference-guides/pluginctl" >Reference Guides <Arrow /></Link>
                <a className="focused-link purple gap-1" href={`${portal}/query-browser`}>Query Browser <Arrow /></a>
                {/*
                <a href={waggleOrg} target="_blank" className="font-bold">
                  Waggle GitHub
                </a> | <a href="https://github.com/sagecontinuum" target="_blank" className="font-bold">
                  Sage GitHub
                </a>
                */}
              </div>
            </div>

            <div className="md:w-5/12">
              {devHover == 'client' &&
                <CodeWindow title="Python Data Client" code={clientSnippet} />
              }
              {devHover == 'api' &&
                <CodeWindow title="Web API" code={httpSnippet} />
              }
              {/* preload images for hover */}
              <div className={devHover == 'ui' ? 'block' : 'hidden'}>
                <CodeWindow
                  title="portal.sagecontinuum.org"
                  src={require('@site/static/img/home/query-browser.png').default}
                  showUrlBar={true}
                />
              </div>
              {devHover == 'template' &&
                <CodeWindow title="Templates" code={appTemplateSnippet} lanuage="bash" />
              }
            </div>

          </div>
        </div>
      </div>


      <div className="bg-purple">
        <div className="section items-center gap-2">

          <h2 className="text-slate-200 font-bold mb-10">Featured Science</h2>

          <div className="flex flex-col md:flex-row text-slate-200">
            <div className="md:w-1/3 hidden md:block mr-5" >
              <img src="https://ecr.sagecontinuum.org/api/meta-files/dariodematties1/avian-diversity-monitoring/0.2.4/ecr-icon.jpg"/>
            </div>
            <div className="flex flex-col gap-y-4 md:w-2/3 sci-items">
              <div className="sci-item">
                <h3 className="text-slate-200">Optimizing cloud motion estimation on the edge with phase correlation and optical flow</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="sci-item">
                <h3 className="text-slate-200">A Self-Supervised Approach for Cloud Image Analysis</h3>
                Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.
                Posuere ac ut consequat semper viverra nam.
              </div>
              <div className="sci-item">
                <h3 className="text-slate-200">Designing Edge Computing-Capable ML Algorithms to Target ARM Dopler Lidar Processing</h3>
                Sed risus ultricies tristique nulla aliquet enim tortor at auctor.
                Pretium nibh ipsum consequat nisl vel pretium lectus quam id.
              </div>
              <div className="sci-item">
                <h3 className="text-slate-200">Prediction of Solar Irradiance and Photovoltaic Solar Energy Based on Cloud Coverage...</h3>
                dipiscing diam donec adipiscing tristique ac turpis egestas integer eget aliquet.
                Morbi tristique senectus et netus et malesuada fames
              </div>
              <div className="hidden md:flex justify-between mx-5">
                <Link to="publications" className="focused-link gap-1">Publications <Arrow className="shadow" /></Link>
                <Link to="science" className="focused-link gap-1">Science<Arrow className="shadow" /></Link>
                <a href={`${portal}/apps`} className="focused-link gap-1">Apps <Arrow className="shadow" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="user-stories section justify-center gap-2">
        <CardViewStyle />

        <div>
          <h2>User Stories</h2>
          {/*
          <div className="flex">
            <img src="https://avatars.githubusercontent.com/u/104843704?s=200&v=4" />
            CROCUS
          </div>
          */}
        </div>
        <br/>
        [logos with links go here?]
      </div>


      <Footer />
    </Root>
  )
}

const purple = 'rgb(78, 42, 132)'
const sage = 'rgb(135, 186, 166)'


const Root = styled.div`
  /**
  * Resets; back to MUI Global and Sage Portals CSS
  */

  a {
    color: #0080c7;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover { text-decoration: underline; }

  /**
  * home page
  */

  .card {
    color: initial;
    padding: 0;
    background: #fff;
    border: 1px solid #ddd;

    img {
      border-radius: 5px 5px 0 0;
    }

    p, h3 {
      padding: 15px;
    }

    border-bottom: 3px solid #7a6bac;
    :hover {
      text-decoration: none;
      border: 1px solid #7a6bac;
      border-bottom: 3px solid ${purple};
    }
  }

  a.focused-link {
    color: #f2f2f2;
    font-size: 2em;
    display: flex;
    align-items: center;
  }

  a.focused-link.purple {
    color: ${purple};
  }

  .shadow {
    filter: drop-shadow( 0px 0px 2px #414141);
  }

  .bg-purple { background: ${purple}; }
  .text-purple { color: ${purple}; }

  .bg-sage { background: ${sage}; }

  .section {
    margin: 0 auto;
    padding: 4em 0;
    height: 100%;
    width: 90%;
  }

  .match-twitter-card {
    border-radius: 12px;
    .MuiCardContent-root {
      h2 {
        padding: 0 16px;
      }

      padding-left: 0px;
      padding-right: 0px;
      .news-list {
        padding: 0 16px;
      }
    }
  }

  .sci-items {
    .sci-item {
      background: #63509c;
      padding: 10px;
      border-radius: 10px;

      h3 {
        font: bold;
      }
    }

    .sci-item:hover {
      text-decoration: none;
      background: #70619f;
    }

    .focused-link {
      font-size: 1.5em;
    }
  }
`


const Banner = styled.div`
  padding: 40px;
  height: 400px;
  background: radial-gradient(farthest-side ellipse at 0% 0,#87baa6 20%,#382d64);
  text-shadow: 0px 0px 6px #666;
`



