import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import Header from "../components/Header";
import ResumoCarteira from "../components/ResumoCarteira";
import ListaAtivos from "../components/ListaAtivos";
import FormularioAtivo from "../components/FormularioAtivo";

function Dashboard() {
  const [ativos, setAtivos] = useState([]);
  const [patrimonioTotal, setPatrimonio] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  function buscarCarteira() {
    setCarregando(true);

    fetch(`${API_URL}/api/carteira/resumo`, {
      credentials: "include", //envia o cookie JWT automaticamente
    })
      .then((res) => {
        // Se retornar 401, o usuário não está autenticado --> redireciona pro login
        if (res.status === 401) {
          navigate("/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        setAtivos(data.ativos);
        setPatrimonio(data.patrimonio_total);
      })
      .catch((err) => console.error("Erro ao buscar carteira:", err))
      .finally(() => setCarregando(false));
  }

  useEffect(() => {
    buscarCarteira();
  }, []);

  if (carregando) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Carregando carteira...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <FormularioAtivo onAporteCriado={buscarCarteira} />
      <ResumoCarteira ativos={ativos} patrimonioTotal={patrimonioTotal} />
      <ListaAtivos ativos={ativos} />
    </div>
  );
}

export default Dashboard;