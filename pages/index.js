import Head from 'next/head'
import HomeHero from '../components/HomeHero.js'

export default function Home() {
  return (
      <div className="bg-cover bg-center" style={{backgroundImage: 'url(images/background.png)'}}>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hi.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <HomeHero/>
      </main>

    </div>
      </div>
  )
}
