import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Tu página principal con las tarjetas
import CafeteriaDetail from './pages/CafeteriaDetail'; // Página para mostrar los detalles de la cafetería
import Login from './pages/Login'; // Página de Login que contiene LoginCard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cafeteria/:id" element={<CafeteriaDetail />} />
        <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
      </Routes>
    </Router>
  );
}

export default App;
