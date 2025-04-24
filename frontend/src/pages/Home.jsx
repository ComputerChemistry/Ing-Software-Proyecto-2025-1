import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* NAVBAR FIJO ARRIBA */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white whitespace-nowrap">
            🍔 Cafeterías UNISON
          </div>

          {/* Botones de navegación */}
          <div className="flex gap-4 whitespace-nowrap">
            <button className="text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
              Cafeterías
            </button>
            <button className="text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200">
              Facultad
            </button>
            <button className="text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200">
              Login
            </button>
            <button className="text-white px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition duration-200">
              Registro
            </button>
          </div>
        </div>
      </nav>

      {/* ESPACIO para no tapar el contenido */}
      <div className="pt-28 px-6">

        {/* BANNER O CAFETERÍA RANDOM */}
        <section className="mb-8">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Cafetería Destacada 🍽️</h2>
            <img
              src="https://via.placeholder.com/600x200"
              alt="Foto de cafetería"
              className="w-full rounded-lg object-cover"
            />
            <p className="text-sm mt-3 text-gray-300">Nombre de una cafetería random con su foto</p>
          </div>
        </section>

        {/* CARDS SCROLLABLE */}
        <section>
          <h3 className="text-xl font-bold mb-4">Cafeterías</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="min-w-[250px] bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                <img
                  src={`https://via.placeholder.com/250x150?text=Cafetería+${i + 1}`}
                  alt={`Cafetería ${i + 1}`}
                  className="rounded mb-2"
                />
                <p className="text-lg font-medium">Cafetería {i + 1}</p>
                <button className="mt-2 text-sm text-blue-400 hover:underline">Ver más</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
