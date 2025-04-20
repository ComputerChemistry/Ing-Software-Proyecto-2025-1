import React, { useState, FormEvent } from 'react';

const LoginCard: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert('Login exitoso');
      } else {
        setError(data.error || 'Credenciales inválidas');
      }
    } catch (err) {
      setError('Error de conexión. Intente nuevamente');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br animate-fadeInZoom from-white-600 via-white-600 flex items-center justify-center px-4 py-12">
      <div className="backdrop-blur-md w-full bg-black/40 border border-white/40 shadow-2xl rounded-2xl p-8 w-full max-w-md text-white relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="cafeteria-card"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>

        <div className="relative">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-wide">Bienvenido</h2>
          <p className="text-white/70 text-center mb-6">Ingresa tus credenciales para continuar</p>

          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 mb-6">
              <p className="text-red-200 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm font-medium text-white/80 pl-1">
                Usuario
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-200"
                  placeholder="Ingresa tu nombre de usuario"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-white/80 pl-1">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-200"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-sm text-white/80 hover:text-white transition duration-200">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white font-semibold tracking-wide transition duration-300 shadow-lg shadow-violet-700/30 relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Procesando...
                </span>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-white/70">
            <p>
              ¿No tienes una cuenta?{' '}
              <a href="#" className="text-white hover:underline">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
