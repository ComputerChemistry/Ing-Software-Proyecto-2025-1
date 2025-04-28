// src/components/Footer.jsx
import React from "react";
import unisonLogo from "../assets/unison-logo.png";

const Footer = () => {
  return (
    <footer style={{
      background: "#3b5f82", // Mismo color sólido que el Header 🔥
      color: "white",
      textAlign: "center",
      padding: "1.5rem 1rem",
      marginTop: "2rem",
      fontSize: "0.9rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.75rem",
      boxShadow: "0 -4px 6px rgba(0,0,0,0.2)" // Sombra suave hacia arriba
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
