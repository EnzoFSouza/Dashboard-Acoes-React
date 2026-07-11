import Header from "./components/Header";
import ResumoCarteira from "./components/ResumoCarteira";
import ListaAtivos from "./components/ListaAtivos";
import FormularioAtivo from "./components/FormularioAtivo";

// Mover dados do ativos.js para estado do app.jsx
import { useState } from "react";
import { ativos as ativosIniciais } from "./data/ativos";

function App() {
  // Dados saem do arquivo estático e entram no estado
  const [ativos, setAtivos] = useState(ativosIniciais);

  function handleAdicionar(novoAtivo) {
    setAtivos([...ativos, novoAtivo]);
  }

  function handleAtualizar(ativosAtualizados) {
    setAtivos(ativosAtualizados);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <FormularioAtivo
        ativos={ativos}
        onAdicionar={handleAdicionar}
        onAtualizar={handleAtualizar}
      />
      <ResumoCarteira ativos={ativos} />
      <ListaAtivos ativos={ativos} />
    </div>
  );
}

export default App;