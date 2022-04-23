import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>IPL Dashboard</title>
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
