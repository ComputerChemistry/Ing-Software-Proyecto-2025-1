import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Cafeterias from "./pages/Cafeterias.jsx";
import Facultad from "./pages/Facultad.jsx";
import Login from "./pages/Login.jsx";
import Registro from "./pages/Registro.jsx";

//Cafeterias
import Derecho from "./pages/Derecho.jsx";
import Derecho2 from "./pages/Derecho.jsx"
import TrabajoSocial from "./pages/TrabajoSocial.jsx";
import Educacion from "./pages/Educacion.jsx";
import PsicologiaComunicacion from "./pages/PsicologiaComunicacion.jsx";
import Medicina1 from "./pages/Medicina1.jsx";
import Medicina2 from "./pages/Medicina2.jsx";
import CivilMinas from "./pages/CivilMinas.jsx";
import IngenieriaQuimica from "./pages/IngenieriaQuimica.jsx";
import Matematicas from "./pages/Matematicas.jsx";
import Artes from "./pages/Artes.jsx";
import Geologia from "./pages/Geologia.jsx";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      {/* Páginas principales */}
      <Route path="/" element={<Home />} />
      <Route path="/cafeterias" element={<Cafeterias />} />
      <Route path="/facultad" element={<Facultad />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* Cafeterías individuales */}
      <Route path="/cafeterias/cafeteria-derecho" element={<Derecho />} />
      <Route path="/cafeterias/cafeteria-derecho-2" element={<Derecho2 />} />
      <Route path="/cafeterias/cafeteria-de-trabajo-social" element={<TrabajoSocial />} />
      <Route path="/cafeterias/cafeteria-educacion" element={<Educacion />} />
      <Route path="/cafeterias/cafeteria-historia/sociologia" element={<PsicologiaComunicacion />} />
      <Route path="/cafeterias/matematicas" element={<Matematicas/>} />
      <Route path="/cafeterias/geologia" element={<Geologia/>} />
      <Route path="/cafeterias/cafetería-medicina" element={<Medicina1 />} />
      <Route path="/cafeterias/medicina-2" element={<Medicina2 />} />
      <Route path="/cafeterias/cafeteria-departemento-de-ingenieria-industrial/civil" element={<CivilMinas />} />
      <Route path="/cafeterias/cafeteria-departemento-de-ingenieria-quimica" element={<IngenieriaQuimica />} />
      <Route path="/cafeterias/cafetería-matemáticas" element={<Matematicas />} />
      <Route path="/cafeterias/cafetería-geología" element={<Geologia />} />
      <Route path="/cafeterias/cafetería-artes" element={<Artes />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
