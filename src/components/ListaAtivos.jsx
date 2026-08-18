import { useState } from "react";
import CardAtivo from "./CardAtivo";

function ListaAtivos({  ativos,  onSelecionarAtivo,  onPrecoAtualizado}) {
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
      {["todos", "ação", "FII", "criptomoeda"].map((tipo) => (
        <button
          key={tipo}
          onClick={() => setFiltro(tipo)}
          className={`px-3 py-1 rounded capitalize ${
            filtro === tipo ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {tipo === "todos" ? "Todos" : tipo}
        </button>
      ))}

      </div>
      {/* Renderização de lista — .map() transforma cada item em um componente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ativosFiltrados.map((ativo) => (
          <CardAtivo key={ativo.nome} ativo={ativo} onClick={() => onSelecionarAtivo(ativo) } onPrecoAtualizado={onPrecoAtualizado} />
        ))}
      </div>
    </div>
  );
}

export default ListaAtivos;