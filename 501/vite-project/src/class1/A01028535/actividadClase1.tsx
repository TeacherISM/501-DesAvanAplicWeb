import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActividadClase1: React.FC = () => {
  const navigate = useNavigate(); 

  const handleBackToMenu = (): void => {
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Clase 1 - Fetch API</h1>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Conceptos clave:</h2>
          <p className="text-lg text-gray-600 mt-4">
            En esta clase, refrescamos los conocimientos de las características avanzadas de JavaScript,
            como funciones de flecha, destructuración y módulos.
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Temas a repasar:</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 mt-4">
            <li>Funciones de flecha (Arrow functions)</li>
            <li>Desestructuración (Destructuring)</li>
            <li>Módulos (Modules)</li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleBackToMenu}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Regresar al Menú
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActividadClase1;
