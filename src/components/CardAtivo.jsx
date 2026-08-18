import { useState } from "react";
import { API_URL } from "../config";

function CardAtivo({ ativo, onClick, onPrecoAtualizado }) {

  const [novoPreco, setNovoPreco] = useState(ativo.preco_atual);
  const [atualizando, setAtualizando] = useState(false);
  const [erro, setErro] = useState(null);

  async function atualizarPreco(e) {
    e.stopPropagation();

    const preco = Number(novoPreco);

    if (!Number.isFinite(preco) || preco < 0) {
      setErro("Digite um preço válido.");
      return;
    }

    try {
      setAtualizando(true);
      setErro(null);

      const resposta = await fetch(
        `${API_URL}/api/ativos/${ativo.id}/preco`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            preco,
          }),
        }
      );

      const data = await resposta.json();

      if (!resposta.ok) {
        throw new Error(data.erro || "Erro ao atualizar preço.");
      }

      onPrecoAtualizado();
    } catch (err) {
      console.error("Erro ao atualizar preço:", err);
      setErro(err.message);
    } finally {
      setAtualizando(false);
    }
  }

  const {
    nome,
    tipo,
    preco_atual,
    quantidade_total,
    total_investido,
    valor_atual,
    lucro_prejuizo,
  } = ativo;

  const corLucro = lucro_prejuizo >= 0 ? "text-green-600" : "text-red-600";
  const rentabilidade = total_investido > 0
    ? ((lucro_prejuizo / total_investido) * 100).toFixed(2)
    : "0.00";

  return (
    <div onClick={onClick} className="border rounded-lg p-4 shadow-sm bg-white cursor-pointer hover:shadow-md transition">

      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">{nome}</h3>
        <span className="text-xs uppercase text-gray-500">{tipo}</span>
      </div>

      {/* Preço atual */}
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-1">
          Preço atual
        </p>

        <p className="text-2xl font-semibold">
          R$ {preco_atual.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>

      <div
        className="flex gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="number"
          step="0.01"
          min="0"
          value={novoPreco}
          onChange={(e) => setNovoPreco(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />

        <button
          onClick={atualizarPreco}
          disabled={atualizando}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {atualizando ? "..." : "Atualizar"}
        </button>
      </div>

      {erro && (
        <p className="text-red-500 text-sm mt-1">
          {erro}
        </p>
      )}

      {/* Dados da posição */}
      <div className="text-sm space-y-1 text-gray-700">
        <p>Quantidade: <strong>{quantidade_total}</strong></p>
        <p>
          Total investido:{" "}
          <strong>
            R$ {total_investido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </strong>
        </p>
        <p>
          Valor atual:{" "}
          <strong>
            R$ {valor_atual.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </strong>
        </p>
        <p className={corLucro}>
          Lucro/Prejuízo:{" "}
          <strong>
            R$ {lucro_prejuizo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            {" "}({rentabilidade}%)
          </strong>
        </p>
      </div>
    </div>
  );
}

export default CardAtivo;