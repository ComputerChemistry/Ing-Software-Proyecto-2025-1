// src/components/Footer.jsx
import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import unisonLogo from "/EscudoUnison.png";
import lcclogo from "/LCCLogo.png";

const Footer = () => {
  return (
    <footer style={{
      
      color: "#FFFAF0",
      textAlign: "center",
      padding: "1.5rem 1rem",
      marginTop: "2rem",
      fontSize: "0.9rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.75rem",
      backdropFilter: "blur(6px)",
      
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem"
      }}>
        <a 
          href="https://www.unison.mx/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            transition: "transform 0.2s ease",
            display: "inline-block",
            "&:hover": {
              transform: "scale(1.05)"
            }
          }}
        >
          <img 
            src={unisonLogo} 
            alt="Logo UNISON" 
            style={{ 
              height: "100px", 
              filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5)) brightness(1.05)",
              transition: "filter 0.2s ease",
            }} 
          />
        </a>
        <a 
          href="https://cc.unison.mx/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            transition: "transform 0.2s ease",
            display: "inline-block",
            "&:hover": {
              transform: "scale(1.05)"
            }
          }}
        >
          <img 
            src={lcclogo} 
            alt="Logo LCC" 
            style={{ 
              height: "100px", 
              filter: "drop-shadow(0 0 4px rgba(0,0,0,0.5)) brightness(1.05)",
              transition: "filter 0.2s ease",
            }} 
          />
        </a>
      </div>

      {/* GitHub Button */}
      <a 
        href="https://github.com/ComputerChemistry/Ing-Software-Proyecto-2025-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#FFFAF0",
          textDecoration: "none",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid rgba(205, 138, 57, 0.3)",
          transition: "all 0.2s ease",
          fontSize: "0.9rem",
          fontWeight: "500",
          "&:hover": {
            backgroundColor: "rgba(29, 42, 16, 0.7)",
            borderColor: "rgba(205, 138, 57, 0.5)"
          }
        }}
      >
        <VscGithubAlt size={20} />
        <span>Sigue El Búho Tragón en GitHub</span>
      </a>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
        <span style={{ fontWeight: "500" }}>El Búho Tragón © 2025 - Universidad de Sonora</span>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          fontSize: "0.85rem",
          color: "rgba(255, 250, 240, 0.7)",
          marginTop: "0.25rem"
        }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s ease" }}>Términos</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s ease" }}>Privacidad</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s ease" }}>Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
