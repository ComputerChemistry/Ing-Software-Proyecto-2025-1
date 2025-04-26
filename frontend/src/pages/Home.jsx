import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* NAVBAR FIJO ARRIBA - Siempre visible en la parte superior */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        {/* Contenedor principal del navbar (relative para usar hijos absolute) */}
        <div className="relative max-w-7xl mx-auto px-6 py-4">

          {/* LOGO - Posicionado a la izquierda con absolute */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2">
            <span className="text-2xl font-bold text-white whitespace-nowrap">
              🍔 Cafeterías UNISON
            </span>
          </div>

          {/* BOTONES CENTRALES - Están centrados en el navbar */}
          <div className="flex justify-center gap-4">
            {/* Botón: Cafeterías */}
            <button className="text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
              Cafeterías
            </button>

            {/* Botón: Facultad */}
            <button className="text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
              Facultad
            </button>
          </div>

          {/* BOTONES DERECHA - Posicionados en la esquina superior derecha */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2 flex gap-3">
            {/* Botón: Login */}
            <button className="text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Login
            </button>

            {/* Botón: Registro */}
            <button className="text-white px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition">
              Registro
            </button>
          </div>
        </div>
      </nav>

      {/* ESPACIO para que el contenido no quede oculto por el navbar */}
      <div className="pt-28 px-6">
        {/* SECCIÓN DE CAFETERÍA DESTACADA */}
        <section className="mb-8">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Cafetería Destacada 🍽️</h2>

            {/* Imagen decorativa */}
            <img
              src="https://via.placeholder.com/600x200"
              alt="Foto de cafetería"
              className="w-full rounded-lg object-cover"
            />

            <p className="text-sm mt-3 text-gray-300">
              Nombre de una cafetería random con su foto
            </p>
          </div>
        </section>

        {/* SECCIÓN DE CAFETERÍAS EN CARDS HORIZONTALES */}
        <section>
          <h3 className="text-xl font-bold mb-4">Cafeterías</h3>

          {/* Scroll horizontal con tarjetas */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="min-w-[250px] bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg"
              >
                <img
                  src={`https://via.placeholder.com/250x150?text=Cafetería+${i + 1}`}
                  alt={`Cafetería ${i + 1}`}
                  className="rounded mb-2"
                />
                <p className="text-lg font-medium">Cafetería {i + 1}</p>
                <button className="mt-2 text-sm text-blue-400 hover:underline">
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;


