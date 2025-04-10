// src/class1/ES6Features.tsx
import React, { useState } from 'react';

// Import functionality from separate modules
import { arrowExample } from './es6/ArrowFunctions';
import { destructuringExample } from './es6/Destructuring';
import { templateLiteralExample } from './es6/TemplateLiterals';
import { ModuleExample } from './es6/ModuleExample';

const ES6Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('arrow');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'arrow':
        return (
          <div className="feature-content">
            <h3>Arrow Functions</h3>
            <p> Las Arrow functions proveen una manera concisa de syntax vinculación léxica de este. 
            </p>
            
            <div className="code-example">
              <pre>
{`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// With 'this' context
const counter = {
  count: 0,
  increment: function() {
    // Arrow function preserves 'this'
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};`}
              </pre>
            </div>
            
            <div className="example-result">
              <h4>Result:</h4>
              <button onClick={arrowExample.run}>Run Example</button>
              <div>{arrowExample.result}</div>
            </div>
          </div>
        );
        
      case 'destructuring':
        return (
          <div className="feature-content">
            <h3>Destructuring</h3>
            <p>Destructuring allows extracting values from objects and arrays easily.</p>
            
            <div className="code-example">
              <pre>
{`// Object destructuring
const person = { 
  name: 'Michael', 
  id: 'A01781041', 
  role: 'Student' 
};
const { name, id } = person;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;

// Nested destructuring
const student = {
  info: { 
    name: 'Michael',
    contact: { email: 'michael@example.com' }
  },
  scores: [95, 88, 92]
};
const { info: { name, contact: { email } }, scores: [firstScore] } = student;`}
              </pre>
            </div>
            
            <div className="example-result">
              <h4>Result:</h4>
              <button onClick={destructuringExample.run}>Run Example</button>
              <div>{destructuringExample.result}</div>
            </div>
          </div>
        );
        
      case 'template':
        return (
          <div className="feature-content">
            <h3>Template Literals</h3>
            <p>Template literals allow embedding expressions and multiline strings.</p>
            
            <div className="code-example">
              <pre>
{`// String concatenation (old way)
const name = 'Michael';
const id = 'A01781041';
const greeting = 'Hello ' + name + ', your ID is ' + id;

// Template literals (new way)
const betterGreeting = \`Hello \${name}, your ID is \${id}\`;

// Multiline string
const multiline = \`
  This is a multiline string.
  It preserves line breaks.
  No need for \\n anymore!
\`;`}
              </pre>
            </div>
            
            <div className="example-result">
              <h4>Result:</h4>
              <button onClick={templateLiteralExample.run}>Run Example</button>
              <div>{templateLiteralExample.result}</div>
            </div>
          </div>
        );
        
      case 'modules':
        return <ModuleExample />;
        
      default:
        return <p>Select a feature to view its examples</p>;
    }
  };
  
  return (
    <div className="es6-features">
      <h2>ES6+ Features</h2>
      
      <div className="feature-tabs">
        <button 
          className={`tab-btn ${activeTab === 'arrow' ? 'active' : ''}`}
          onClick={() => setActiveTab('arrow')}
        >
          Arrow Functions
        </button>
        <button 
          className={`tab-btn ${activeTab === 'destructuring' ? 'active' : ''}`}
          onClick={() => setActiveTab('destructuring')}
        >
          Destructuring
        </button>
        <button 
          className={`tab-btn ${activeTab === 'template' ? 'active' : ''}`}
          onClick={() => setActiveTab('template')}
        >
          Template Literals
        </button>
        <button 
          className={`tab-btn ${activeTab === 'modules' ? 'active' : ''}`}
          onClick={() => setActiveTab('modules')}
        >
          Modules
        </button>
      </div>
      
      <div className="feature-content-container">
        {renderContent()}
      </div>
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .es6-features {
          padding: 20px;
        }
        
        .feature-tabs {
          display: flex;
          border-bottom: 1px solid #ddd;
          margin-bottom: 20px;
        }
        
        .tab-btn {
          padding: 10px 20px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        
        .tab-btn:hover {
          opacity: 1;
        }
        
        .tab-btn.active {
          opacity: 1;
          font-weight: bold;
          border-bottom: 3px solid #3498db;
        }
        
        .feature-content-container {
          min-height: 400px;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
          color: #333;
        }
        
        .code-example {
          background-color: #f1f1f1;
          padding: 15px;
          border-radius: 5px;
          margin: 15px 0;
          overflow-x: auto;
        }
        
        pre {
          margin: 0;
          font-family: monospace;
          color: #333;
        }
        
        .example-result {
          margin-top: 20px;
          padding: 15px;
          background-color: #e8f4fe;
          border-radius: 5px;
          color: #333;
        }
        
        button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default ES6Features;