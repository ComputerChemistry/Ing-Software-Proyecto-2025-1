// src/pages/Cafeterias.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import derecho1 from "../assets/tienda_derecho1.jpg";
import trabajoSocial from "../assets/tienda_trabajo-social.jpg";
import educacion from "../assets/tiendita_educacion.jpg";
import derecho2 from "../assets/tienda_derecho2.jpg";
import medicina1 from "../assets/tienda_medicina1.jpg";
import medicina2 from "../assets/tienda_medicina2.jpg";
import civilArqui from "../assets/tienda_civil-arqui.jpg";
import ingenieriaQuimica from "../assets/tienda_ingenieria-quimica.jpg";

const cafeterias = [
  {
    name: "Cafetería Derecho",
    image: derecho1,
    description: "Pizza a la leña algo bien.",
    route: "/cafeterias/derecho"
  },
  {
    name: "Cafetería Trabajo Social",
    image: trabajoSocial,
    description: "Sabrá la vrg que vendan ahi.",
    route: "/cafeterias/trabajo-social"
  },
  {
    name: "Cafetería Educación",
    image: educacion,
    description: "Quiero unos nachossssssssssssss",
    route: "/cafeterias/educacion"
  },
  {
    name: "Cafetería Psicología/Comunicación",
    image: derecho2,
    description: "Jajaja tienen que compartir tiendita",
    route: "/cafeterias/psicologia-comunicacion"
  },
  {
    name: "Cafetería Medicina",
    image: medicina1,
    description: "Pollo Feliz",
    route: "/cafeterias/medicina-1"
  },
  {
    name: "Segunda Cafetería Medicina",
    image: medicina2,
    description: "Pollo Infeliz",
    route: "/cafeterias/medicina-2"
  },
  {
    name: "Cafetería Civil-Minas",
    image: civilArqui,
    description: "La quesadilla con tocino y el mollete full algo bien",
    route: "/cafeterias/civil-minas"
  },
  {
    name: "Cafetería Ingeniería Química",
    image: ingenieriaQuimica,
    description: "Catán es un juego de mesa de 3 a 6 jugadores el cual consiste en competir y negociar con los demás jugadores",
    route: "/cafeterias/ingenieria-quimica"
  }
];

const Cafeterias = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "linear-gradient(-45deg, #161b33, #1f2457, #2a3558)",
      backgroundSize: "600% 600%",
      animation: "backgroundAnimation 30s ease infinite",
      color: "white",
      overflowX: "hidden"
    }}>
      <Header />

      <main style={{ flexGrow: 1, padding: "2rem", paddingTop: "7rem" }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>
          Lista de Cafeterías
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
          {cafeterias.map((cafeteria, index) => (
            <div
              key={index}
              onClick={() => navigate(cafeteria.route)}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "1rem",
                borderRadius: "1rem",
                width: "100%",
                maxWidth: "900px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                backdropFilter: "blur(6px)",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
              }}
            >
              <img src={cafeteria.image} alt={cafeteria.name} style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "0.75rem",
                marginRight: "1.5rem"
              }} />
              <div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{cafeteria.name}</h2>
                <p style={{ marginTop: "0.5rem" }}>{cafeteria.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cafeterias;
