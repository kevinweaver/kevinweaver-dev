import Image from "next/image";

export default function HomeHero() {
  return (
    <>
      <style jsx>{`
        .kevin {
          margin-top: 20vh;
        }

        .background {
          background-image: url(images/background.png);
          height: 50%;
        }

        .purp-yellow {
          background: linear-gradient(-60deg, #64296d, #d75949, #dcaf4e);
        }

        .gradient {
          animation: flow 5s ease-in-out infinite;
          background-size: 200%;
          filter: drop-shadow(0 0 2rem #323232);
          //-webkit-text-stroke: 0.5px white;

          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          @keyframes flow {
            0% {
              background-position: 0 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        }

        .gradient:after {
          filter: drop-shadow(0 0 2rem #323232);
        }
      `}</style>
      <div className="bg-cover bg-center background">
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <div className="kevin">
            <Image
              src="/images/kevin-mask.png" // Route of the image file
              height={310} // Desired size with correct aspect ratio
              width={270} // Desired size with correct aspect ratio
              alt="Kevin W"
              style="m-4"
            />
          </div>

          <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
            <h1 className="cta box-border">
              <span className="">Hi. I like to</span>
              <div className="block md gradient purp-yellow">
                <span> make </span>
                <span className="">things</span>
                <span>.</span>
              </div>
            </h1>
          </div>
        </main>
      </div>
    </>
  );
}
