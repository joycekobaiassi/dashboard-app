export function UserTable() {
  const users = [
    { id: 1, name: "Ana Silva", email: "ana@email.com", role: "Admin" },
    { id: 2, name: "Carlos Souza", email: "carlos@email.com", role: "User" },
    { id: 3, name: "Marina Costa", email: "marina@email.com", role: "User" },
  ];

  return (
    <div className="bg-white rounded-xl shadow mt-6 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4">Nome</th>
            <th className="p-4">Email</th>
            <th className="p-4">Perfil</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
