// src/components/CafeCard.jsx
import React, { useState } from "react";

const CafeCard = ({ name, image }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "1rem",
        padding: "1rem",
        width: "250px",
        textAlign: "center",
        boxShadow: hover 
          ? "0 8px 20px rgba(0,0,0,0.3)" 
          : "0 4px 10px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer",
        color: "white",
      }}
      className="cafeteria-card"
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "0.75rem",
          marginBottom: "0.75rem",
        }}
      />
      <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>{name}</p>
      <p style={{
        fontSize: "0.9rem",
        marginTop: "0.5rem",
        color: "#60a5fa", // azul tenue para subtítulo
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.3rem"
      }}>
        <span style={{ fontSize: "1.2rem" }}>Presione para ver el menú...</span>
      </p>
    </div>
  );
};

export default CafeCard;
