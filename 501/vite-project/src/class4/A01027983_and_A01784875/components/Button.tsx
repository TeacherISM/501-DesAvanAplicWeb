const Button = ({ label, onClick }) => {
    return (
      <button onClick={onClick} className="custom-btn">
        {label}
      </button>
    );
  };
  export default Button;
  