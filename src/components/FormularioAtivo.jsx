import { useState } from "react";

function FormularioAtivo({ onAporteCriado }) {

  //cada campo do formulário tem seu próprio estado  
  const [ticker, setTicker] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [erro, setErro] = useState("");

  async function handleSubmit() {
    setErro("");

    // Validação básica — nenhum campo pode estar vazio
    if (!ticker || !quantidade || !preco) {
      setErro("Todos os campos são obrigatórios.");
      return;
    }
      
    try {
      const res = await fetch("http://localhost:3000/api/aportes/ticker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          nome: ticker.toUpperCase(),
          quantidade: parseFloat(quantidade),
          preco_unitario: parseFloat(preco),
          data: new Date().toISOString().split("T")[0], // data de hoje
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao registrar aporte.");
        return;
      }

      // Limpa os campos
      setTicker("");
      setQuantidade("");
      setPreco("");

      // Avisa o Dashboard para rebuscar os dados
      onAporteCriado();

    } catch (err) {
      setErro("Erro de conexão com o servidor.");
    }
  }

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm mb-6">
      <h2 className="text-lg font-semibold mb-4">Adicionar Aporte</h2>

      {erro && <p className="text-red-600 text-sm mb-3">{erro}</p>}

      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Ticker (ex: PETR4)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="border rounded px-3 py-2 text-sm flex-1 min-w-32"
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          className="border rounded px-3 py-2 text-sm w-32"
        />
        <input
          type="number"
          placeholder="Preço unitário (R$)"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="border rounded px-3 py-2 text-sm w-36"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default FormularioAtivo;