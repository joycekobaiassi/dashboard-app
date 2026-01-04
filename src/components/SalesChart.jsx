import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function SalesChart({ data }) {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: "Vendas",
        data: data.map(item => item.value),
        backgroundColor: "rgba(34,197,94,0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return <Bar data={chartData} options={options} />;
}
