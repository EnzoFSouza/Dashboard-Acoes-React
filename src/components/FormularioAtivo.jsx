import { useState } from "react";

function FormularioAtivo({ ativos, onAdicionar, onAtualizar }) {

  //cada campo do formulário tem seu próprio estado  
  const [ticker, setTicker] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  function handleSubmit() {
    // Validação básica — nenhum campo pode estar vazio
    if (!ticker || !quantidade || !preco) return;

    const tickerUpper = ticker.toUpperCase();

    // Verifica se o ticker já existe na lista
    const ativoExistente = ativos.find(
        (a) => a.ticker === tickerUpper
    );

    if (ativoExistente) {
        // Atualiza só a quantidade do ativo existente
        const ativosAtualizados = ativos.map((a) =>
        a.ticker === tickerUpper
            ? { ...a, quantidade: a.quantidade + parseInt(quantidade) }
            : a
        );
        onAtualizar(ativosAtualizados);
    }
    else{
        // Adiciona como novo ativo
        const novoAtivo = {
        id:             tickerUpper,
        ticker:         tickerUpper,
        tipo:           "acoes",
        precoAtual:     parseFloat(preco),
        quantidade:     parseInt(quantidade),
        dividendYield:  0,
        valorizacao12m: 0,
        min52:          0,
        max52:          0,
        };
        onAdicionar(novoAtivo);
    }

    // Limpa os campos após adicionar
    setTicker("");
    setQuantidade("");
    setPreco("");
  }

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm mb-6">
      <h2 className="text-lg font-semibold mb-4">Adicionar Ativo</h2>

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
          placeholder="Preço (R$)"
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