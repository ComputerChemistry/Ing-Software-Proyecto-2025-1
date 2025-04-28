// src/components/Footer.jsx
import React from "react";
import unisonLogo from "../assets/unison-logo.png";

const Footer = () => {
  return (
    <footer style={{
      background: "linear-gradient(-45deg, rgba(46,48,85,0.85), rgba(59,62,109,0.85), rgba(90,93,172,0.85))",
      color: "white",
      textAlign: "center",
      padding: "1.5rem 1rem",
      marginTop: "2rem",
      fontSize: "0.9rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.75rem",
      backdropFilter: "blur(6px)", // Igual que el header
      boxShadow: "0 -4px 6px rgba(0,0,0,0.2)" // Sombra hacia arriba
    }}>
      <img 
        src={unisonLogo} 
        alt="Logo UNISON" 
        style={{ height: "50px", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5))" }} 
      />
      <span>El Búho Tragón © 2025 - Universidad de Sonora</span>
    </footer>
  );
};

export default Footer;
