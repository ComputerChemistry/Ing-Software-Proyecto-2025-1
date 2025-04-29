// src/components/Footer.jsx
import React from "react";
import unisonLogo from "../assets/unison-logo.png";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "rgba(162, 69, 2, 0.85)", // #A24502
      color: "white",
      textAlign: "center",
      padding: "1.5rem 1rem",
      marginTop: "2rem",
      fontSize: "0.9rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.75rem",
      backdropFilter: "blur(6px)"
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
