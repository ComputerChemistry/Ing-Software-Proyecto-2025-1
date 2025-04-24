function CafeCardGlass({ nombre, ubicacion, platillos }) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-xl border border-white/20 text-white mb-6 transition hover:scale-[1.02] hover:shadow-2xl duration-200">
        <h2 className="text-2xl font-bold mb-1">{nombre}</h2>
        <p className="text-sm text-pink-300 mb-3">📍 {ubicacion}</p>
        <ul className="list-disc list-inside space-y-1">
          {platillos.map((p, i) => (
            <li key={i}>
              <span className="text-white">{p.nombre}</span>{" "}
              <span className="text-gray-400">— ${p.precio}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CafeCardGlass;
  