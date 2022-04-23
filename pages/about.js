import About from "../components/About";
import Head from "next/head";

export default function Bowling() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main>
        <About />
      </main>
    </>
  );
}
