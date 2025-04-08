// src/A01781041/Clase1/demos/ArrowFunctionDemo.tsx
import React, { useState } from 'react';

const ArrowFunctionDemo: React.FC = () => {
  const [num1, setNum1] = useState<number>(5);
  const [num2, setNum2] = useState<number>(3);
  const [result, setResult] = useState<number>(0);

  // Traditional function - used in the example display
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function addTraditional(a: number, b: number): number {
    return a + b;
  }

  // Arrow function
  const addArrow = (a: number, b: number): number => a + b;

  // Function with event handling
  const calculateSum = () => {
    const sum = addArrow(num1, num2);
    setResult(sum);
    console.log(`Sum calculated: ${sum}`);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h3>Arrow Function Demo</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <p>This demo shows a simple arrow function that adds two numbers.</p>
        <pre style={{ 
          backgroundColor: '#eee', 
          padding: '10px', 
          borderRadius: '4px',
          overflow: 'auto'
        }}>
          {`// Traditional function
function addTraditional(a: number, b: number): number {
  return a + b;
}

// Arrow function (more concise)
const addArrow = (a: number, b: number): number => a + b;

// With implicit return (single expression)`}
        </pre>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            style={{ width: '60px', padding: '5px' }}
          />
          <span style={{ margin: '5px' }}>+</span>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            style={{ width: '60px', padding: '5px' }}
          />
          <button 
            onClick={calculateSum}
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              padding: '5px 15px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Calculate
          </button>
        </div>
        
        <p>
          Result: <strong>{result}</strong>
        </p>
        
        <p>
          <small>Check the console to see the logged result</small>
        </p>
      </div>
    </div>
  );
};

export default ArrowFunctionDemo;