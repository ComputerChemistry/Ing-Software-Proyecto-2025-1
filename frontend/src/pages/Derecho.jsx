// src/pages/TrabajoSocial.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import trabajoSocialImg from "../assets/tienda_trabajo-social.jpg";

const menuItems = [
  { nombre: "Tamal de aire con esencia de justicia social", precio: 42 },
  { nombre: "Quesadilla de tofu revolucionario", precio: 38 },
  { nombre: "Café de lágrimas colectivas", precio: 25 },
  { nombre: "Pan con pan porque se acabó el presupuesto", precio: 12 },
  { nombre: "Sopa de debates acalorados", precio: 33 },
  { nombre: "Sandwich de empatía vegana", precio: 50 },
  { nombre: "Ensalada de derechos humanos", precio: 45 },
  { nombre: "Croquetas de Marx", precio: 60 },
  { nombre: "Pizza con piña consentida", precio: 48 },
  { nombre: "Jugo de resiliencia", precio: 18 },
];

const TrabajoSocial = () => {
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
          Cafetería Trabajo Social
        </h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem"
        }}>
          <img src={trabajoSocialImg} alt="Cafetería Trabajo Social" style={{
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

export default TrabajoSocial;
