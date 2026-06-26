import ListaAtivos from "./components/ListaAtivos";
import { ativos } from "./data/ativos";

function App() {
  return (
    <div className="p-6">
      <ListaAtivos ativos={ativos} />
    </div>
  );
}

export default App;