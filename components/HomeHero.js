import Image from 'next/image';

export default function HomeHero() {
  return (
    <>
      <style jsx>{`

      `}</style>
      <Image
        src="/images/kevin-mask.png" // Route of the image file
        height={310} // Desired size with correct aspect ratio
        width={270} // Desired size with correct aspect ratio
       alt="Kevin W"
        style="m-4"
      />

      <div class="">
        <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <h1 className="cta box-border">
                <span className="">Hi. I like to</span>
                <div className="block inline md">
                  <span>{' '}make{' '}</span>
                  <span className="">things</span>
                  <span>.</span>
                </div>
              </h1>
        </div>
      </div>
    </>
  )
}