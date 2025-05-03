// src/pages/Login.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      background: "linear-gradient(-45deg, #161b33, #1f2457, #2a3558)",
      backgroundSize: "600% 600%",
      animation: "backgroundAnimation 30s ease infinite",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflowX: "hidden"
    }}>
      <Header />

      <main style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}>
        <h1 style={{
          fontSize: "2rem",
          marginBottom: "1.5rem",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          Ingrese su cuenta
        </h1>

        <div style={{
          backgroundColor: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(8px)",
          padding: "2rem",
          borderRadius: "1rem",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        }}>
          <form>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Usuario
            </label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              style={inputStyle}
            />

            <label style={{ display: "block", margin: "1rem 0 0.5rem", fontWeight: "bold" }}>
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              Ingresar
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
  marginBottom: "0.5rem",
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
  transition: "background-color 0.3s ease",
};

export default Login;
