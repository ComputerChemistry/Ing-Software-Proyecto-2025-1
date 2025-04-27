import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 👈 Importa Router
import './index.css';

import Home from './pages/Home.jsx';
// Si quieres después importar Login o App también lo haces aquí.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Aquí puedes agregar más rutas después, como el login, registro, etc */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
