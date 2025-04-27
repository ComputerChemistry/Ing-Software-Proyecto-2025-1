// src/components/CafeCard.jsx
import React from "react";

const CafeCard = ({ name, image, background }) => {
  return (
    <div
      style={{
        backgroundColor: background || "#8a745d", // Color café claro por defecto
        borderRadius: "1rem",
        padding: "1rem",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "0.5rem",
        }}
      />
      <h3 style={{ marginTop: "0.75rem", fontSize: "1.2rem", fontWeight: "bold" }}>{name}</h3>
      <button
        style={{
          marginTop: "0.75rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#4b3423",
          color: "white",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Ver más
      </button>
    </div>
  );
};

export default CafeCard;
