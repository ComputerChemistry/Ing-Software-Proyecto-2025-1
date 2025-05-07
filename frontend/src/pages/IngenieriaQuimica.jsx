// src/pages/IngenieriaQuimica.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import quimicaImg from "../assets/tienda_ingenieria-quimica.jpg";

const menuItems = [
  { nombre: "Ensalada catalítica con vinagreta ácido-base", precio: 55 },
  { nombre: "Chimichanga de reacción endotérmica", precio: 65 },
  { nombre: "Wrap polimérico de alta densidad", precio: 58 },
  { nombre: "Pizza pan con reacción Maillard", precio: 62 },
  { nombre: "Hamburguesa con isótopos de sabor", precio: 78 },
  { nombre: "Mollete con ecuación balanceada", precio: 50 },
  { nombre: "Onigiri de química orgánica", precio: 52 },
  { nombre: "Tostadas de electrólito con guarnición de electrodos", precio: 48 },
  { nombre: "Refresco isotónico con colorante E330", precio: 22 },
  { nombre: "Café con disolución espontánea de la paciencia", precio: 20 },
];

const IngenieriaQuimica = () => {
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
          Cafetería Ingeniería Química
        </h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem"
        }}>
          <img src={quimicaImg} alt="Cafetería Ingeniería Química" style={{
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

export default IngenieriaQuimica;
