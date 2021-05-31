import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

export default function HomeHero() {
  function rotatingText() {
    const makeThingsText = [
      "make things.",
      "build apps.",
      "write solidity.",
      "draw pixel art.",
      "create content.",
      "design UX.",
      "farm yield.",
      "talk tech.",
    ];

    const gradients = [
      "purp-red-yellow",
      "green-teal-blue",
      "pink-red-yellow",
      "yeal-indigo-pink",
      "purple-yellow-green",
    ];

    return (
      <ReactTypingEffect
        typingDelay={50}
        text={makeThingsText}
        speed={60}
        eraseSpeed={40}
        eraseDelay={1300}
      />
    );
  }

  return (
    <>
      <style jsx>{`
        .kevin {
          //margin-top: 20vh;
          padding-top: 20vh;
          padding-bottom: 20vh;
        }

        .background {
          background: url(images/background.png) no-repeat center center;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          height: 80vh;
          width: 100%;
          position: absolute;
          overflow: hidden;
          z-index: -1;
        }

        .all-colors {
          background: linear-gradient(
            -60deg,
            #64296d,
            #d75949,
            #b7bb39,
            #90be7d,
            #dcaf4e,
            #126578,
            #82a598,
            #d2869a,
            #64296d
          );
        }
        // .purp-red-yellow {
        //   background: linear-gradient(-60deg, #64296d, #d75949, #dcaf4e);
        // }

        // .green-teal-blue {
        //   background: linear-gradient(-60deg, #b7bb39, #90be7d, #126578);
        // }

        // .pink-red-yellow {
        //   background: linear-gradient(-60deg, #d2869a, #f74a3b, #f9bb43);
        // }

        // .teal-indigo-pink {
        //   background: linear-gradient(-60deg, #8ec07d, #82a598, #d1869a);
        // }

        // .purple-yellow-green {
        //   background: linear-gradient(-60deg, #64296d, #f9bc42, #8fbf7f);
        // }

        .gradient {
          animation: flow 25s ease-in-out infinite;
          background-size: 800%;
          filter: drop-shadow(0 0 2rem #323232);

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
      <div className="background"></div>
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
        <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
          <h1 className="cta box-border">
            <span className="">Hi. I like to</span>
            <div className="block md gradient all-colors">{rotatingText()}</div>
          </h1>
        </div>
      </main>
    </>
  );
}
