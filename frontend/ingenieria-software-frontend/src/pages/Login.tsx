import React from 'react';
import LoginCard from '../components/LoginCard'; // Asegúrate de que la ruta sea correcta
import BackgroundRotator from '../components/BackgroundRotator'; // Importa el componente BackgroundRotator

const Login: React.FC = () => {
  return (
    <BackgroundRotator>
      <LoginCard /> {/* Renderiza el componente LoginCard dentro del BackgroundRotator */}
    </BackgroundRotator>
  );
};

export default Login;
