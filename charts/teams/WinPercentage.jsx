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
      display: false,
    },
    title: {
      display: true,
      text: "All teams win % in IPL",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  labels: ["MI", "CSK", "RCB", "DC", "KKR", "PBKS", "SRH", "RR"],
  datasets: [
    {
      label: "Win %",
      data: [58.5, 60.56, 48.0, 45.6, 52.1, 45.5, 50.7, 49.42],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.4)",
    },
  ],
};

export default function WinPercentage() {
  return (
    <ChartContainer>
      <Line data={data} options={options} />
    </ChartContainer>
  );
}
