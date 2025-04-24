//import Login from './Login.jsx';
import CafeCardGlass from "./components/CafeCardGlass";

const cafeteriasFake = [
  {
    nombre: "Cafetería de Ciencias",
    ubicacion: "Edificio 5C",
    platillos: [
      { nombre: "Burrito de frijol", precio: 25 },
      { nombre: "Torta de pierna", precio: 45 },
    ],
  },
  {
    nombre: "La Poderosa",
    ubicacion: "Cerca de biblioteca",
    platillos: [
      { nombre: "Quesadilla", precio: 20 },
      { nombre: "Soda", precio: 15 },
    ],
  },
];

function App() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Cafeterías UNISON 🍔</h1>
      {cafeteriasFake.map((cafe, i) => (
        <CafeCardGlass
          key={i}
          nombre={cafe.nombre}
          ubicacion={cafe.ubicacion}
          platillos={cafe.platillos}
        />
      ))}
    </div>
  );
}

export default App;
