import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartContainer from "../../components/ChartContainer";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    labels: {
      render: "percentage",
    },
    title: {
      display: true,
      text: "Distribution of runs scored by teams",
      font: {
        size: 15,
      },
    },
  },
  cutout: 50,
};

const data = {
  labels: ["MI", "CSK", "RCB", "DC", "KKR", "PBKS", "SRH", "RR"],
  datasets: [
    {
      data: [33406, 29678, 31144, 30662, 30493, 31259, 20405, 25572],
      backgroundColor: [
        "#87CEEB",
        "#F7CD2E",
        "#D82E2F",
        "#120E43",
        "#6A1B4D",
        "#E03B8B",
        "#E07C24",
        "#5DA3FA",
      ],
      borderWidth: 2,
      borderColor: "#EEE8AA",
    },
  ],
};

export default function TeamRuns() {
  return (
    <ChartContainer>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
}
