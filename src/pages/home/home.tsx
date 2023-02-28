import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { IconButton } from '@mui/material'
import Arrow from '@mui/icons-material/PlayCircleOutlineRounded'
import GitHub from '@mui/icons-material/GitHub'
import Twitter from '@mui/icons-material/Twitter'

import { Card as PortalCard, CardViewStyle } from '../../components/layout/Layout'

import CodeWindow from './CodeWindow'

// import createAppImg from 'url:./create-app.png'

const docs = 'https://docs.waggle-edge.ai/docs'
const waggleOrg = 'https://github.com/waggle-sensor'


const clientSnippet =
`
import sage_data_client

df = sage_data_client.query(
    start="2023-02-24T01:15:30.550Z",
    end="2023-02-24T02:15:30.550Z",
    filter={
        "plugin": ".*plugin-iio.*"
    }
)
`

const httpSnippet = `
curl -H 'Content-Type: application/json' \\
https://data.sagecontinuum.org/api/v1/query -d '
{
    "start": "-10s",
    "filter": {
        "sensor": "bme680"
    }
}
'
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


export default function Home() {

  const [devHover, setDevHover] = useState('client')

  useEffect(() => {
    setTimeout(() => {
      twttr.widgets.load()
    })
  }, [])

  return (
    <Root>
      <Banner className="flex">
        <BannerLeft>
          AI @ the Edge<br/>
          for <TypeWriter texts={scienceTexts}>{' '}</TypeWriter>
        </BannerLeft>

        <BannerRight className="flex flex-col justify-center items-center">
          <div>
            <h3>Getting Started</h3>
            <a href={docs} className="focused-link gap-1">Documentation <Arrow className="shadow" /></a>
            <Link to="/data" className="focused-link gap-1">Browse Data <Arrow/></Link>
          </div>
        </BannerRight>
      </Banner>

      <div className="bg-white">
        <div className="section">
          <Subtext>
            A new kind of national-scale cyberinfrastructure
            to enable AI at the Edge.
          </Subtext>

          <Cards>
            <div className="card">
              <img src={edURL} />
              <h3>Learn</h3>
              <p>[Sage's goal on Education].  Read more about Sage project</p>
            </div>
            <div className="card">
              <img src="https://raw.githubusercontent.com/sagecontinuum/sage-gui/main/apps/sage/home/create-app.png" />
              <h3>Contribute</h3>
              <p>Upload, build, and share <Link to="apps">apps</Link> for AI at the edge</p>
            </div>
            <div className="card">
              <img src="https://sagecontinuum.org/wp-content/uploads/2019/11/Wagman-v4.jpg" />
              <h3>Run</h3>
              <p>
                Schedule jobs to run on nodes.<br/>
              </p>
            </div>
            <div className="card">
              <h3>Browse</h3>
              <p>Browse <Link to="data">data</Link> from sensors and edge apps</p>
            </div>
            <div className="card">
              <img src="https://sagecontinuum.org/wp-content/uploads/2019/11/1820-1024-tweak.jpg" />
              <h3>Analyze</h3>
              <p>Use Sage APIs to fetch, analyze, or integrate data.</p>
            </div>
          </Cards>
        </div>
      </div>

      <div className="news section flex justify-center gap-2">
        <CardViewStyle />
        <PortalCard className="match-twitter-card w-3/4">
          <h2 className="w-full border-b-1 border-slate-100">News</h2>
          <br/>
          <h2><a>SAGE NEON Deployment to the Konza LTER Site in Kansas</a></h2>
          <p>
          In April 2022, 4 Sage nodes (3 Wild Waggle Nodes and 1 Waggle Blade Node) were
          deployed with an array of sensors (thermographic camera, air quality sensor, etc.)
          to collect data to better our understanding of smoke and wildfire detection. <a>Read more...</a>
          </p>
          <br/>
          <h2><a>Excepteur sint occaecat cupidatat</a></h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <a>Read more...</a>
          </p>
          <br/>
          <h2><a>Excepteur cupidatat</a></h2>
          <p>
            Onec adipiscing tristique ac turpis egestas integer eget aliquet.
            Morbi tristique senectus et netus et malesuada fames <a>Read more...</a>
          </p>
        </PortalCard>
        <a
          className="twitter-timeline"
          href="https://twitter.com/sagecontinuum?ref_src=twsrc%5Etfw"
          data-width="400" data-height="600"
        >
          Tweets by sagecontinuum
        </a>
      </div>

      <div className="bg-purple">
        <div className="section column items-center gap-2">

          <h2 className="text-slate-200 font-bold">Featured Science</h2>

          <div className="flex items-center text-slate-200">
            <img src="https://ecr.sagecontinuum.org/api/meta-files/dariodematties1/avian-diversity-monitoring/0.2.4/ecr-icon.jpg" width="400" />
            <div className="flex flex-col gap-4 mx-5 sci-items">
              <div className="sci-item">
                <h3 className="text-slate-200 font-bold">Optimizing cloud motion estimation on the edge with phase correlation and optical flow</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="sci-item">
                <h3 className="text-slate-200 font-bold">A Self-Supervised Approach for Cloud Image Analysis</h3>
                Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.
                Posuere ac ut consequat semper viverra nam.
              </div>
              <div className="sci-item">
                <h3 className="text-slate-200 font-bold">Designing Edge Computing-Capable ML Algorithms to Target ARM Dopler Lidar Processing</h3>
                Sed risus ultricies tristique nulla aliquet enim tortor at auctor.
                Pretium nibh ipsum consequat nisl vel pretium lectus quam id.
              </div>
              <div className="sci-item">
                <h3 className="text-slate-200 font-bold">Prediction of Solar Irradiance and Photovoltaic Solar Energy Based on Cloud Coverage...</h3>
                dipiscing diam donec adipiscing tristique ac turpis egestas integer eget aliquet.
                Morbi tristique senectus et netus et malesuada fames
              </div>
              <div className="flex justify-between mx-5">
                <Link to="publications" className="focused-link gap-1">Publications <Arrow className="shadow" /></Link>
                <a href={docs} className="focused-link gap-1">Apps <Arrow className="shadow" /></a>
                <a href={docs} className="focused-link gap-1">Sage Science Projects<Arrow className="shadow" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50">
        <div className="section column flex-col items-center gap-2">
          <h2 className="text-purple font-bold mb-10">Developer Friendly Tools for Research and Analysis</h2>

          <div className="flex text-slate-200">
            <div className="flex flex-col gap-4 mx-5 sci-items w-7/12">
              <div className="sci-item" onMouseOver={() => setDevHover('client')}>
                <h3 className="text-slate-200 font-bold">Python Data Client</h3>
                Easily analyze data in Pandas with the Sage Data Client
              </div>
              <div className="sci-item" onMouseOver={() => setDevHover('api')}>
                <h3 className="text-slate-200 font-bold">HTTP APIs</h3>
                Access and update data via web APIs
              </div>
              <div className="sci-item" onMouseOver={() => setDevHover('ui')}>
                <h3 className="text-slate-200 font-bold">Web UI tools</h3>
                Navigating job results and data is as easily as a click of a button
              </div>
              <div className="sci-item">
                <h3 className="text-slate-200 font-bold">Open Source</h3>
                All code related to Sage Project is publicly accessible available via
                on Github: <a href={waggleOrg} target="_blank" className="font-bold">
                  Waggle's Organizaion
                </a> or <a href="https://github.com/sagecontinuum" target="_blank" className="font-bold">
                  Sage's Organizaion
                </a>
              </div>
              <div className="flex justify-between mx-5 text-slate-200">
                <a className="focused-link purple gap-1" href={docs} >Documentation <Arrow /></a>
                <a className="focused-link purple gap-1" href={docs} >Examples <Arrow /></a>
                <a className="focused-link purple gap-1" href="https://portal.sagecontinuum.org/query-browser">Query Browser <Arrow /></a>
              </div>
            </div>

            <div className="w-5/12">

              {devHover == 'client' &&
                <CodeWindow title="Sage Data Client" code={clientSnippet} />
              }
              {devHover == 'api' &&
                <CodeWindow title="Web API" code={httpSnippet} />
              }
              {devHover == 'ui' &&
                <CodeWindow title="portal.sagecontinuum.org" code={''} showUrlBar={true} />
              }
            </div>
          </div>
        </div>
      </div>


      <div className="user-stories section flex-col justify-center gap-2">
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
        [logos with links goes here]
      </div>


      <footer className="dark flex justify-around">
        <div className="">
          <div className="nsf-info flex muted items-center">
            <img src="https://www.nsf.gov/policies/images/NSF_Official_logo.svg" width="150"/>
            <div>
              SAGE is supported by<br/> NSF Mid-Scale RI-1 grant #1935984
            </div>
          </div>
        </div>

        <div>
          <h4>About</h4>
          <ul>
            <li><a href="https://sagecontinuum.org/news/" target="_blank" rel="noreferrer">News</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about">Docs</Link></li>
          </ul>
        </div>
        <div>
          <h4>Browse</h4>
          <ul>
            <li><Link to="/">browse 1</Link></li>
            <li><Link to="/">browse 2</Link></li>
            <li><Link to="/">foo bar</Link></li>
            <li><Link to="/">some link</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><Link to={`${docs}/contact-us`}>Contact us</Link></li>
          </ul>
          <div className="flex">
            <IconButton href="https://github.com/waggle-sensor" target="_blank"><GitHub sx={{color: '#aaa'}}/></IconButton>
            <IconButton><Twitter sx={{color: '#aaa'}}/></IconButton>
          </div>
        </div>
      </footer>
    </Root>
  )
}

const purple = 'rgb(78, 42, 132)'
const lightPurple = 'rgb(112, 97, 159)'

const sage = 'rgb(135, 186, 166)'


const Root = styled.div`

  /**
  * Resets; back to MUI Global and Sage Portals CSS
  */
  h1, h2, h3, h4, h5, h6 {
    font-size: revert;  // ignore docusaurus
  }

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
    padding: 0;
    max-width: 250px;
    background: #fff;
    border: 1px solid #ddd;

    img {
      max-width:100%;
      max-height:100px;
      border-radius: 5px 5px 0 0;
    }

    p, h3 {
      padding: 15px;
    }

    border-bottom: 3px solid #7a6bac;
    :hover {
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

  .sci-items .focused-link {
    font-size: 1.5em;
  }

  .shadow {
    filter: drop-shadow( 0px 0px 2px #414141);
  }

  .dark {
    background: #2b2b2b;
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

  .read-news {
    width: 75%;
  }


  .match-twitter-card {
    border-radius: 12px;
  }

  .sci-items {
    .sci-item {
      background: #63509c;
      padding: 10px;
      border-radius: 10px;
    }

    .sci-item:hover {
      background: #70619f;
    }

    .sci-item a {
      color: #f2f2f2;
    }
  }


  footer {
    color: #f2f2f2;
    height: 500px;
    background: #2b2b2b;

    h5 {

    }
    ul {
      padding:0;
      list-style: none;
      a {
        color: #999999;
      }
    }

    .nsf-info {

    }
  }



  .code-window {
    .prism-code {
      border-radius: 0px 0px 10px 10px;
    }
  }
`


const Banner = styled.div`
  padding: 40px;
  height: 400px;
  background: radial-gradient(farthest-side ellipse at 0% 0,#87baa6 20%,#382d64);
  text-shadow: 0px 0px 6px #666;
`

const BannerLeft = styled.div`
  color: #f9f9f9;
  font-size: 4em;
  flex: 1;
  margin: auto 0;
`

const BannerRight = styled.div`
  flex: 1;
  h3 {
    color: #ccc;
  }
`

const Subtext = styled.div`
  font-size: 2em;
  margin: auto;
  width: 50%;
  padding-bottom: 2em;
  text-align: center;
  color: ${purple};
`


const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`




function TypeWriter(props) {

  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [fullText, setFullText] = useState(props.texts[phraseIndex] || '')


  // typing effect
  useEffect(() => {
    if (index >= fullText.length)
      return

    const handle = setTimeout(() => {
      setText(`${text}${fullText[index]}`)
      setIndex(index + 1)
    }, 50)

    return () => clearTimeout(handle)
  }, [index, fullText, text])


  // changing text index
  useEffect(() => {
    function update() {
      const handle = setTimeout(() => {
        setPhraseIndex(prev => (prev + 1) % props.texts.length)
        update()
      }, 3000)

      return handle
    }

    const handle = update()

    return () => clearTimeout(handle)
  }, [])


  // change actual text, reset index/text
  useEffect(() => {
    setIndex(0)
    setText('')
    setFullText(props.texts[phraseIndex])
  }, [phraseIndex])


  return (
    <span className="text-emerald-200">{text ? text : <>&nbsp;</>}</span>
  )
}