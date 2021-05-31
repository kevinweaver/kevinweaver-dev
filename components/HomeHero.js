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
          padding-bottom: 10vh;
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

        .arrow {
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -40px;
          bottom: 20px;
          width: 40px;
          height: 40px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=);
          background-size: contain;
        }

        .bounce {
          animation: bounce 0.8s;
          animation-direction: alternate;
          animation-iteration-count: infinite;

          @keyframes bounce {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-10px);
            }
          }
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
        <div className="arrow bounce"></div>
      </main>
    </>
  );
}
