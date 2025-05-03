// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header style={{
      background: "linear-gradient(-45deg, rgba(22,27,51,0.85), rgba(31,36,87,0.85), rgba(42,53,88,0.85))",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
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
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
        <img src={logo} alt="Logo El Búho Tragón" style={{ height: "50px", width: "50px" }} />
        <span style={{ fontSize: "1.8rem", fontWeight: "bold", color: "white" }}>
          El Búho Tragón
        </span>
      </Link>

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
  backgroundColor: "#4b4e91",
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