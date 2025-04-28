import React from "react";

const CafeCard = ({ name, image }) => {
  return (
    <div style={{
      background: "#8a745d",
      borderRadius: "1rem",
      overflow: "hidden",
      width: "250px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s, box-shadow 0.3s"
    }}
    className="card"
    >
      <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{name}</h3>
        <button style={{
          marginTop: "0.5rem",
          backgroundColor: "#e2a660",
          color: "#4b3423",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          fontWeight: "600",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}>
          Ver más ➡️
        </button>
      </div>
    </div>
  );
};

export default CafeCard;
