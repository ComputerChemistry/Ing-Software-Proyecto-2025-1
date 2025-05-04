import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cafeterias from "./pages/Cafeterias.jsx";
import Facultad from "./pages/Facultad.jsx";
import Login from "./pages/Login.jsx";
import Registro from "./pages/Registro.jsx";
import "./index.css";


// Importar las páginas individuales
import Derecho from "./pages/Derecho.jsx";
import TrabajoSocial from "./pages/TrabajoSocial.jsx";
import Educacion from "./pages/Educacion.jsx";
import PsicologiaComunicacion from "./pages/PsicologiaComunicacion.jsx";
import Medicina1 from "./pages/Medicina1.jsx";
import Medicina2 from "./pages/Medicina2.jsx";
import CivilMinas from "./pages/CivilMinas.jsx";
import IngenieriaQuimica from "./pages/IngenieriaQuimica.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cafeterias" element={<Cafeterias />} />
        <Route path="/facultad" element={<Facultad />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

          {/* Rutas de cafeterías individuales */}
          <Route path="/cafeterias/derecho" element={<Derecho />} />
        <Route path="/cafeterias/trabajo-social" element={<TrabajoSocial />} />
        <Route path="/cafeterias/educacion" element={<Educacion />} />
        <Route path="/cafeterias/psicologia-comunicacion" element={<PsicologiaComunicacion />} />
        <Route path="/cafeterias/medicina-1" element={<Medicina1 />} />
        <Route path="/cafeterias/medicina-2" element={<Medicina2 />} />
        <Route path="/cafeterias/civil-minas" element={<CivilMinas />} />
        <Route path="/cafeterias/ingenieria-quimica" element={<IngenieriaQuimica />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
