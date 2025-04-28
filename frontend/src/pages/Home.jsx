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
  { name: "Cafetería Derecho 1", image: derecho1 },
  { name: "Cafetería Trabajo Social", image: trabajoSocial },
  { name: "Cafetería Educación", image: educacion },
  { name: "Cafetería Derecho 2", image: derecho2 },
  { name: "Cafetería Medicina 1", image: medicina1 },
  { name: "Cafetería Medicina 2", image: medicina2 },
  { name: "Cafetería Civil-Arqui", image: civilArqui },
  { name: "Cafetería Ingeniería Química", image: ingenieriaQuimica },
];

const Home = () => {
  const [cafeteriaDestacada, setCafeteriaDestacada] = useState(cafeterias[0]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const random = Math.floor(Math.random() * cafeterias.length);
      setCafeteriaDestacada(cafeterias[random]);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ 
      background: "linear-gradient(to bottom, #4b3423, #5c4430)", 
      minHeight: "100vh", 
      color: "white", 
      paddingTop: "6rem" 
    }}>
      <Header />

      {/* Cafetería destacada */}
      <div style={{
        background: "linear-gradient(to bottom, #8a745d, #a08a72)",
        margin: "2rem auto",
        borderRadius: "1rem",
        maxWidth: "800px",
        padding: "1.5rem",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Cafetería Destacada 📸</h2>
        <img
          src={cafeteriaDestacada.image}
          alt={cafeteriaDestacada.name}
          style={{ marginTop: "1rem", width: "100%", height: "300px", objectFit: "cover", borderRadius: "1rem" }}
        />
        <p style={{ marginTop: "1rem", fontSize: "1.25rem" }}>{cafeteriaDestacada.name}</p>
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
              background="#8a745d"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;