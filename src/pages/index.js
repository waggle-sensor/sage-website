import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import LandingPage from './home/home'

// import  { Redirect } from 'react-router-dom'





export default function Home() {
  // return <Redirect to='/docs/about/overview' />;

  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sage website">
      <Head>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Head>
      <main>
        <LandingPage />
      </main>
    </Layout>
  )
}