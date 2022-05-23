import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Feed from '../components/feed'
import Widgets from '../components/widgets'

const Home: NextPage = () => {
  return (
    <div className="lg: mx-auto max-h-screen max-w-6xl overflow-hidden">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
