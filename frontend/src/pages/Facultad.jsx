// src/pages/Facultad.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const facultades = [
  {
    nombre: "Facultad Interdisciplinaria de Ciencias Sociales",
    cafeterias: [
      "Cafetería Derecho",
      "Cafeteria Derecho 2",
      "Cafetería Trabajo Social",
      "Cafetería Historia/Sociologia", 
      "Cafeteria Educacion"
    ]
  },
  {
    nombre: "Facultad Interdisciplinaria de Ciencias Biológicas y de la Salud",
    cafeterias: [
      "Cafetería Medicina",
      "Segunda Cafetería Medicina"
    ]
  },
  {
    nombre: "Facultad Interdisciplinaria de Ingeniería",
    cafeterias: [
      "Cafetería Civil-Minas",
      "Cafetería Ingeniería Química"
    ]
  },
  {
    nombre: "Facultad Interdisciplinaria de Humanidades y Artes",
    cafeterias: [
      "Cafeteria de Artes"      
    ]
  },
    {
      nombre: "Facultad Interdisciplinaria de Ciencias Exactas y Naturales",
      cafeterias: [
	"Cafeteria de Matematicas",
	"Cafeteria de Geologia"
      ]
    }
  

];

const Facultad = () => {
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
          Facultades y sus Cafeterías
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
          {facultades.map((facultad, index) => (
            facultad.cafeterias.length > 0 && (
              <div key={index} style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                padding: "1.5rem",
                borderRadius: "1rem",
                width: "100%",
                maxWidth: "900px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                backdropFilter: "blur(6px)"
              }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{facultad.nombre}</h2>
                <ul style={{ paddingLeft: "1.5rem" }}>
                  {facultad.cafeterias.map((cafeteria, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem", listStyleType: "disc" }}>{cafeteria}</li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Facultad;
