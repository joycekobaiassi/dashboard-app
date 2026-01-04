const vendas = [
  { id: 1, produto: "Produto A", valor: 1200 },
  { id: 2, produto: "Produto B", valor: 1800 },
  { id: 3, produto: "Produto C", valor: 1500 },
];

export function Vendas() {
  return (
    <main className="p-8 bg-gray-100 flex-1 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">Vendas</h1>
      <div className="bg-white rounded-xl p-6 shadow">
        {vendas.map(venda => (
          <div key={venda.id} className="flex justify-between border-b last:border-none py-2">
            <span>{venda.produto}</span>
            <span>R$ {venda.valor}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
