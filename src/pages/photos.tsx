import React from 'react'
import Layout from '@theme/Layout'
import { useLocation, Link } from 'react-router-dom'

import PhotoGallery from './PhotoGallery'



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
            Photo Gallery
        </h1>
        <div>
          <PhotoGallery />
        </div>
      </div>
    </Layout>
  )
}


