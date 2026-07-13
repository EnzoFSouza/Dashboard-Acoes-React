import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function Header() {
  const navigate = useNavigate();

  async function handleLogout() {
    await fetch(`${API_URL}/api/logout`, {
      method: "POST",
      credentials: "include",
    });
    navigate("/login");
  }

  return (
    <header className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard de Investimentos
        </h1>
        <p className="text-gray-500">Acompanhamento de ações e FIIs</p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
      >
        Sair
      </button>
    </header>
  );
}

export default Header;