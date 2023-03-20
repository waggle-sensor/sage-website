import React from 'react';
import styled from 'styled-components'
import Layout from '@theme/Layout';
import Page from './Page';
import { Link } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


// console.log('wildfire', wildfire)

type LinkCardProps = {
  title: string
  src: string
  link: string
  description?: string
}


export function LinkCard(props: LinkCardProps) {
  const {title, src, link, description} = props
  return (
    <Card sx={{ maxWidth: 345 }} component={Link} to={link}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={src}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          {description && <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default function Science() {
  return (
    <Layout title="Publications" description="Sage Publications">
      <Root className="mb-10">
        <h1>Science Projects</h1>

        <div className="flex flex-row flex-wrap gap-10">
          <LinkCard
            title="Wildfire Science"
            link="science/wildfire-science"
            src={require('@site/static/img/science/wildfire-icon-1.jpg').default}
          />
          <LinkCard
            title="Snowflake Classification"
            link="science/snowflake"
            src={require('@site/static/img/science/snowflake-icon.jpg').default}
          />
          <LinkCard
            title="Water Segmentation"
            link="science/water-segmentation"
            src={require('@site/static/img/science/water_seg-icon.jpg').default}
          />
          <LinkCard
            title="Water Level Detection"
            link="science/water-level-detection"
            src={require('@site/static/img/science/water_level-icon.jpg').default}
          />
          <LinkCard
            title="Vehicle Tracking"
            link="science/vehicle-tracking"
            src={require('@site/static/img/science/vehicle_track-icon.jpg').default}
          />
          <LinkCard
            title="Lightning Science"
            link="science/lightning-science"
            src={require('@site/static/img/science/lightning-icon2-1.jpg').default}
          />
          <LinkCard
            title="Characterizing Clouds"
            link="science/characterizing-clouds"
            src={require('@site/static/img/science/cloud-icon.jpg').default}
          />
          <LinkCard
            title="Bandwidth Aware Learning"
            link="science/bandwidth-aware-learning"
            src={require('@site/static/img/science/bandwidth-icon.png').default}
          />
          <LinkCard
            title="Social Distancing"
            link="science/social-distancing"
            src={require('@site/static/img/science/social_distance-icon.jpg').default}
          />
          <LinkCard
            title="Nowcasting Weather"
            link="science/nowcasting-weather"
            src={require('@site/static/img/science/nowcasting-icon.jpg').default}
          />
          <LinkCard
            title="Integrating Chameleon"
            link="science/integrating-chamelon"
            src={require('@site/static/img/science/chameleon_integration-icon.jpg').default}
          />
          <LinkCard
            title="Monitoring Biodiversity Using Acoustic Data"
            link="science/monitoring-biodiversity"
            src={require('@site/static/img/science/bar-lt_panel-2048x689-2.jpg').default}
          />
          <LinkCard
            title="Traffic State Estimation"
            link="science/traffic-state-estimation"
            src="https://ecr.sagecontinuum.org/api/meta-files/seonghapark/traffic-state/0.1.1/ecr-science-image.jpg"
          />
        </div>
      </Root>
    </Layout>
  );
}

const Root = styled(Page)`
  .MuiCardMedia-img {
    width:  256px;
    height: 256px;
    object-fit: cover;
  }
`


