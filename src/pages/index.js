import Layout from '@theme/Layout'
import Home from '../components/home/Home'



export default function LandingPage() {
  return (
    <Layout
      title="Home"
      description="Sage website home">
      <main>
        <Home />
      </main>
    </Layout>
  )
}