function CafeCard({ nombre, ubicacion, platillos }) {
    return (
      <div className="bg-gray-800 text-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-bold">{nombre}</h2>
        <p className="text-sm text-gray-300">📍 {ubicacion}</p>
        <ul className="mt-2 list-disc list-inside">
          {platillos.map((p, i) => (
            <li key={i}>{p.nombre} — ${p.precio}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CafeCard;
  