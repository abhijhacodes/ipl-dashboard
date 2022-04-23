import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import ChartContainer from "../../components/ChartContainer";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Most Sixes in IPL",
      font: {
        size: 15,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      beginAtZero: true,
    },
  },
};

const values = [357, 251, 233, 223, 221, 212, 209, 203, 190, 182];
const labels = [
  "Chris Gayle",
  "AB DE Villiers",
  "Rohit Sharma",
  "MS Dhoni",
  "Kieron Pollard",
  "Virat Kohli",
  "David Warner",
  "Suresh Raina",
  "Shane Watson",
  "Robin Uthappa",
];

const x = [4, 8, 7, 3, 1, 9, 6, 2, 5, 2];
const y = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const data = {
  datasets: [
    {
      label: labels[0],
      data: [
        {
          x: x[0],
          y: y[0],
          r: values[0] / 10,
        },
      ],
      backgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: labels[1],
      data: [
        {
          x: x[1],
          y: y[1],
          r: values[1] / 10,
        },
      ],
      backgroundColor: "rgba(154, 62, 35)",
    },
    {
      label: labels[2],
      data: [
        {
          x: x[2],
          y: y[2],
          r: values[2] / 10,
        },
      ],
      backgroundColor: "rgba(255, 206, 86)",
    },
    {
      label: labels[3],
      data: [
        {
          x: x[3],
          y: y[3],
          r: values[3] / 10,
        },
      ],
      backgroundColor: "rgba(75, 192, 192)",
    },
    {
      label: labels[4],
      data: [
        {
          x: x[4],
          y: y[4],
          r: values[4] / 10,
        },
      ],
      backgroundColor: "rgba(153, 102, 255)",
    },
    {
      label: labels[5],
      data: [
        {
          x: x[5],
          y: y[5],
          r: values[5] / 10,
        },
      ],
      backgroundColor: "rgba(255, 159, 64)",
    },
    {
      label: labels[6],
      data: [
        {
          x: x[6],
          y: y[6],
          r: values[6] / 10,
        },
      ],
      backgroundColor: "rgba(55, 99, 132)",
    },
    {
      label: labels[7],
      data: [
        {
          x: x[7],
          y: y[7],
          r: values[7] / 10,
        },
      ],
      backgroundColor: "rgba(54, 162, 235)",
    },
    {
      label: labels[8],
      data: [
        {
          x: x[8],
          y: y[8],
          r: values[8] / 10,
        },
      ],
      backgroundColor: "rgba(255, 106, 94)",
    },
    {
      label: labels[9],
      data: [
        {
          x: x[9],
          y: y[9],
          r: values[9] / 10,
        },
      ],
      backgroundColor: "rgba(175, 192, 92)",
    },
  ],
};

export default function MostSixes() {
  return (
    <ChartContainer>
      <Bubble data={data} options={options} />
    </ChartContainer>
  );
}
