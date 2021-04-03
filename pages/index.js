import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
      <div class="bg-cover bg-center" style={{backgroundImage: 'url(images/background.png)'}}>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hi.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <Image
        src="/images/kevin-mask.png" // Route of the image file
        height={310} // Desired size with correct aspect ratio
        width={270} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      </main>

    </div>
      </div>
  )
}
