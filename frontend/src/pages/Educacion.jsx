// src/pages/Educacion.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import educacionImg from "../assets/tiendita_educacion.jpg";

const menuItems = [
  { nombre: "Nachos con conocimiento ancestral", precio: 50 },
  { nombre: "Torta pedagógica de barbacoa", precio: 65 },
  { nombre: "Hot cakes con esencia de reforma educativa", precio: 55 },
  { nombre: "Burrito de planeación didáctica", precio: 48 },
  { nombre: "Mollete constructivista", precio: 52 },
  { nombre: "Chilaquiles con epistemología crítica", precio: 60 },
  { nombre: "Sándwich con valores transversales", precio: 42 },
  { nombre: "Pizza pan de educación inclusiva", precio: 50 },
  { nombre: "Café con rezago escolar", precio: 20 },
  { nombre: "Tostada del buen trato", precio: 38 },
];

const Educacion = () => {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "linear-gradient(-45deg, #32302f, #282828, #1e1e1e)",
      backgroundSize: "600% 600%",
      animation: "backgroundAnimation 30s ease infinite",
      color: "white",
      overflowX: "hidden"
    }}>
    <Header />

    <main style={{ flexGrow: 1, padding: "2rem", paddingTop: "7rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}>
        Cafetería Educación
      </h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "2rem"
      }}>
        <img src={educacionImg} alt="Cafetería Educación" style={{
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

export default Educacion;
