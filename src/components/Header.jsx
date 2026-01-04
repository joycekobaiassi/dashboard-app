export function Header() {
  return (
    <header className="h-16 bg-white flex items-center justify-end px-6 gap-4 shadow sticky top-0 z-10">
      <button className="text-xl hover:bg-gray-200 p-2 rounded">🔔</button>
      <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
    </header>
  );
}
