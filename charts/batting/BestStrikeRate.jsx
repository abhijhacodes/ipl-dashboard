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
      text: "Highest Strike Rates in IPL",
    },
  },
};

const data = {
  labels: [
    "Andre Russell",
    "Sunil Narine",
    "Virendra Sehwag",
    "Chris Morris",
    "Glenn Maxwell",
    "AB De Villers",
    "Hardik Pandya",
    "Jos Buttler",
    "Kieron Pollard",
    "Chris Gayle",
  ],
  datasets: [
    {
      label: "Strike Rate",
      data: [
        178.44, 162.12, 155.44, 155.27, 153.56, 151.68, 151.33, 151.06, 149.37,
        148.96,
      ],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.4)",
    },
  ],
};

export default function BestStrikeRate() {
  return (
    <ChartContainer>
      <Line data={data} options={options} />
    </ChartContainer>
  );
}
