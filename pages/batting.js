import ChartsContainer from "../components/ChartsContainer";
import MostRuns from "../charts/batting/MostRuns";
import BestAverage from "../charts/batting/BestAverage";
import BestStrikeRate from "../charts/batting/BestStrikeRate";
import MostSixes from "../charts/batting/MostSixes";
import MostFifties from "../charts/batting/MostFifties";

import Head from "next/head";

export default function Batting() {
  return (
    <>
      <Head>
        <title>Batting Charts</title>
      </Head>
      <main>
        <ChartsContainer name="Batting">
          <MostRuns />
          <BestAverage />
          <BestStrikeRate />
          <MostSixes />
          <MostFifties />
        </ChartsContainer>
      </main>
    </>
  );
}
