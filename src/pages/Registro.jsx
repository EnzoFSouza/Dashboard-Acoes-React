import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const navigate = useNavigate();

  async function handleRegistro() {
    setErro("");

    if (!nome || !email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao criar conta.");
        return;
      }

      setSucesso(true);
      setTimeout(() => navigate("/login"), 2000);

    } catch (err) {
      setErro("Erro de conexão com o servidor.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border rounded-lg p-8 shadow-sm w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Criar conta</h1>

        {erro && <p className="text-red-600 text-sm mb-4">{erro}</p>}

        {sucesso && (
          <p className="text-green-600 text-sm mb-4">
            Conta criada com sucesso! Redirecionando para o login...
          </p>
        )}

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Senha (mínimo 8 caracteres)"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          />
          <button
            onClick={handleRegistro}
            className="bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700"
          >
            Criar conta
          </button>
          <button
            onClick={() => navigate("/login")}
            className="text-gray-500 text-sm hover:underline"
          >
            Já tenho conta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registro;