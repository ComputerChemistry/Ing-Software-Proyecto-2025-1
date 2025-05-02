// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header style={{
      backgroundColor: "rgba(6, 13, 8, 0.85)", // #060D08
      padding: "1rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backdropFilter: "blur(6px)",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 50
    }}>
      
      {/* IZQUIERDA: Botones de navegación */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Link to="/cafeterias">
          <button style={buttonStyle}>Cafeterías</button>
        </Link>
        <Link to="/facultad">
          <button style={buttonStyle}>Facultad</button>
        </Link>
      </div>

      {/* CENTRO: Logo y nombre */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={logo} alt="Logo El Búho Tragón" style={{ height: "50px", width: "50px" }} />
        <span style={{ fontSize: "1.8rem", fontWeight: "bold", color: "white" }}>
          El Búho Tragón
        </span>
      </div>

      {/* DERECHA: Login y Registro */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Link to="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
        <Link to="/registro">
          <button style={buttonStyle}>Registro</button>
        </Link>
      </div>
    </header>
  );
};

const buttonStyle = {
  backgroundColor: "#CD8A39", // Raw Sienna
  color: "#ffffff",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "1rem",
  transition: "background 0.3s ease"
};

export default Header;
