import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartContainer from "../../components/ChartContainer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Most catches in IPL",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  labels: [
    "SK Raina",
    "KA Pollard",
    "R Sharma",
    "ABD",
    "S Dhawan",
    "V Kohli",
    "R Jadeja",
    "DJ Bravo",
    "M Pandey",
    "David Warner",
  ],
  datasets: [
    {
      label: "Catches taken",
      data: [107, 98, 93, 92, 88, 88, 84, 80, 77, 69],
      borderColor: "#E21717",
      backgroundColor: "#CAD5E2",
    },
  ],
};

export default function MostCatches() {
  return (
    <ChartContainer>
      <Line data={data} options={options} />
    </ChartContainer>
  );
}
