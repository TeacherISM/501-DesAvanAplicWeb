/** @jsxImportSource react */
interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
  }
  
  export default function Button({ label, type = "button", onClick }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {label}
      </button>
    );
  }
  