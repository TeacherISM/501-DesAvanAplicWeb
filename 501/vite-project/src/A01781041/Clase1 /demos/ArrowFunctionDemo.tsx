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
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '8px', border: '1px solid #d0d7de' }}>
      <h3 style={{ color: '#1a365d', marginBottom: '12px' }}>Arrow Function Demo</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#2d3748', fontSize: '16px' }}>This demo shows a simple arrow function that adds two numbers.</p>
        <pre style={{ 
          backgroundColor: '#2d3748', 
          color: '#f8f9fa',
          padding: '15px', 
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '14px',
          lineHeight: '1.5'
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
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Calculate
          </button>
        </div>
        
        <p style={{ color: '#2d3748', marginTop: '15px', fontSize: '16px' }}>
          Result: <strong>{result}</strong>
        </p>
        
        <p>
          <small style={{ color: '#4a5568' }}>Check the console to see the logged result</small>
        </p>
      </div>
    </div>
  );
};

export default ArrowFunctionDemo;