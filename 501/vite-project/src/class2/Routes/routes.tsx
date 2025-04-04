import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/log_in'; // Importa tu página de login
import App from '../../App'; // Importa tu componente principal

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;