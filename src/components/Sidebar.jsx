import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-56 bg-gray-800 text-white p-6 flex flex-col h-screen">
      <Link to="/" className="text-xl font-bold mb-1 hover:text-green-400 cursor-pointer">ADMIN</Link>
      <Link to="/painel" className="text-sm opacity-80 hover:text-green-300 cursor-pointer mb-4">Painel interno</Link>
      <Link to="/usuarios" className="text-sm opacity-80 hover:text-green-300 cursor-pointer mb-4">Usuários</Link>
      <Link to="/vendas" className="text-sm opacity-80 hover:text-green-300 cursor-pointer">Vendas</Link>
    </aside>
  );
}
