// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header style={{
        background: "#3b5f82", // Azul sólido, más oscuro que #4c789b
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50
      }}>
      
      
      
      {/* Logo y nombre */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={logo} alt="Logo El Búho Tragón" style={{ height: "50px", width: "50px" }} />
        <span style={{ fontSize: "1.8rem", fontWeight: "bold", color: "white" }}>
          El Búho Tragón
        </span>

        {/* Botones Cafeterías y Facultad */}
        <div style={{ display: "flex", gap: "0.5rem", marginLeft: "2rem" }}>
          <Link to="/cafeterias">
            <button style={buttonStyle}>Cafeterías</button>
          </Link>
          <Link to="/facultad">
            <button style={buttonStyle}>Facultad</button>
          </Link>
        </div>
      </div>

      {/* Botones Login y Registro */}
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
  backgroundColor: "#92b5c4",
  color: "#1e2e3e",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "1rem",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  transition: "background-color 0.3s",
};

export default Header;
