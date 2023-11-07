import React from 'react'
import Layout from '@theme/Layout'
import { useLocation } from 'react-router-dom'

import PhotoIndex from '../components/PhotoIndex'



export default function Photos() {
  const params = new URLSearchParams(useLocation().search)
  const collection = params.get('collection')

  return (
    <Layout
      title="Photo Gallery"
      description="Photos of Node deployments, student activities, and more"
    >
      <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto my-10">
        <h1>
          {collection ?
            <><a href="/photos">Photos</a> / {collection}</> :
            'Photo Galleries'
          }
        </h1>
        <div>
          <PhotoIndex driveFolderID="1zGnN-9HC_g180EimPgoBu9x5zYqpnKvQ" />
        </div>
      </div>
    </Layout>
  )
}


