/** @jsxImportSource react */
export default function ArrowExample() {
    const greet = ({ name, age }: { name: string; age: number }) =>
      `Hello, ${name}! You are ${age} years old.`;
  
    const handleClick = () => {
      const user = { name: "A01028796", age: 20 };
      alert(greet(user));
    };
  
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>Arrow Functions</h1>
        <p>
        Las Arrow Functions permiten escribir funciones de forma más breve y 
        mantienen el valor de <code>this</code> según el contexto donde fueron definidas.
        </p>
        <button onClick={handleClick} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Run greet()
        </button>
        <p></p>
        <button
        onClick={() => (window.location.href = '../../../public/A01028796/menu.html')}
        style={{
        marginTop: "2rem",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        backgroundColor: "#e5e7eb",
        border: "1px solid #d1d5db",
        borderRadius: "4px",
        cursor: "pointer",
        }}
        >
        Volver al menú
        </button>
      </div>
    );
  }