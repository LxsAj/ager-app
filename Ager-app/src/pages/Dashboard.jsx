import HexIcon from "../components/HexIcon";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-300 text-white flex flex-col items-center pt-10 px-4">
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <img src="/vite.svg" alt="AGER logo" className="w-12 h-12 mb-2" />
        <h1 className="text-3xl font-bold tracking-wide">AGER</h1>
      </div>

      {/* Hex Grid */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div></div>
        <HexIcon icon="💧" bgColor="bg-blue-500" />
        <div></div>

        <HexIcon icon="🚚" bgColor="bg-yellow-400" />
        <div></div>
        <HexIcon icon="🍅" bgColor="bg-red-500" />

        <div></div>
        <HexIcon icon="🚜" bgColor="bg-green-800" />
        <div></div>
      </div>

      <h2 className="text-xl font-bold tracking-widest">DASHBOARD</h2>
    </div>
  );
}

export default Dashboard;


  