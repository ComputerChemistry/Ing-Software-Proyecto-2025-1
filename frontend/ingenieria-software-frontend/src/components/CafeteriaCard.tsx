import React from 'react';
import { Link } from 'react-router-dom';

interface CafeteriaCardProps {
  id: string;
  nombre: string;
  descripcion: string;
  imagen?: string; // Propiedad opcional para la imagen
}

const CafeteriaCard: React.FC<CafeteriaCardProps> = ({ id, nombre, descripcion, imagen }) => {
  return (
    <Link to={`/cafeteria/${id}`} className="w-full max-w-md">
      <div className="bg-white/10 hover:bg-white/20 transition-colors duration-300 border border-white/30 rounded-2xl shadow-lg p-6 w-full backdrop-blur-md cursor-pointer">
        <div className="flex flex-col items-center text-center">
          {/* Verificamos si la imagen existe antes de mostrarla */}
          {imagen && (
            <img
              src={imagen}
              alt={`Imagen de ${nombre}`}
              className="w-32 h-32 object-cover rounded-md mb-4 border border-white/40 shadow-md"
            />
          )}
          <h2 className="text-xl font-semibold text-white mb-2">{nombre}</h2>
          <p className="text-sm text-white/80">{descripcion}</p>
        </div>
      </div>
    </Link>
  );
};

export default CafeteriaCard;
