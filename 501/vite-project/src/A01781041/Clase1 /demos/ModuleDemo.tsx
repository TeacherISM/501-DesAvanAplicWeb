// src/A01781041/Clase1/demos/ModuleDemo.tsx
import React, { useState } from 'react';

// Import methods from both modules to demonstrate different import styles
// Import individual named exports
import { add, multiply } from './utils/mathUtils';

// Import default export
import formatCurrency from './utils/formatUtils';

// Import both default and named exports from the same module
import mathUtils, { subtract, calculateArea } from './utils/mathUtils';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import formatDefault, { formatDate, formatPercent } from './utils/formatUtils';

const ModuleDemo: React.FC = () => {
  const [num1, setNum1] = useState<number>(10);
  const [num2, setNum2] = useState<number>(5);
  const [radius, setRadius] = useState<number>(3);
  const [selectedExample, setSelectedExample] = useState<string>('basic');

  // Compute values based on the current inputs
  const addResult = add(num1, num2);
  const subtractResult = subtract(num1, num2);
  const multiplyResult = multiply(num1, num2);
  const divideResult = mathUtils.divide(num1, num2);
  const areaResult = calculateArea(radius);
  const today = new Date();
  const percentage = 75;

  // Display code snippets and their results based on the selected example
  const getExampleCode = () => {
    switch (selectedExample) {
      case 'basic': {
        return `// Import individual named exports
import { add, multiply } from './utils/mathUtils';

// Using the imported functions
const sum = add(${num1}, ${num2});       // ${addResult}
const product = multiply(${num1}, ${num2}); // ${multiplyResult}`;
      }
      case 'default': {
        return `// Import default export
import formatCurrency from './utils/formatUtils';

// Using the imported function
const price = formatCurrency(${num1 * num2}); // ${formatCurrency(num1 * num2)}`;
      }
      case 'mixed': {
        return `// Import both default and named exports from the same module
import mathUtils, { subtract, calculateArea } from './utils/mathUtils';
import formatDefault, { formatDate, formatPercent } from './utils/formatUtils';

// Using named exports
const difference = subtract(${num1}, ${num2});     // ${subtractResult}
const area = calculateArea(${radius});  // ${areaResult.toFixed(2)}

// Using default export through the imported variable
const quotient = mathUtils.divide(${num1}, ${num2});   // ${divideResult}

// Using functions from formatUtils
const today = new Date();
const dateStr = formatDate(today);      // ${formatDate(today)}
const percentStr = formatPercent(${percentage});  // ${formatPercent(percentage)}`;
      }
      default:
        return '';
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '8px', border: '1px solid #d0d7de' }}>
      <h3 style={{ color: '#1a365d', marginBottom: '12px' }}>ES6 Modules Demo</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#2d3748', fontSize: '16px' }}>
          This demo shows how to use ES6 modules to organize code into separate files,
          and how to import functionality using different import styles.
        </p>
        
        <div style={{ marginBottom: '24px', backgroundColor: '#fff', padding: '20px', borderRadius: '6px', border: '1px solid #d0d7de' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '15px', flexWrap: 'wrap' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#2d3748', fontWeight: '500' }}>Number 1:</label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                style={{ 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #cbd5e0',
                  width: '120px',
                  fontSize: '15px',
                  color: '#cbd5e0'
                }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#2d3748', fontWeight: '500' }}>Number 2:</label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                style={{ 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #cbd5e0',
                  width: '120px',
                  fontSize: '15px',
                  color: '#cbd5e0'
                }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#2d3748', fontWeight: '500' }}>Radius:</label>
              <input
                type="number"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                style={{ 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #cbd5e0',
                  width: '120px',
                  fontSize: '15px',
                  color: '#cbd5e0'
                }}
              />
            </div>
          </div>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#2d3748', fontWeight: '500' }}>Select Import Example:</label>
          <select
            value={selectedExample}
            onChange={(e) => setSelectedExample(e.target.value)}
            style={{ 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #cbd5e0',
              width: '100%',
              marginBottom: '15px',
              fontSize: '15px',
              color: '#2d3748',
              backgroundColor: 'white'
            }}
          >
            <option value="basic">Named Exports</option>
            <option value="default">Default Export</option>
            <option value="mixed">Mixed Exports (Default + Named)</option>
          </select>
        </div>
        
        <div style={{ backgroundColor: '#2d3748', color: '#f8f9fa', padding: '15px', borderRadius: '4px', marginBottom: '24px' }}>
          <h4 style={{ color: '#90cdf4', marginTop: '0', marginBottom: '10px' }}>Module Content:</h4>
          <pre style={{ overflow: 'auto', margin: '0', fontSize: '14px', lineHeight: '1.5' }}>
            {selectedExample === 'basic' || selectedExample === 'mixed' ? 
              `// mathUtils.ts

// Named exports
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

// Private function (not exported)
const square = (x: number): number => x * x;

// Helper using private function
export const calculateArea = (radius: number): number => {
  return Math.PI * square(radius);
};

// Default export
export default {
  add, subtract, multiply, divide, calculateArea
};` : 
              `// formatUtils.ts

// Default export
export default function formatCurrency(
  amount: number, 
  currency: string = 'USD'
): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

// Named exports
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US').format(date);
};

export const formatPercent = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 1
  }).format(value / 100);
};`}
          </pre>
        </div>
        
        <div style={{ backgroundColor: '#1a365d', color: '#f8f9fa', padding: '18px', borderRadius: '4px', marginBottom: '24px' }}>
          <h4 style={{ color: '#9ae6b4', marginTop: '0', marginBottom: '10px' }}>Import & Usage Example:</h4>
          <pre style={{ overflow: 'auto', margin: '0', fontSize: '14px', lineHeight: '1.5' }}>
            {getExampleCode()}
          </pre>
        </div>
        
        <div style={{ padding: '18px', backgroundColor: '#ebf8ff', borderRadius: '4px', border: '1px solid #90cdf4' }}>
          <h4 style={{ color: '#2c5282', marginTop: '0', marginBottom: '12px' }}>Why Use Modules?</h4>
          <ul style={{ paddingLeft: '20px', margin: '0', color: '#2d3748' }}>
            <li style={{ marginBottom: '8px' }}>Organize code into logical pieces</li>
            <li style={{ marginBottom: '8px' }}>Avoid polluting the global scope</li>
            <li style={{ marginBottom: '8px' }}>Encapsulate private functionality</li>
            <li style={{ marginBottom: '8px' }}>Enable code reuse across different parts of an application</li>
            <li style={{ marginBottom: '0' }}>Make dependencies explicit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModuleDemo;