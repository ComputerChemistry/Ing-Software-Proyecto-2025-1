import React, { useState } from 'react';

// Datos simulados para Facultades y Tienditas (esto podría venir de tu API)
const facultades = [
  { id: 1, nombre: "Facultad Interdisciplinaria de Ciencias Biologicas de Salud" },
  { id: 2, nombre: "Facultad Interdisciplinaria de Ciencias Economicas y Administrativas" },
  { id: 3, nombre: "Facultad Interdisciplinaria de Ciencias Exactas y Naturales" },
  { id: 4, nombre: "Facultad Interdisciplinaria de Ingenieria" },
  { id: 5, nombre: "Facultad Interdisciplinaria de Ciencias Sociales" },
  { id: 6, nombre: "Facultad Interdisciplinaria de Humanidades y Artes" }
];

const tienditas = [
  { id: 1, nombre: "Cafetería Derecho", facultadId: 5 },
  { id: 2, nombre: "Cafetería de Trabajo Social", facultadId: 5 },
  { id: 3, nombre: "Cafetería Educacion", facultadId: 5 },
  { id: 4, nombre: "Cafetería Derecho 2", facultadId: 5 },
  { id: 5, nombre: "Cafetería Historia/Sociologia", facultadId: 5 },
  { id: 6, nombre: "Cafetería Departemento de Ingenieria Quimica", facultadId: 4 },
  { id: 7, nombre: "Cafetería Departemento de Ingenieria Industrial/Civil", facultadId: 4 },
  { id: 8, nombre: "Cafetería Medicina", facultadId: 1 },
  { id: 9, nombre: "Cafetería Matemáticas", facultadId: 3 },
  { id: 10, nombre: "Cafetería Artes", facultadId: 6 },
  { id: 11, nombre: "Cafetería Geología", facultadId: 3 }
];

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-3 transition-all duration-300 ease-in-out">
      <div className="backdrop-blur-xl bg-black/40 border-b-2 border-white/30 shadow-2xl rounded-xl max-w-full mx-auto flex justify-between items-center px-8 py-4 text-white">
        
        {/* Logo en blanco */}
        <div className="text-2xl font-bold text-white">
          CafesUNISON
        </div>
        
        <ul className="hidden md:flex space-x-8 text-sm font-medium relative">
          {/* Menú de Tienditas */}
          <li
            className="relative group"
            onMouseEnter={() => handleDropdownToggle("tienditas")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-gray-300 transition duration-300 ease-in-out">
              Tienditas
            </button>
            {openDropdown === "tienditas" && (
              <ul className="absolute top-full mt-2 left-0 w-60 bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform transition-all duration-300 ease-in-out">
                {tienditas.map((tiendita) => (
                  <li key={tiendita.id}>
                    <a className="block px-4 py-2 hover:bg-gray-700 transition duration-200" href="#">
                      {tiendita.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Menú de Facultades */}
          <li
            className="relative group"
            onMouseEnter={() => handleDropdownToggle("facultades")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-gray-300 transition duration-300 ease-in-out">
              Facultades
            </button>
            {openDropdown === "facultades" && (
              <ul className="absolute top-full mt-2 left-0 w-60 bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform transition-all duration-300 ease-in-out">
                {facultades.map((facultad) => (
                  <li key={facultad.id}>
                    <a className="block px-4 py-2 hover:bg-gray-700 transition duration-200" href="#">
                      {facultad.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Menú de Menus */}
          <li
            className="relative group"
            onMouseEnter={() => handleDropdownToggle("menus")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-gray-300 transition duration-300 ease-in-out">
              Menús
            </button>
            {openDropdown === "menus" && (
              <ul className="absolute top-full mt-2 left-0 w-60 bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform transition-all duration-300 ease-in-out">
                <li>
                  <a className="block px-4 py-2 hover:bg-gray-700 transition" href="#">
                    Menú 1
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 hover:bg-gray-700 transition" href="#">
                    Menú 2
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 hover:bg-gray-700 transition" href="#">
                    Menú 3
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Login y Registrarse */}
        <div className="flex space-x-4">
          <button className="bg-white/90 text-white px-4 py-1 rounded-md hover:bg-white/70 transition text-sm font-medium">
            Login
          </button>
          <button className="bg-transparent border-2 border-white text-white px-4 py-1 rounded-md hover:bg-white/10 transition text-sm font-medium">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
