import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Feed from '../components/feed'
import Widgets from '../components/widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
