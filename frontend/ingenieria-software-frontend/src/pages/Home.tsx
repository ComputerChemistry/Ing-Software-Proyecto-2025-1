import React from 'react';
import CafeteriaCard from '../components/CafeteriaCard';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  // Datos de cafeterías
  const cafeterias = [
    {
      id: 'Cafeteria Derecho 1',
      nombre: 'Cafetería Derecho 1',
      descripcion: '64, Calle de la Sabiduria al Lado del Estacionamiento del Edificio de Derecho',
      imagen: '/Derecho1Card.jpeg',
    },
    {
      id: 'Cafeteria Derecho 2',
      nombre: 'Cafetería Derecho 2',
      descripcion: 'Calle del Conocimiento frente al Edificio de Derecho 10I',
      imagen: '/Derecho2Card.jpeg',
    },
    {
      id: 'Cafeteria Ingenieria Quimica',
      nombre: 'Cafetería Ingeniería Química',
      descripcion: 'Ubicada en el Departamento de Ingeniería Química al Lado de el Edificio 5I',
      imagen: '/IngQuimica1Card.jpeg',
    },
    {
      id: 'Cafeteria Ingenieria Civil/Minas',
      nombre: 'Cafetería Ingeniería Civil/Minas',
      descripcion: 'Avenida Universidad frente al Edificio 5L',
      imagen: '/IngenieriaCivil1Card.jpeg',
    },
    {
      id: 'Cafeteria Departamento de Matematicas',
      nombre: 'Cafetería Matemáticas',
      descripcion: 'Detrás del edificio 3K3 del Departamento de Matemáticas',
      imagen: '/DepartamentoMatematicas.jpg',
    },
    {
      id: 'Cafeteria Historia/Sociologia',
      nombre: 'Cafetería Historia',
      descripcion: 'Detrás del edificio 3K3 del Departamento de Historia/Sociología',
      imagen: '/Historia1Card.jpeg',
    },
    {
      id: 'Cafeteria Trabajo Social',
      nombre: 'Cafetería Trabajo Social',
      descripcion: 'Pasillo Central Departamento de Trabajo Social al lado del Edificio 10C',
      imagen: '/TrabajoSocial1Card.jpeg',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="absolute inset-0 min-h-screen bg-gradient-to-r from-indigo-900 via-gray-900 to-yellow-900 bg-opacity-70 backdrop-blur-sm flex flex-col items-center justify-center py-10 px-4">
        <div className="relative z-10 text-white w-full max-w-6xl">
         
	  <h1 className="text-4xl font-bold text-white mb-8 text-center mt-28">
            Explora Las Cafeterías de la UNISON
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cafeterias.map((cafeteria) => (
              <CafeteriaCard
                key={cafeteria.id}
                id={cafeteria.id}
                nombre={cafeteria.nombre}
                descripcion={cafeteria.descripcion}
                imagen={cafeteria.imagen}
              />
            ))}
          </div>

          <p className="mt-10 text-white/80 text-center">
            Haz clic en cualquier tarjeta para ver más información.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
