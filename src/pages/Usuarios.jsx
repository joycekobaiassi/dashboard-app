const users = [
  { id: 1, name: "João Silva", email: "joao@example.com" },
  { id: 2, name: "Maria Santos", email: "maria@example.com" },
  { id: 3, name: "Carlos Oliveira", email: "carlos@example.com" },
];

export function Usuarios() {
  return (
    <main className="p-8 bg-gray-100 flex-1 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">Usuários</h1>
      <div className="bg-white rounded-xl p-6 shadow">
        {users.map(user => (
          <div key={user.id} className="flex justify-between border-b last:border-none py-2">
            <span>{user.name}</span>
            <span>{user.email}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
