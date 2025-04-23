import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import LoginCard from './components/LoginCard'; 
import Navbar from './components/Navbar';
import BackgroundRotator from './components/BackgroundRotator';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* El BackgroundRotator envuelve todo el contenido */}
      <BackgroundRotator>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 space-y-6">
          
	  {/*Barra Principal */}
	  <Navbar />
          
          {/* LoginCard */}
          <LoginCard />
          
          {/* Logos de enlaces */}
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.unison.mx/" target="_blank">
              <img src="/EscudoUnison.png" className="w-24 h-24 object-contain" alt="Escudo Unison" />
            </a>
            <a href="https://cc.unison.mx/" target="_blank">
              <img src="/LCCLogo.png" className="w-24 h-24 object-contain" alt="LCC logo" />
            </a>
          </div>

          {/* Texto debajo de los logos */}
          <p className="read-the-docs text-white/80">
            Haz click en los logos para más información
          </p>
        </div>
      </BackgroundRotator>
    </>
  );
}

export default App;
