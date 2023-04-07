import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BancoErrores from "./pages/banco-errores.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Backend-Banco-Errores" element={<BancoErrores/>} />
      </Routes>
    </Router>
  );
}

export default App;


