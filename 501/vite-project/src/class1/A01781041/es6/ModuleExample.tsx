// src/class1/A01781041/es6/ModuleExample.tsx
import React from 'react';

// Import functions from MathUtils (this import would normally be from a separate file)
// import { add, subtract, multiply } from './MathUtils';
// import formatCurrency from './formatters';

// Since we can't actually import from separate files in this example,
// let's simulate how modules work

const ModuleExample: React.FC = () => {
  // Simulate MathUtils.ts
  const MathUtilsContent = `
// MathUtils.ts - A module for math operations

// Named exports - Can import individually or all at once
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;

// You can also define private functions (not exported)
const square = (x: number): number => x * x;

// You could export a default if needed
export default {
  add,
  subtract,
  multiply
};
`;

  // Simulate formatters.ts
  const FormattersContent = `
// formatters.ts - A module for formatting values

// Default export - Only one per file
export default function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// Named exports can still exist alongside a default export
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US').format(date);
};
`;

  // Simulate MainApp.ts - Importing from the modules
  const MainAppContent = `
// MainApp.ts - Using the imported modules

// Import specific named exports
import { add, subtract } from './MathUtils';

// Import default export
import formatCurrency from './formatters';

// Import both default and named exports
import MathUtils, { multiply } from './MathUtils';
import formatterDefault, { formatDate } from './formatters';

// Using the imports
const calculateTotal = (price: number, quantity: number): string => {
  const total = multiply(price, quantity);
  return formatCurrency(total);
};

const orderSummary = (): string => {
  const subtotal = add(19.99, 29.99);
  const tax = multiply(subtotal, 0.07);
  const total = add(subtotal, tax);
  
  return \`
    Order placed on \${formatDate(new Date())}
    Subtotal: \${formatCurrency(subtotal)}
    Tax: \${formatCurrency(tax)}
    Total: \${formatCurrency(total)}
  \`;
};
`;

  return (
    <div className="module-example">
      <h3>Modules</h3>
      <p>Modules allow you to organize code into separate files with their own scope, then import and export as needed.</p>
      
      <div className="module-files">
        <div className="module-file">
          <h4>MathUtils.ts</h4>
          <pre>{MathUtilsContent}</pre>
        </div>
        
        <div className="module-file">
          <h4>formatters.ts</h4>
          <pre>{FormattersContent}</pre>
        </div>
        
        <div className="module-file">
          <h4>MainApp.ts</h4>
          <pre>{MainAppContent}</pre>
        </div>
      </div>
      
      <div className="module-explanation">
        <h4>Key Benefits of Modules</h4>
        <ul>
          <li><strong>Organization:</strong> Keep related code together in separate files</li>
          <li><strong>Encapsulation:</strong> Hide implementation details, only expose what's needed</li>
          <li><strong>Reusability:</strong> Import functions across multiple files/projects</li>
          <li><strong>Maintainability:</strong> Easier to understand, debug, and update code</li>
          <li><strong>No Global Scope Pollution:</strong> Variables stay within their module</li>
        </ul>
      </div>
      
      <style jsx>{`
        .module-example {
          padding: 10px;
        }
        
        .module-files {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .module-file {
          background-color: #f8f9fa;
          border-radius: 5px;
          padding: 15px;
          border-left: 4px solid #3498db;
          color: #333;
        }
        
        .module-file h4 {
          margin-top: 0;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        pre {
          background-color: #f1f1f1;
          padding: 10px;
          border-radius: 4px;
          overflow-x: auto;
          font-size: 14px;
          color: #333;
        }
        
        .module-explanation {
          background-color: #e8f4fe;
          padding: 15px;
          border-radius: 5px;
          color: #333;
        }
        
        .module-explanation h4 {
          margin-top: 0;
        }
        
        ul {
          padding-left: 20px;
        }
        
        li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};

export { ModuleExample };
export default ModuleExample;