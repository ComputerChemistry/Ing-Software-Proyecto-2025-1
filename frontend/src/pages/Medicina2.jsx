// src/pages/Medicina2.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import medicina2Img from "../assets/tienda_medicina2.jpg";

const menuItems = [
  { nombre: "Caldo de huesos con receta controlada", precio: 75 },
  { nombre: "Burrito de anatomía humana (no preguntar)", precio: 70 },
  { nombre: "Tacos de bisturí con salsa", precio: 60 },
  { nombre: "Chimichanga con traumatología", precio: 68 },
  { nombre: "Wrap de urgencias sin turno", precio: 64 },
  { nombre: "Café intravenoso (IV)", precio: 28 },
  { nombre: "Pizza pan con electrocardiograma", precio: 52 },
  { nombre: "Sándwich de burnout estudiantil", precio: 50 },
  { nombre: "Boneless de plasma B positivo", precio: 66 },
  { nombre: "Tostadas con propedéutica clínica", precio: 46 },
  { nombre: "Onigiri con guantes estériles", precio: 60 },
  { nombre: "Ensalada con síntomas dispersos", precio: 58 },
  { nombre: "Sopa de gripa emocional", precio: 45 },
  { nombre: "Panini de diagnóstico diferencial", precio: 63 },
  { nombre: "Galletas con ibuprofeno invisible", precio: 35 },
  { nombre: "Tamales de necropsia", precio: 67 },
  { nombre: "Quesadilla embarazada de estrés", precio: 60 },
  { nombre: "Molletes con estetoscopio fundido", precio: 59 },
  { nombre: "Refresco de alta presión", precio: 22 },
  { nombre: "Postre de trauma por ENARM", precio: 80 },
];

const Medicina2 = () => {
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
          Cafetería Medicina 2
        </h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem"
        }}>
          <img src={medicina2Img} alt="Cafetería Medicina 2" style={{
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

export default Medicina2;
