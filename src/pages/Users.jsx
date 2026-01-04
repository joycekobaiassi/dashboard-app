import { UserTable } from "../components/UserTable";

export function Users() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Usuários</h1>
      <p className="text-gray-600 mt-2">
        Gerenciamento de usuários do sistema
      </p>

      <UserTable />
    </div>
  );
}
