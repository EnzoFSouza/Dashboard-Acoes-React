import Header from "./components/Header";
import ResumoCarteira from "./components/ResumoCarteira";
import ListaAtivos from "./components/ListaAtivos";
import { ativos } from "./data/ativos";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <ResumoCarteira ativos={ativos} />
      <ListaAtivos ativos={ativos} />
    </div>
  );
}

export default App;