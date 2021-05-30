import Head from "next/head";
import HomeHero from "../components/HomeHero.js";
import Timeline from "../components/Timeline.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHero />
      {/* <Timeline /> */}
    </>
  );
}
