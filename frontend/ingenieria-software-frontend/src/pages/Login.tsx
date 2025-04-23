import React from 'react';
import LoginCard from '../components/LoginCard';
import BackgroundRotator from '../components/BackgroundRotator'; // Importa el componente BackgroundRotator
import LogoLinks from '../components/LogoLinks';

const Login: React.FC = () => {
  return (
    <BackgroundRotator>
      <LoginCard /> {/* Renderiza el componente LoginCard dentro del BackgroundRotator */}
      <LogoLinks />
    </BackgroundRotator>
    
  );
};

export default Login;
