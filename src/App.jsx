import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { Painel } from "./pages/Painel";
import { Usuarios } from "./pages/Usuarios";
import { Vendas } from "./pages/Vendas";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/painel" element={<Painel />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/vendas" element={<Vendas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
