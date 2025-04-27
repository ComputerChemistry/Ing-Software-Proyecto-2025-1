import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#8a745d",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* IZQUIERDA: Logo + Nombre */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={logo} alt="Logo" style={{ height: "50px", width: "50px" }} />
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>
          El Búho Tragón
        </h1>
      </div>

      {/* CENTRO: Botones Cafeterías y Facultad */}
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/cafeterias">
          <button style={navButtonCenterStyle}>Cafeterías</button>
        </Link>
        <Link to="/facultad">
          <button style={navButtonCenterStyle}>Facultad</button>
        </Link>
      </div>

      {/* DERECHA: Login y Registro */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/login">
          <button style={navButtonRightStyle}>Login</button>
        </Link>
        <Link to="/registro">
          <button style={navButtonRightStyle}>Registro</button>
        </Link>
      </div>
    </header>
  );
};

const navButtonCenterStyle = {
  backgroundColor: "#4b3423",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  transition: "background-color 0.3s, box-shadow 0.3s",
};

const navButtonRightStyle = {
  backgroundColor: "#5c4430",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  transition: "background-color 0.3s, box-shadow 0.3s",
};

export default Header;
