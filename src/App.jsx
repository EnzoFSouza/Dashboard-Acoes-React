import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Registro from "./pages/Registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão — redireciona / para /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registro" element={<Registro />} />

        {/* Qualquer rota desconhecida também vai para login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;