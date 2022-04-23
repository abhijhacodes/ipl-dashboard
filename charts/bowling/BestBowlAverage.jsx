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

export const options = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Best Bowling Averages in IPL",
    },
  },
};

export const data = {
  labels: [
    "Lasith Malinga",
    "Rashid Khan",
    "Yuzvendra Chahal",
    "Ashish Nehra",
    "Jasprit Bumrah",
    "Dwayne Bravo",
    "Amit Mishra",
    "Sunil Narine",
    "Bhuvneshwar Kumar",
    "Sandeep Sharma",
  ],
  datasets: [
    {
      label: "Bowling Average",
      data: [
        19.79, 20.92, 20.98, 23.53, 23.83, 23.89, 23.95, 24.48, 25.16, 25.76,
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

export default function BestBowlAverage() {
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
