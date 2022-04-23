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
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Highest Batting Averages in IPL",
    },
  },
};

const data = {
  labels: [
    "KL Rahul",
    "David Warner",
    "Shaun Marsh",
    "MS Dhoni",
    "JP Duminy",
    "Chris Gayle",
    "AB De Villiers",
    "Virath Kohli",
    "Rishabh Pant",
    "Faf du Plessis",
  ],
  datasets: [
    {
      label: "Batting Average",
      data: [
        47.17, 42.08, 39.95, 39.88, 39.78, 39.72, 39.7, 36.79, 35.22, 35.0,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
      ],
    },
  ],
};

export default function BestAverage() {
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
