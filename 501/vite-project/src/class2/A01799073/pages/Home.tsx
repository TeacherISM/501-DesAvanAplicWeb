import * as React from 'react';
import BackToMenu from '../../../components/BackMenu';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>¡Felicidades, se ha completado el proceso exitosamente!</h1>
      <h2>Buenas noches :D</h2>
      <BackToMenu/>
    </div>
  );
};

export default Home;