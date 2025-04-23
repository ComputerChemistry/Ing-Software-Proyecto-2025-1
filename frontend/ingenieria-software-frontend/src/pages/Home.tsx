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
      horario: '17:35',
    },
   
    {
     id: 'Cafeteria Geologia', 
     nombre: 'Cafeteria Geologia',
     descripcion: 'Al lado del edificio 3V y frente al 3A de Literatura',
     imagen: '',
     horario: '06:00 - 18:00',
    },
    {
     id: 'Cafeteria Artes', 
     nombre: 'Cafeteria Artes',
     descripcion: 'Detras del Edificio 3k3',
     imagen: '',
     horario: '06:00 - 18:00',
    },
     {
     id: 'Cafeteria Educacion', 
     nombre: 'Cafeteria Educacion',
     descripcion: 'Al lado del edificio 3V y frente al 3A de Literatura',
     imagen: 'Educacion1Card.jpeg',
     horario: '06:00 - 18:00',
    },

  ];

  return (
    <>
     <Navbar />
      <div className="absolute inset-0 min-h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 bg-opacity-60 backdrop-blur-2xl flex flex-col items-center justify-center py-10 px-4">
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
                horario={cafeteria.horario}
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
