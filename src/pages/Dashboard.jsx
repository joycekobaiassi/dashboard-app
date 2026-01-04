import { StatCard } from "../components/StatCard";
import { SalesChart } from "../components/SalesChart";

const stats = [
  { title: "Usuários", value: "1.250", icon: "👥" },
  { title: "Vendas", value: "R$ 18.400", icon: "💰" },
  { title: "Metas", value: "75%", icon: "🎯" },
];

const salesData = [
  { month: "Jan", value: 1200 },
  { month: "Fev", value: 1800 },
  { month: "Mar", value: 1500 },
  { month: "Abr", value: 2200 },
  { month: "Mai", value: 2000 },
];

export function Dashboard() {
  return (
    <main className="p-8 bg-gray-100 flex-1 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <StatCard key={index} title={item.title} value={item.value} icon={item.icon} />
        ))}
      </div>

      <div className="mt-10 bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-bold mb-4">Vendas Mensais</h2>
        <SalesChart data={salesData} />
      </div>
    </main>
  );
}
