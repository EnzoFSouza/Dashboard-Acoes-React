import Header from "./components/Header";
import ListaAtivos from "./components/ListaAtivos";
import { ativos } from "./data/ativos";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <ListaAtivos ativos={ativos} />
    </div>
  );
}

export default App;