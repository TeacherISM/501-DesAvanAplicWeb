import { Link } from 'react-router-dom';

const ActividadMileStone: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Menú</h1>
      <Link to="/actividad1">
        <button className="bg-blue-600 text-white px-6 py-3 rounded">Clase 1</button>
      </Link>
      <br />
      <Link to="/actividad2">
        <button className="bg-blue-600 text-white px-6 py-3 rounded">Clase 2</button>
      </Link>
      <br />
      <Link to="/actividad3">
        <button className="bg-blue-600 text-white px-6 py-3 rounded">Clase 3</button>
      </Link>
    </div>
  );
};

export default ActividadMileStone;
