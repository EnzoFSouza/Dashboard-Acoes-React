import { useState } from "react";
import CardAtivo from "./CardAtivo";

function ListaAtivos({ ativos }) {
  // useState cria uma variável reativa.
  // "filtro" é o valor atual, "setFiltro" é a função para mudá-lo.
  // Quando setFiltro é chamado, o React re-renderiza este componente.

  //Cria uma variável especial que, quando muda, faz o React redesenhar a tela automaticamente.
  const [filtro, setFiltro] = useState("todos");

  // Filtra os ativos com base no estado atual
  const ativosFiltrados = ativos.filter((ativo) => {
    if (filtro === "todos") return true;
    return ativo.tipo === filtro;
  });

  return (
    <div>
      {/* Botões de filtro — cada clique muda o estado */}
      <div className="flex gap-2 mb-4">
        <button
            /*() => setFiltro("acoes") é uma função anônima (arrow function) 
            Só executa quando o botão é clicado.
            Não pode ser onClick={setFiltro("acoes")} direto
            Isso executaria a função imediatamente ao renderizar a página, não no clique.*/
          onClick={() => setFiltro("todos")}
          className={`px-3 py-1 rounded ${
            filtro === "todos" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro("acoes")}
          className={`px-3 py-1 rounded ${
            filtro === "acoes" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Ações
        </button>
        <button
          onClick={() => setFiltro("fiis")}
          className={`px-3 py-1 rounded ${
            filtro === "fiis" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          FIIs
        </button>
      </div>

      {/* Renderização de lista — .map() transforma cada item em um componente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ativosFiltrados.map((ativo) => (
          <CardAtivo key={ativo.ticker} ativo={ativo} />
        ))}
      </div>
    </div>
  );
}

export default ListaAtivos;