// src/pages/Registro.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Registro = () => {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombreUsuario || !contrasena) {
      setMensaje("Todos los campos son obligatorios.");
      return;
    }

    try {
      const respuesta = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre_usuario: nombreUsuario,
          contrasena: contrasena
        })
      });

      if (respuesta.ok) {
        const data = await respuesta.json();
        setMensaje("Registro exitoso. Ya puedes iniciar sesión.");
        setNombreUsuario("");
        setContrasena("");
      } else {
        const errorData = await respuesta.json();
        setMensaje(errorData.mensaje || "Error al registrar.");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      setMensaje("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: "100vw",
      minHeight: "100vh",
      background: "linear-gradient(-45deg, #161b33, #1f2457, #2a3558)",
      backgroundSize: "100% 100%",
      color: "white",
      paddingTop: "3.2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box"
    }}>
      <Header />

      <main style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        paddingTop: "8rem"
      }}>
        <h1 style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          Crear una cuenta nueva
        </h1>

        <div style={{
          backgroundColor: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(8px)",
          padding: "2rem",
          borderRadius: "1rem",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
        }}>
          <form onSubmit={handleSubmit}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Nombre de usuario
            </label>
            <input
              type="text"
              placeholder="usuario123"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              style={inputStyle}
            />

            <label style={{ display: "block", margin: "1rem 0 0.5rem", fontWeight: "bold" }}>
              Contraseña
            </label>
            <input
              type={mostrarContrasena ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              style={inputStyle}
            />

            <div style={{ marginTop: "0.5rem", textAlign: "left" }}>
              <label style={{ fontSize: "0.85rem" }}>
                <input
                  type="checkbox"
                  checked={mostrarContrasena}
                  onChange={() => setMostrarContrasena(!mostrarContrasena)}
                  style={{ marginRight: "0.5rem" }}
                />
                Mostrar contraseña
              </label>
            </div>

            <button type="submit" style={buttonStyle}>
              Registrarse
            </button>

            {mensaje && (
              <p style={{ marginTop: "1rem", color: "lightgreen", textAlign: "center" }}>
                {mensaje}
              </p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  marginBottom: "0.5rem"
};

const buttonStyle = {
  width: "100%",
  marginTop: "1.5rem",
  padding: "0.75rem",
  backgroundColor: "#4b4e91",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  borderRadius: "0.5rem",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s ease"
};

export default Registro;
