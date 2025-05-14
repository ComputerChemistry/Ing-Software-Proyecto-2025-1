// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import CafeCard from "../components/CafeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Derecho1 from "/Derecho1Card.jpeg";
import TrabajoSocial from "/TrabajoSocial1Card.jpeg";
import Educacion from "/Eduacion1Card.jpeg";
import Derecho2 from "/Derecho2Card.jpeg";
import Medicina1 from "/Medicina1Card.jpeg";
import Medicina2 from "/Medicina2Card.jpeg";
import CivilMinas from "/IngenieriaCivil1Card.jpeg";
import IngenieriaQuimica from "/IngQuimica1Card.jpeg";
import Geologia from "/Cafeteria-Geologia1Card.jpeg";
import Matematicas from "/Matematicas1Card.png";
import Artes from "/Artes1Card.png";

const cafeterias = [
  { name: "Cafetería Derecho", image: Derecho1, path: "/cafeterias/cafeteria-derecho" },
  { name: "Cafetería Trabajo Social", image: TrabajoSocial, path: "/cafeterias/cafeteria-de-trabajo-social" },
  { name: "Cafetería Educación", image: Educacion, path: "/cafeterias/cafeteria-educacion" },
  { name: "Cafetería Psicología/Comunicación", image: Derecho2, path: "/cafeterias/cafeteria-historia/sociologia" },
  { name: "Cafetería Medicina", image: Medicina1, path: "/cafeterias/cafetería-medicina" },
  { name: "Segunda Cafetería Medicina", image: Medicina2, path: "/cafeterias/cafeteria-medicina-2" },
  { name: "Cafetería Civil-Minas", image: CivilMinas, path: "/cafeterias/cafeteria-departemento-de-ingenieria-industrial/civil" },
  { name: "Cafetería Ingeniería Química", image: IngenieriaQuimica, path: "/cafeterias/cafeteria-departemento-de-ingenieria-quimica" },
  { name: "Cafetería Matematicas", image: Matematicas, path: "/cafeterias/cafetería-matemáticas"},
  { name: "Cafeteria Geologia", image: Geologia, path: "/cafeterias/cafetería-geología"},
  { name: "Cafeteria Artes", image: Artes, path: "/cafeterias/cafetería-artes"},
];

const Home = () => {
  const [cafeteriaDestacada, setCafeteriaDestacada] = useState(cafeterias[0]);
  const [hover, setHover] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  
  const siguienteCafeteria = () => {
    const index = cafeterias.indexOf(cafeteriaDestacada);
    setCafeteriaDestacada(cafeterias[(index + 1) % cafeterias.length]);
    setAutoplay(false); 
  };
  
  const anteriorCafeteria = () => {
    const index = cafeterias.indexOf(cafeteriaDestacada);
    setCafeteriaDestacada(cafeterias[(index - 1 + cafeterias.length) % cafeterias.length]);
    setAutoplay(false); 
  };
  
  useEffect(() => {
    let intervalo;
    if (autoplay) {
      intervalo = setInterval(() => {
        const index = cafeterias.indexOf(cafeteriaDestacada);
        setCafeteriaDestacada(cafeterias[(index + 1) % cafeterias.length]);
      }, 5000); 
    }
    return () => clearInterval(intervalo);
  }, [cafeteriaDestacada, autoplay]);

 
  useEffect(() => {
 
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100%';
    document.body.style.overflowX = 'hidden';
    
 
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.width = '100%';
    
    return () => {
 
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.width = '';
      document.body.style.overflowX = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.width = '';
    };
  }, []);


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
    
    {/* Hero Section */}
    <div style={{
        width: "100%",
        padding: "4rem 2rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        boxSizing: "border-box" 
      }}>
        {/* Efecto de ruido sutil */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')",
          opacity: 0.4,
          pointerEvents: "none",
          zIndex: 0
        }} />

        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
          textAlign: "center",
          letterSpacing: "0.5px",
          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          position: "relative",
          zIndex: 1
        }}>
          El Búho Tragón
        </h1>
        <p style={{
          fontSize: "1.25rem",
          maxWidth: "800px",
          textAlign: "center",
          marginBottom: "3rem",
          color: "rgba(255,255,255,0.85)",
          lineHeight: "1.6",
          position: "relative",
          zIndex: 1
        }}>
          Descubre las mejores cafeterías universitarias para disfrutar de comida deliciosa entre clases
        </p>
      </div>
      
      {/* Cafetería destacada */}
      <div 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          boxShadow: hover 
		   ? "0 15px 30px rgba(0, 0, 0, 0.3), 0 0 30px rgba(67, 97, 238, 0.15)"
		   : "0 8px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem",
          textAlign: "center",
          width: "92%",
          maxWidth: "900px",
          position: "relative",
          transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
          transform: hover ? "translateY(-6px)" : "translateY(0)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          zIndex: 2,
          boxSizing: "border-box" 
        }}
    >
    <h2 style={{ 
      fontSize: "1.8rem", 
      fontWeight: "600", 
      marginBottom: "1.5rem",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }}>
      <span style={{ 
        fontSize: "1.5rem", 
        marginRight: "0.5rem", 
        color: "#f3a952" 
      }}>★</span> 
      Cafetería Destacada
    </h2>
    
    <div style={{ 
      position: "relative", 
      width: "100%", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)",
      boxSizing: "border-box" 
    }}>
      <button 
        onClick={anteriorCafeteria} 
        style={{
          position: "absolute",
          left: "1rem",
          backgroundColor: "rgba(25, 28, 40, 0.7)",
          border: "none",
          borderRadius: "50%",
          width: "46px",
          height: "46px",
          fontSize: "1.2rem",
          color: "white",
          cursor: "pointer",
          backdropFilter: "blur(5px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "transform 0.2s ease, background-color 0.2s ease",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.backgroundColor = "rgba(30, 33, 48, 0.9)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "rgba(25, 28, 40, 0.7)";
        }}
      >
        ◀
      </button>
      
      <div style={{
        width: "100%",
        height: "380px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "0.75rem"
      }}>
        <img
          src={cafeteriaDestacada.image}
          alt={cafeteriaDestacada.name}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hover ? "scale(1.04)" : "scale(1)"
          }}
        />
        {/* Overlay gradiente */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none"
        }} />
      </div>
      
      <button 
        onClick={siguienteCafeteria} 
        style={{
          position: "absolute",
          right: "1rem",
          backgroundColor: "rgba(30, 32, 47, 0.6)",
          border: "none",
          borderRadius: "50%",
          width: "46px",
          height: "46px",
          fontSize: "1.2rem",
          color: "white",
          cursor: "pointer",
          backdropFilter: "blur(5px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "transform 0.2s ease, background-color 0.2s ease",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.backgroundColor = "rgba(30, 33, 48, 0.9)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "rgba(25, 28, 40, 0.7)";
        }}
      >
        ▶
      </button>
    </div>
    
    <div style={{
      marginTop: "1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem"
    }}>
      <h3 style={{ 
        fontSize: "1.5rem", 
        fontWeight: "600",
        color: "#ffffff"
      }}>
        {cafeteriaDestacada.name}
      </h3>
      <div style={{
        display: "flex",
        gap: "0.25rem",
        marginTop: "0.25rem"
      }}>
        {cafeterias.map((_, index) => (
          <div 
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: cafeterias[index] === cafeteriaDestacada 
			     ? "#4361ee" 
			     : "rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease"
            }}
          />
        ))}
      </div>
    </div>
    </div>
    
    {/* Cards de cafeterías */}
    <div style={{ 
      padding: "4rem 2rem", 
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      boxSizing: "border-box" 
    }}>
      <h2 style={{ 
        fontSize: "1.8rem", 
        fontWeight: "600", 
        marginBottom: "2rem", 
        textAlign: "center",
        position: "relative",
        display: "inline-block",
        left: "50%",
        transform: "translateX(-50%)"
      }}>
        <span style={{ position: "relative" }}>
          Todas nuestras cafeterías
          <span style={{ 
            position: "absolute", 
            bottom: "-6px", 
            left: "25%", 
            width: "50%", 
            height: "3px", 
            background: "#4361ee", 
            borderRadius: "2px" 
          }}></span>
        </span>
      </h2>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "1.5rem", 
        width: "100%",
        justifyContent: "center"
      }}>
        {cafeterias.map((cafeteria, index) => (
          <CafeCard
            key={index}
            name={cafeteria.name}
            image={cafeteria.image}
            background="rgba(30, 32, 47, 0.6)"
	    path={cafeteria.path}
          />
        ))}
      </div>
    </div>
    
    <Footer />
    
    {/* Estilos CSS globales para la animación del fondo */}
    <style jsx global>{`
        @keyframes backgroundAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html, body, #root, #__next {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;
