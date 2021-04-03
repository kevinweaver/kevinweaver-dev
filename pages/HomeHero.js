import Image from 'next/image'

export default function HomeHero() {
  return (
    <>
      <Image
        src="/images/kevin-mask.png" // Route of the image file
        height={310} // Desired size with correct aspect ratio
        width={270} // Desired size with correct aspect ratio
        alt="Your Name"
        style="m-4"
      />

      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Hi. I like to</span>
          <div>
            <span className="block xl:inline lg:inline md:inline">make{' '}</span>
            <span className="block text-indigo-600 xl:inline lg:inline md:inline">things</span>
          </div>
        </h1>
      </div>
    </>
  )
}