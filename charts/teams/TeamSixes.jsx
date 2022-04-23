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
      text: "Teams Sixes in IPL",
      font: {
        size: 15,
      },
    },
  },
  maintainAspectRatio: false,
};

export const data = {
  labels: ["MI", "CSK", "RCB", "DC", "KKR", "PBKS", "SRH", "RR"],
  datasets: [
    {
      label: "Sixes by team",
      data: [1318, 1174, 1282, 1039, 1111, 1187, 696, 888],
      backgroundColor: [
        "#87CEEB",
        "#F7CD2E",
        "#D82E2F",
        "#120E43",
        "#6A1B4D",
        "#E03B8B",
        "#E07C24",
        "#5DA3FA",
      ],
    },
  ],
};

export default function TeamSixes() {
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
