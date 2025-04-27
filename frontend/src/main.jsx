import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cafeterias from "./pages/Cafeterias.jsx";
import Facultad from "./pages/Facultad.jsx";
import Login from "./pages/Login.jsx";
import Registro from "./pages/Registro.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cafeterias" element={<Cafeterias />} />
        <Route path="/facultad" element={<Facultad />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
