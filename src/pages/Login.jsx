import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    setErro("");

    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao fazer login.");
        return;
      }

      navigate("/dashboard");
    } catch (err) {
      setErro("Erro de conexão com o servidor.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border rounded-lg p-8 shadow-sm w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Entrar</h1>

        {erro && (
          <p className="text-red-600 text-sm mb-4">{erro}</p>
        )}

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;