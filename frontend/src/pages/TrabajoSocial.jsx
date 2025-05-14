// src/pages/TrabajoSocial.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import trabajoSocialImg from "../assets/tienda_trabajo-social.jpg";

const TrabajoSocial = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/Menus/?id_tiendita=2")
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener el menú");
        return response.json();
      })
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar el menú:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "linear-gradient(-45deg, #161b33, #1f2457, #2a3558)",
      backgroundSize: "600% 600%",
      animation: "backgroundAnimation 30s ease infinite",
      color: "white",
      overflowX: "hidden"
    }}>
      <Header />

      <main style={{ flexGrow: 1, padding: "2rem", paddingTop: "7rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}>
          Cafetería Trabajo Social
        </h1>

        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem"
        }}>
          <img
            src={trabajoSocialImg}
            alt="Cafetería Trabajo Social"
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "auto",
              borderRadius: "0.75rem",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
              objectFit: "contain"
            }}
          />
        </div>

        <h2 style={{ fontSize: "1.5rem", textAlign: "center", marginBottom: "1rem" }}>
          Menú
        </h2>
        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: "1rem",
          padding: "1.5rem",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
        }}>
          {loading ? (
            <p style={{ textAlign: "center" }}>Cargando menú...</p>
          ) : menuItems.length === 0 ? (
            <p style={{ textAlign: "center" }}>No hay items en el menú.</p>
          ) : (
            menuItems.map(item => (
              <div
                key={item.id_menu}
                style={{
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                  <span>{item.nombre}</span>
                  <span>${parseFloat(item.precio).toFixed(2)}</span>
                </div>
                {item.descripcion && (
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#ccc" }}>
                    {item.descripcion}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrabajoSocial;
