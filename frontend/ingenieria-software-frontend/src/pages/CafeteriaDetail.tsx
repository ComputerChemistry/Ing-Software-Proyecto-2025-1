import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface MenuItem {
  id: number;
  nombre: string;
  precio: number;
}

interface Cafeteria {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  menu: MenuItem[];
}

const CafeteriaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cafeteria, setCafeteria] = useState<Cafeteria | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCafeteriaData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/Tienditas/${id}`);
        setCafeteria(response.data);
      } catch (error) {
        console.error('Error fetching cafeteria data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCafeteriaData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!cafeteria) {
    return <div>Cafetería no encontrada</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">{cafeteria.nombre}</h1>
      <img src={cafeteria.imagen} alt={cafeteria.nombre} className="w-80 h-80 object-cover rounded-lg mb-4" />
      <p className="text-xl text-center mb-6">{cafeteria.descripcion}</p>
      
      <h2 className="text-2xl font-semibold mb-4">Menú</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {cafeteria.menu.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300"
          >
            <h3 className="text-lg font-medium">{item.nombre}</h3>
            <p className="text-sm text-gray-700">Precio: ${item.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeteriaDetail;
