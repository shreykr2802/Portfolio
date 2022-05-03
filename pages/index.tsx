import type { NextPage } from 'next'
import Head from 'next/head'
import HomeContents from '../components/homeContents/HomeContents'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Shrey Kumar</title>
        <meta name="description" content="Shrey Kumar - Professional Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <HomeContents />
    </>
  )
}

export default Home
