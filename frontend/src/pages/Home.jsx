import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* NAVBAR ACTUALIZADA */}
      <nav className="bg-gray-800 px-8 py-4 shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 flex-wrap md:flex-nowrap">
    {/* Logo */}
    <div className="text-2xl font-bold text-white whitespace-nowrap">
      🍔 Cafeterías UNISON
    </div>

    {/* Menú central */}
    <div className="flex flex-wrap gap-3 justify-center">
      <button className="text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200 shadow">
        Cafeterías
      </button>
      <button className="text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200 shadow">
        Facultad
      </button>
    </div>

    {/* Login / Registro */}
    <div className="flex flex-wrap gap-3 justify-end">
      <button className="text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 shadow">
        Login
      </button>
      <button className="text-white px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition duration-200 shadow">
        Registro
      </button>
    </div>
  </div>
</nav>



      {/* BANNER O CAFETERÍA RANDOM */}
      <section className="p-6">
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
      <section className="p-6">
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
        </div> {/* Cierra el flex */}
      </section> {/* Cierra la sección */}
    </div> /* Cierra todo */
  );
}

export default Home;
