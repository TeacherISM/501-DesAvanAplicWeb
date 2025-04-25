const BackToMenu: React.FC = () => {
  return (
    <a href="new_home.html">
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#f2004477',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Menú
      </button>
    </a>
  );
};

export default BackToMenu;
