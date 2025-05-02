/** @jsxImportSource react */
interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export default function InputField({ type, placeholder, value, onChange }: InputFieldProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          fontSize: "1rem",
        }}
      />
    );
  }
  