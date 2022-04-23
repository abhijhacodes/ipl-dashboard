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
      text: "Teams with most IPL trophies",
      font: {
        size: 15,
      },
    },
  },
};

const data = {
  labels: ["MI", "CSK", "KKR", "SRH", "RR", "DC"],
  datasets: [
    {
      data: [5, 4, 2, 1, 1, 1],
      backgroundColor: [
        "#87CEEB",
        "#fcce06",
        "#3a225d",
        "#ff7c43",
        "#254aa5",
        "#758283",
      ],
      borderWidth: 2,
      borderColor: "#EEE8AA",
    },
  ],
};

export default function MostTrophies() {
  return (
    <ChartContainer>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
}
