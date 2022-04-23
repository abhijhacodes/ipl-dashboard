import ChartsContainer from "../components/ChartsContainer";
import MostCatches from "../charts/others/MostCatches";
import MostFairPlays from "../charts/others/MostFairPlays";
import PlayersFromCountries from "../charts/others/PlayersFromCountries";

import Head from "next/head";

export default function Others() {
  return (
    <>
      <Head>
        <title>Other Charts</title>
      </Head>
      <main>
        <ChartsContainer name="Miscellaneous">
          <MostCatches />
          <MostFairPlays />
          <PlayersFromCountries />
        </ChartsContainer>
      </main>
    </>
  );
}
