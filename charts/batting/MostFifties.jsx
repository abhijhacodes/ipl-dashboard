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
      text: "Most Fifties in IPL",
      font: {
        size: 15,
      },
    },
  },
  maintainAspectRatio: false,
};

export const data = {
  labels: [
    "David Warner",
    "Shikhar Dhawan",
    "Virat Kohli",
    "AB De Villers",
    "Rohit Sharma",
    "Suresh Raina",
    "Gautam Gambhir",
    "Chris Gayle",
    "KL Rahul",
    "Ajinkya Rahane",
  ],
  datasets: [
    {
      label: "Fifties",
      data: [53, 45, 42, 40, 40, 39, 36, 31, 28, 28],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
      ],
    },
  ],
};

export default function MostFifties() {
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
