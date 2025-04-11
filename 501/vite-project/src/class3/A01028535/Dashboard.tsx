import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

interface DashboardProps {
  role: string;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const navigate = useNavigate(); // Usamos el hook useNavigate para redirigir

  const handleBackToMenu = (): void => {
    navigate('/'); // Redirige al menú (ruta raíz)
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">
        Welcome, {role}! You have {role === 'admin' ? 'full' : role === 'manager' ? 'limited' : 'basic'} access.
      </p>
      <button onClick={handleBackToMenu} className="bg-blue-600 text-white px-6 py-3 rounded mt-4">
        Regresar al Menú
      </button>
    </div>
  );
};

export default Dashboard;