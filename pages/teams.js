import ChartsContainer from "../components/ChartsContainer";
import MostTrophies from "../charts/teams/MostTrophies";
import WinPercentage from "../charts/teams/WinPercentage";
import TeamSixes from "../charts/teams/TeamSixes";
import TeamRuns from "../charts/teams/TeamRuns";

import Head from "next/head";

export default function Teams() {
  return (
    <>
      <Head>
        <title>Teams Charts</title>
      </Head>
      <main>
        <ChartsContainer name="Teams">
          <MostTrophies />
          <WinPercentage />
          <TeamSixes />
          <TeamRuns />
        </ChartsContainer>
      </main>
    </>
  );
}
