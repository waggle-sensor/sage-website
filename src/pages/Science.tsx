import React from 'react';
import Layout from '@theme/Layout';
import Page from './Page';
import { Link } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


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
          height="256"
          width="256"
          src={src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a">
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
      <Page className="mb-10">
        <h1>Student and Postdoctoral Science Projects</h1>

        <div className="flex flex-row flex-wrap gap-10">
          <LinkCard
            title="Wildfire Science"
            link="science/wildfire-science"
            src="/img/science/wildfire-icon-1.jpg"
          />
          <LinkCard
            title="Snowflake Classification"
            link="science/snowflake"
            src="/img/science/snowflake-icon.jpg"
          />
          <LinkCard
            title="Water Segmentation"
            link="science/water-segmentation"
            src="/img/science/water_seg-icon.jpg"
          />
          <LinkCard
            title="Water Level Detection"
            link="science/water-level-detection"
            src="/img/science/water_level-icon.jpg"
          />
          <LinkCard
            title="Vehicle Tracking"
            link="science/vehicle-tracking"
            src="/img/science/vehicle_track-icon.jpg"
          />
          <LinkCard
            title="Lightning Science"
            link="science/lightning-science"
            src="/img/science/lightning-icon2-1.jpg"
          />
          <LinkCard
            title="Characterizing Clouds"
            link="science/characterizing-clouds"
            src="/img/science/cloud-icon.jpg"
          />
          <LinkCard
            title="Bandwidth Aware Learning"
            link="science/bandwidth-aware-learning"
            src="/img/science/bandwidth-icon.png"
          />
          <LinkCard
            title="Social Distancing"
            link="science/social-distancing"
            src="/img/science/social_distance-icon.jpg"
          />
          <LinkCard
            title="Nowcasting Weather"
            link="science/nowcasting-weather"
            src="/img/science/nowcasting-icon.jpg"
          />
          <LinkCard
            title="Integrating Chameleon"
            link="science/integrating-chamelon"
            src="/img/science/chameleon_integration-icon.jpg"
          />
          <LinkCard
            title="Monitoring Biodiversity Using Acoustic Data"
            link="science/monitoring-biodiversity"
            src="/img/science/bar-lt_panel-2048x689-2.jpg"
          />
          <LinkCard
            title="Traffic State Estimation"
            link="science/traffic-state-estimation"
            src="https://ecr.sagecontinuum.org/api/meta-files/seonghapark/traffic-state/0.1.1/ecr-science-image.jpg"
          />
        </div>
      </Page>
    </Layout>
  );
}


