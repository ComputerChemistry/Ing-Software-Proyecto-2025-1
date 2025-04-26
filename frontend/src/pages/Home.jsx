import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-[#4b3423] text-white font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#8a745d] shadow-md z-50">
        <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO + BOTONES CENTRALES */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/logo.png"
                alt="Logo Búho Tragón"
                className="h-20 w-20 object-contain"
              />
              <span className="text-2xl font-bold text-white whitespace-nowrap">
                El Búho Tragón
              </span>
            </div>

            {/* Botones centrales */}
            <div className="flex gap-4">
              <button className="text-white px-4 py-2 bg-black/40 hover:bg-black/60 rounded-lg transition">
                Cafeterías
              </button>
              <button className="text-white px-4 py-2 bg-black/40 hover:bg-black/60 rounded-lg transition">
                Facultad
              </button>
            </div>
          </div>

          {/* Botones derecha */}
          <div className="flex gap-3">
            <button className="text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Login
            </button>
            <button className="text-white px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition">
              Registro
            </button>
          </div>
        </div>
      </nav>

      {/* ESPACIO PARA CONTENIDO */}
      <div className="pt-36 px-6">
        {/* SECCIÓN DESTACADA */}
        <section className="mb-8">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Cafetería Destacada 🍽️</h2>
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

        {/* SECCIÓN DE CARDS */}
        <section>
          <h3 className="text-xl font-bold mb-4">Cafeterías</h3>
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
