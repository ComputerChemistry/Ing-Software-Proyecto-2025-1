// src/pages/Registro.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Registro = () => {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

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
      color: "white"
    }}>
      <Header />

      <main style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        paddingTop: "8rem", // esto evita que se tape con el header
      }}>
        <h1 style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          Crear una cuenta nueva
        </h1>

        <div style={{
          backgroundColor: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(8px)",
          padding: "2rem",
          borderRadius: "1rem",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
        }}>
          <form>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Nombre de usuario
            </label>
            <div style={{ position: "relative" }}>
              <span style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.2rem"
              }}>👤</span>
              <input
                type="text"
                placeholder="usuario123"
                style={{ ...inputStyle, paddingLeft: "2.5rem" }}
              />
            </div>

            <label style={{ display: "block", margin: "1rem 0 0.5rem", fontWeight: "bold" }}>
              Contraseña
            </label>
            <div style={{ position: "relative" }}>
              <span style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.2rem"
              }}>🔒</span>
              <input
                type={mostrarContrasena ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                style={{ ...inputStyle, paddingLeft: "2.5rem" }}
              />
            </div>

            <div style={{ marginTop: "0.5rem", textAlign: "left" }}>
              <label style={{ fontSize: "0.85rem" }}>
                <input
                  type="checkbox"
                  checked={mostrarContrasena}
                  onChange={() => setMostrarContrasena(!mostrarContrasena)}
                  style={{ marginRight: "0.5rem" }}
                />
                Mostrar contraseña
              </label>
            </div>

            <button type="submit" style={buttonStyle}>
              Registrarse
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  marginBottom: "0.5rem"
};

const buttonStyle = {
  width: "100%",
  marginTop: "1.5rem",
  padding: "0.75rem",
  backgroundColor: "#4b4e91",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  borderRadius: "0.5rem",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s ease"
};

export default Registro;
