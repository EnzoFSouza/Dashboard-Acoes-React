import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { API_URL } from "../config";

function GraficoAtivo({ ativo, historicoAtualizado }) {
  const [historico, setHistorico] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const dadosGrafico = historico.map((item) => ({
  ...item,
  data_formatada: new Date(
    item.data.replace(" ", "T")
  ).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }),
}));

  useEffect(() => {
    if (!ativo) {
      setHistorico([]);
      return;
    }

    async function buscarHistorico() {
      try {
        setCarregando(true);
        setErro(null);

        const resposta = await fetch(
          `${API_URL}/api/ativos/${ativo.id}/historico`,
          {
            credentials: "include",
          }
        );

        if (!resposta.ok) {
          throw new Error("Erro ao buscar histórico.");
        }

        const dados = await resposta.json();

        setHistorico(dados);
      } catch (err) {
        console.error("Erro ao buscar histórico:", err);
        setErro("Não foi possível carregar o histórico.");
      } finally {
        setCarregando(false);
      }
    }

    buscarHistorico();
  }, [ativo, historicoAtualizado]);

  if (!ativo) {
    return (
      <div className="mt-6 border rounded-lg p-6 bg-white shadow-sm">
        <p className="text-gray-500 text-center">
          Selecione um ativo para visualizar sua evolução.
        </p>
      </div>
    );
  }

  if (carregando) {
    return (
      <div className="mt-6 border rounded-lg p-6 bg-white shadow-sm">
        <p className="text-gray-500 text-center">
          Carregando histórico...
        </p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="mt-6 border rounded-lg p-6 bg-white shadow-sm">
        <p className="text-red-500 text-center">{erro}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 border rounded-lg p-6 bg-white shadow-sm">
      <h2 className="text-xl font-bold mb-4">
        Evolução de {ativo.nome}
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={dadosGrafico}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="data_formatada" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="preco"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficoAtivo;