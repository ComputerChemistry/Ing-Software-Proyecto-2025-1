// src/pages/CivilMinas.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import civilImg from "../assets/tienda_civil-arqui.jpg";

const menuItems = [
  { nombre: "Molletes con mortero y frijol estructural", precio: 52 },
  { nombre: "Pizza de concreto premezclado", precio: 68 },
  { nombre: "Burrito reforzado con varilla No. 3", precio: 60 },
  { nombre: "Quesadilla con recubrimiento anticorrosivo", precio: 58 },
  { nombre: "Pepsi Black a las Rocas", precio: 25 },
  { nombre: "Café de cálculo estructural", precio: 22 },
  { nombre: "Sopa de cimientos con crotones", precio: 45 },
  { nombre: "Ensalada geotécnica con aderezo de topografía", precio: 48 },
  { nombre: "Sandwich de estrés cortante", precio: 55 },
  { nombre: "Postre de colapso plástico", precio: 38 },
];

const CivilMinas = () => {
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
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}>
          Cafetería Civil-Minas
        </h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem"
        }}>
          <img src={civilImg} alt="Cafetería Civil-Minas" style={{
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "0.75rem",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
            objectFit: "contain"
          }} />
        </div>

        <h2 style={{ fontSize: "1.5rem", textAlign: "center", marginBottom: "1rem" }}>Menú</h2>
        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: "1rem",
          padding: "1.5rem",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
        }}>
          {menuItems.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "0.5rem 0"
            }}>
              <span>{item.nombre}</span>
              <span>${item.precio}</span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CivilMinas;

