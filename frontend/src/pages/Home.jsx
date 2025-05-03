// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import CafeCard from "../components/CafeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

import derecho1 from "../assets/tienda_derecho1.jpg";
import trabajoSocial from "../assets/tienda_trabajo-social.jpg";
import educacion from "../assets/tiendita_educacion.jpg";
import derecho2 from "../assets/tienda_derecho2.jpg";
import medicina1 from "../assets/tienda_medicina1.jpg";
import medicina2 from "../assets/tienda_medicina2.jpg";
import civilArqui from "../assets/tienda_civil-arqui.jpg";
import ingenieriaQuimica from "../assets/tienda_ingenieria-quimica.jpg";

const cafeterias = [
  { name: "Cafetería Derecho", image: derecho1 },
  { name: "Cafetería Trabajo Social", image: trabajoSocial },
  { name: "Cafetería Educación", image: educacion },
  { name: "Cafetería Psicología/Comunicación", image: derecho2 },
  { name: "Cafetería Medicina", image: medicina1 },
  { name: "Segunda Cafetería Medicina", image: medicina2 },
  { name: "Cafetería Civil-Minas", image: civilArqui },
  { name: "Cafetería Ingeniería Química", image: ingenieriaQuimica },
];

const Home = () => {
  const [cafeteriaDestacada, setCafeteriaDestacada] = useState(cafeterias[0]);
  const [hover, setHover] = useState(false);

  const siguienteCafeteria = () => {
    const index = cafeterias.indexOf(cafeteriaDestacada);
    setCafeteriaDestacada(cafeterias[(index + 1) % cafeterias.length]);
  };

  const anteriorCafeteria = () => {
    const index = cafeterias.indexOf(cafeteriaDestacada);
    setCafeteriaDestacada(cafeterias[(index - 1 + cafeterias.length) % cafeterias.length]);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      const random = Math.floor(Math.random() * cafeterias.length);
      setCafeteriaDestacada(cafeterias[random]);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ 
      margin: 0,
      minHeight: "100vh",
      background: "linear-gradient(-45deg, #161b33, #1f2457, #2a3558)",
      backgroundSize: "600% 600%",
      animation: "backgroundAnimation 30s ease infinite",
      color: "white",
      paddingTop: "6rem"
    }}>    
      <Header />
      
      {/* Cafetería destacada */}
      <div 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          boxShadow: hover 
            ? "0 8px 20px rgba(0, 0, 0, 0.3)"
            : "0 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "0.75rem",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: "white",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "2rem",
          width: "80%",
          transition: "all 0.3s ease",
          transform: hover ? "translateY(-4px)" : "translateY(0)"
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Cafetería Destacada 📸</h2>
        <img
          src={cafeteriaDestacada.image}
          alt={cafeteriaDestacada.name}
          style={{ 
            marginTop: "1rem", 
            width: "100%", 
            maxWidth: "600px",
            height: "300px", 
            objectFit: "cover", 
            borderRadius: "1rem" 
          }}
        />
        <p style={{ marginTop: "1rem", fontSize: "1.25rem" }}>{cafeteriaDestacada.name}</p>

        {/* Botones para navegar entre cafeterías */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "1rem" }}>
          <button onClick={anteriorCafeteria} style={buttonStyle}>Anterior</button>
          <button onClick={siguienteCafeteria} style={buttonStyle}>Siguiente</button>
        </div>
      </div>

      {/* Cards de cafeterías */}
      <div style={{ padding: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}>Cafeterías</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
          {cafeterias.map((cafeteria, index) => (
            <CafeCard
              key={index}
              name={cafeteria.name}
              image={cafeteria.image}
              background="#4b4e91"
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
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

export default Home;
