import ChartsContainer from "../components/ChartsContainer";
import MostWickets from "../charts/bowling/MostWickets";
import BestEconomy from "../charts/bowling/BestEconomy";
import BestBowlAverage from "../charts/bowling/BestBowlAverage";
import Most4Wickets from "../charts/bowling/Most4Wickets";

import Head from "next/head";

export default function Bowling() {
  return (
    <>
      <Head>
        <title>Bowling Charts</title>
      </Head>
      <main>
        <ChartsContainer name="Bowling">
          <MostWickets />
          <BestEconomy />
          <BestBowlAverage />
          <Most4Wickets />
        </ChartsContainer>
      </main>
    </>
  );
}
