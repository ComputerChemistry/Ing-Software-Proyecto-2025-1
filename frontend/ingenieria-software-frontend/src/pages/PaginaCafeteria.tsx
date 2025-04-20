// src/pages/PaginaCafeteria.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PaginaCafeteria: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // obtienes el id desde la URL

  return (
    <div className="text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Cafetería: {id}</h1>
      <p className="text-lg">
        Aquí iría la información detallada sobre la cafetería con id <strong>{id}</strong>.
      </p>
    </div>
  );
};

export default PaginaCafeteria;
