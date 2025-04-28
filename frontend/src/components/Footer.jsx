import React from "react";
import unisonLogo from "../assets/unison-logo.png";

const Footer = () => {
  return (
    <footer style={{
      background: "linear-gradient(to top, #4b3423, #5c4430)", 
      color: "white",
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem",
      fontSize: "0.9rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem"
    }}>
      <img src={unisonLogo} alt="Logo UNISON" style={{ height: "50px" }} />
      <span>El Búho Tragón © 2025 - Universidad de Sonora</span>
    </footer>
  );
};

export default Footer;
