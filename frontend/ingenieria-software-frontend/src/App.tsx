import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginCard from './components/LoginCard'; 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/IngQuimica1Card.jpeg')" }}
      >

        {/* Capa de desenfoque */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 space-y-6">
     

	  <LoginCard />

<div className="flex justify-center gap-4 mb-4">
  <a href="https://www.unison.mx/" target="_blank">
    <img src="/EscudoUnison.png" className="w-24 h-24 object-contain" alt="Vite logo" />
  </a>
  <a href="https://cc.unison.mx/" target="_blank">
    <img src="/LCCLogo.png" className="w-24 h-24 object-contain" alt="LCC logo" />
  </a>
</div>
          <p className="read-the-docs text-white/80">
	  Haz click en los logos para mas informacion
          </p>
        </div>
      </div>
    </>
  )
}

export default App
