import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Layout from '@theme/Layout'
import Card from '@mui/material/Card'


type LinkCardProps = {
  title: string
  src: string
  link: string
  description?: string
}


export function LinkCard(props: LinkCardProps) {
  const {title, src, link} = props
  return (
    <Card
      className="card z-0 relative"
      component={Link}
      to={link}
    >
      <img src={src} className="max-w-[256px] md:max-w-[220px] md:max-h-[220px]" />
      <h3 className="text-white absolute left-4 bottom-0 z-10">{title}</h3>
    </Card>
  )
}


export default function Science() {
  return (
    <Layout title="AI/Science" description="Sage AI and Science Projects">
      <Root className="md:max-w-screen-md lg:max-w-screen-lg mx-auto my-10">
        <h1>AI/Science</h1>

        <h2>Recent Projects</h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-10 my-10">
          <LinkCard
            title="Exploration Through Collaboration"
            link="/science/collaboration"
            src={require('@site/static/img/science/collaboration-icon.jpg').default}
          />
          <LinkCard
            title="Solar Irradiance Estimation"
            link="/science/solar-irradiance-estimation"
            src={require('@site/static/img/science/solar-irradiance.jpg').default}
          />
          <LinkCard
            title="Smoke Detection"
            link="/science/smoke-detection"
            src={require('@site/static/img/science/smoke-detection.png').default}
          />
          <LinkCard
            title="Rideshare Detection"
            link="/science/rideshare-detection"
            src={require('@site/static/img/science/rideshare-detection.png').default}
          />
          <LinkCard
            title="Lighning Detector"
            link="/science/lightning-detector"
            src={require('@site/static/img/science/lightning-detector.jpg').default}
          />
          <LinkCard
            title="Snow Classfication"
            link="/science/snow-detection"
            src={require('@site/static/img/science/snow-detection.jpg').default}
          />
          <LinkCard
            title="Scalable Edge Computing at APS"
            link="/science/scalable-ci-in-aps"
            src={require('@site/static/img/science/scalable-ci-in-aps-icon.png').default}
          />
          <LinkCard
            title="Traffic State Estimation"
            link="/science/traffic-state-estimation"
            src={require('@site/static/img/science/traffic-state-est.png').default}
          />
        </div>

        <h2>Other Featured Projects</h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-10 my-10">
          <LinkCard
            title="Wildfire Science"
            link="/science/wildfire-science"
            src={require('@site/static/img/science/wildfire-icon-1.jpg').default}
          />
          <LinkCard
            title="Snowflake Classification"
            link="/science/snowflake"
            src={require('@site/static/img/science/snowflake-icon.jpg').default}
          />
          <LinkCard
            title="Water Segmentation"
            link="/science/water-segmentation"
            src={require('@site/static/img/science/water_seg-icon.jpg').default}
          />
          <LinkCard
            title="Monitoring Biodiversity Using Acoustic Data"
            link="/science/monitoring-biodiversity"
            src={require('@site/static/img/science/bar-lt_panel-2048x689-2.jpg').default}
          />
          <LinkCard
            title="Water Level Detection"
            link="/science/water-level-detection"
            src={require('@site/static/img/science/water_level-icon.jpg').default}
          />
          <LinkCard
            title="Vehicle Tracking"
            link="/science/vehicle-tracking"
            src={require('@site/static/img/science/vehicle_track-icon.jpg').default}
          />
          <LinkCard
            title="Characterizing Clouds"
            link="/science/characterizing-clouds"
            src={require('@site/static/img/science/cloud-icon.jpg').default}
          />
          <LinkCard
            title="Lightning Science"
            link="/science/lightning-science"
            src={require('@site/static/img/science/lightning-icon2-1.jpg').default}
          />
          <LinkCard
            title="Bandwidth Aware Learning"
            link="/science/bandwidth-aware-learning"
            src={require('@site/static/img/science/bandwidth-icon.png').default}
          />
          <LinkCard
            title="Social Distancing"
            link="/science/social-distancing"
            src={require('@site/static/img/science/social_distance-icon.jpg').default}
          />
          <LinkCard
            title="Nowcasting Weather"
            link="/science/nowcasting-weather"
            src={require('@site/static/img/science/nowcasting-icon.jpg').default}
          />
          <LinkCard
            title="Integrating Chameleon"
            link="/science/integrating-chameleon"
            src={require('@site/static/img/science/chameleon_integration-icon.jpg').default}
          />
        </div>
      </Root>
    </Layout>
  )
}


const Root = styled.div`
  .card::after {
    display: block;
    position: relative;
    background-image: linear-gradient(to bottom, transparent 0%, black 100%);
    margin-top: -110px;
    height: 110px;
    width: 100%;
    content: '';
  }

  .card:hover h3 {
    color: rgb(121, 208, 255);
    text-decoration: underline;
  }
`


