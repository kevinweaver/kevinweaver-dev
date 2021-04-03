import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Hello() {
  return (
    <>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <Image
          src="/images/kevin-mask.png" // Route of the image file
          width={270} // Desired size with correct aspect ratio
          height={310}
          alt="Your Name"
        />
      </h2>
    </>
  )
}