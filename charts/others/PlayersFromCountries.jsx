import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartContainer from "../../components/ChartContainer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Players from each country in IPL",
      font: {
        size: 15,
      },
    },
  },
  maintainAspectRatio: false,
};

const data = {
  labels: [
    "Australia",
    "West Indies",
    "South Africa",
    "England",
    "Sri Lanka",
    "New Zealand",
    "Bangladesh",
    "Afghanistan",
    "Zimbabwe",
    "Pakistan",
  ],
  datasets: [
    {
      label: "Number of players",
      data: [91, 27, 54, 33, 33, 27, 6, 4, 3, 11],
      backgroundColor: [
        "#E8BD0D",
        "#3366E6",
        "#999966",
        "#99FF99",
        "#6A1B4D",
        "#E666B3",
        "#33991A",
        "#CC9999",
        "#B3B31A",
        "#00E680",
      ],
    },
  ],
};

export default function PlayersFromCountries() {
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
