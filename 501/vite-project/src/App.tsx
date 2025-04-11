import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importamos Router y Routes
import ActividadMileStone from './Milestone_1/A01028535/actividadMileStone'; // Menú
import ActividadClase1 from './class1/A01028535/actividadClase1'; // Clase 1
import ActividadClase2 from './class2/A01028535/actividadClase2'; // Clase 2
import ActividadClase3 from './class3/A01028535/actividadClase3'; // Clase 3
import './App.css'; // Asegúrate de tener los estilos necesarios si usas CSS

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal para el menú */}
        <Route path="/" element={<ActividadMileStone />} />
        
        {/* Rutas para las clases específicas */}
        <Route path="/actividad1" element={<ActividadClase1 />} />
        <Route path="/actividad2" element={<ActividadClase2 />} />
        <Route path="/actividad3" element={<ActividadClase3 />} />
      </Routes>
    </Router>
  );
};

export default App;
