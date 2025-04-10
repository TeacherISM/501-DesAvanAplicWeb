import { useNavigate } from 'react-router-dom';

const BackToMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/menu')}
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#2130b8',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      Menú
    </button>
  );
};

export default BackToMenu;
