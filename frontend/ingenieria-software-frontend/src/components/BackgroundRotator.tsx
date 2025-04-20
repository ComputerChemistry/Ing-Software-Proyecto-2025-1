import { useEffect, useState } from "react";

const BackgroundRotator = ({ children }: { children: React.ReactNode }) => {
  const images = [
    "/IngQuimica1Card.jpeg",
    "/Derecho1Card.jpeg",
    "/Derecho2Card.jpeg",
    "/Educacion1Card.jpeg",
    "/Historia1Card.jpeg",
    "/IngenieriaCivil1Card.jpeg",
    "/TrabajoSocial1Card.jpeg",
    "/Medicina1Card.jpeg",
    "/Medicina2Card.jpeg",
    "/Historia1Page.jpeg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url('${currentImage}')` }}
    >
      {/* Capa de desenfoque */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/40" />
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 space-y-6">
        {children}
      </div>
    </div>
  );
};

export default BackgroundRotator;
