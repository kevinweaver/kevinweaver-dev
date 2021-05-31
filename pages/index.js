import Head from "next/head";
import HomeHero from "../components/HomeHero.js";
import WriteCode from "../components/WriteCode.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHero />
      {/* <WriteCode /> */}
    </>
  );
}
