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
    title: {
      display: true,
      text: "Teams with most fair play awards",
      font: {
        size: 15,
      },
    },
  },
  cutout: 25,
};

const data = {
  labels: ["CSK", "SRH", "KXIP", "RR", "GL", "MI"],
  datasets: [
    {
      data: [6, 2, 1, 2, 1, 2],
      backgroundColor: [
        "#fcce06",
        "#ff7c43",
        "#E6425E",
        "#87CEEB",
        "#758283",
        "#254aa5",
      ],
      borderWidth: 2,
      borderColor: "#EEE8AA",
    },
  ],
};

export default function MostFairPlays() {
  return (
    <ChartContainer>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
}
