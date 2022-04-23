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
      text: "Most Runs in IPL",
      font: {
        size: 15,
      },
    },
  },
  maintainAspectRatio: false,
};

const data = {
  labels: [
    "Virat Kohli",
    "Shikhar Dhawan",
    "Rohit Sharma",
    "David Warner",
    "Suresh Raina",
    "AB De Villers",
    "Chris Gayle",
    "Robin Uthappa",
    "MS Dhoni",
    "Dinesh Karthik",
  ],
  datasets: [
    {
      label: "Runs scored",
      data: [6402, 5998, 5725, 5640, 5528, 5162, 4965, 4949, 4866, 4256],
      backgroundColor: [
        "#f95d6a",
        "#3366E6",
        "#999966",
        "#99FF99",
        "#ffa600",
        "#E666B3",
        "#33991A",
        "#CC9999",
        "#B3B31A",
        "#00E680",
      ],
    },
  ],
};

export default function MostRuns() {
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
