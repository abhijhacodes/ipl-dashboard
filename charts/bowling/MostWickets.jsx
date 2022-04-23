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
      text: "Most Wickets in IPL",
      font: {
        size: 15,
      },
    },
  },
  maintainAspectRatio: false,
};

const data = {
  labels: [
    "Dwayne Bravo",
    "Lasith Malinga",
    "Amit Mishra",
    "Piyush Chawla",
    "Yuzvendra Chahal",
    "Bhuvneshwar Kumar",
    "Harbhajan Singh",
    "Sunil Narine",
    "R Ashwin",
    "Jasprit Bumrah",
  ],
  datasets: [
    {
      label: "Wickets taken",
      data: [179, 170, 166, 157, 156, 150, 150, 149, 147, 134],
      backgroundColor: [
        "#EDBF69",
        "#03C6C7",
        "#E6425E",
        "#120E43",
        "#BF3325",
        "#E5D68A",
        "#1FAA59",
        "#03203C",
        "#DDD101",
        "#23C4ED",
      ],
    },
  ],
};

export default function MostWickets() {
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
