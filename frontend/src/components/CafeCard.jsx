import React from "react";

const CafeCard = ({ name, image, background }) => {
  return (
    <div style={{
      background: background || "#8a745d",
      borderRadius: "1rem",
      padding: "1rem",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
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
        color: "#f5c16c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.3rem"
      }}>
        Presione para ver más <span style={{ fontSize: "1.2rem" }}>☕</span>
      </p>
    </div>
  );
};

export default CafeCard;
