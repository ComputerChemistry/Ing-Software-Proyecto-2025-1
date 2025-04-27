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
        color: "white",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={logo} alt="Logo" style={{ height: "50px", width: "50px" }} />
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>El Búho Tragón</h1>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/cafeterias">
          <button style={navButtonStyle}>Cafeterías</button>
        </Link>
        <Link to="/facultad">
          <button style={navButtonStyle}>Facultad</button>
        </Link>
        <Link to="/login">
          <button style={navButtonStyle}>Login</button>
        </Link>
        <Link to="/registro">
          <button style={navButtonStyle}>Registro</button>
        </Link>
      </div>
    </header>
  );
};

const navButtonStyle = {
  backgroundColor: "#4b3423",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Header;