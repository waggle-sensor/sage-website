import React from 'react'
import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import Home from '../components/home/Home'



export default function LandingPage() {
  return (
    <Layout
      title="Home"
      description="Sage website home">
      <Head>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Head>
      <main>
        <Home />
      </main>
    </Layout>
  )
}