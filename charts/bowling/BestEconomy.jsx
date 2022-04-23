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

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Lowest Economy Rates in IPL",
    },
  },
};

export const data = {
  labels: [
    "Rashid Khan",
    "Sunil Narine",
    "Dale Steyn",
    "R Ashwin",
    "Harbhajan Singh",
    "Lasith Malinga",
    "Axar Patel",
    "Bhuvneshwar Kumar",
    "Amit Mishra",
    "Jasprit Bumrah",
  ],
  datasets: [
    {
      label: "Economy Rate",
      data: [6.35, 6.65, 6.91, 6.93, 7.07, 7.14, 7.23, 7.32, 7.35, 7.42],
      borderColor: "#6AC47E",
      backgroundColor: "#4DD637",
    },
  ],
};

export default function BestEconomy() {
  return (
    <ChartContainer>
      <Line data={data} options={options} />
    </ChartContainer>
  );
}
