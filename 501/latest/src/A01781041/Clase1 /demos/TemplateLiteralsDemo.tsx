// src/A01781041/Clase1/demos/TemplateLiteralsDemo.tsx
import React, { useState } from 'react';

const TemplateLiteralsDemo: React.FC = () => {
  // State for template literal demo inputs
  const [name, setName] = useState<string>("Michael");
  const [course, setCourse] = useState<string>("Advanced Web Development");
  const [score, setScore] = useState<number>(92);
  const [selectedDemo, setSelectedDemo] = useState<string>('basic');
  
  // Generate the template literal examples based on the inputs
  const getTemplateLiteralExample = (): { code: string, result: string } => {
    switch (selectedDemo) {
      case 'basic': {
        const basicCode = `const greeting = \`Hello, \${name}! Welcome to \${course}.\`;`;
        const basicResult = `Hello, ${name}! Welcome to ${course}.`;
        return { code: basicCode, result: basicResult };
      }
      case 'multiline': {
        const multilineCode = `const message = \`
  Dear \${name},
  
  Congratulations on enrolling in \${course}.
  We're excited to have you with us!
  
  Best regards,
  The Course Team
\`;`;
        const multilineResult = `
  Dear ${name},
  
  Congratulations on enrolling in ${course}.
  We're excited to have you with us!
  
  Best regards,
  The Course Team
`;
        return { code: multilineCode, result: multilineResult };
      }
      case 'expression': {
        const expressionCode = `const scoreMessage = \`Your score is \${score}. You \${score >= 90 ? 'passed with excellence' : 'passed'}!\`;`;
        const expressionResult = `Your score is ${score}. You ${score >= 90 ? 'passed with excellence' : 'passed'}!`;
        return { code: expressionCode, result: expressionResult };
      }
      case 'tagged': {
        const taggedCode = `// Tagged template literal
const highlight = (strings, ...values) => {
  return strings.reduce((result, str, i) => {
    const value = i < values.length ? \`<strong>\${values[i]}</strong>\` : '';
    return result + str + value;
  }, '');
};

const taggedResult = highlight\`Student \${name} scored \${score} in \${course}.\`;`;
        
        // Simple implementation of the highlight tagged template function
        const highlight = (strings: TemplateStringsArray, ...values: (string | number)[]) => {
          return strings.reduce((result, str, i) => {
            const value = i < values.length ? `<strong>${values[i]}</strong>` : '';
            return result + str + value;
          }, '');
        };
        
        const taggedResult = highlight`Student ${name} scored ${score} in ${course}.`;
        return { code: taggedCode, result: taggedResult };
      }
      default:
        return { code: '', result: '' };
    }
  };
  
  const { code, result } = getTemplateLiteralExample();
  
  // Helper function to safely render HTML (for the tagged template example)
  const renderHTML = (html: string) => {
    return { __html: html };
  };
  
  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h3>Template Literals Demo</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <p>This demo shows different ways to use template literals in JavaScript.</p>
        
        <div style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ 
                padding: '8px', 
                borderRadius: '4px', 
                border: '1px solid #ddd',
                width: '100%'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Course Name:</label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              style={{ 
                padding: '8px', 
                borderRadius: '4px', 
                border: '1px solid #ddd',
                width: '100%'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Score (0-100):</label>
            <input
              type="number"
              min="0"
              max="100"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              style={{ 
                padding: '8px', 
                borderRadius: '4px', 
                border: '1px solid #ddd',
                width: '100%'
              }}
            />
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Select Example:</label>
          <select
            value={selectedDemo}
            onChange={(e) => setSelectedDemo(e.target.value)}
            style={{ 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid #ddd',
              width: '100%',
              marginBottom: '15px'
            }}
          >
            <option value="basic">Basic Template Literal</option>
            <option value="multiline">Multiline Template</option>
            <option value="expression">Expression in Template</option>
            <option value="tagged">Tagged Template Literal</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h4>Code:</h4>
          <pre style={{ 
            backgroundColor: '#eee', 
            padding: '10px', 
            borderRadius: '4px',
            overflow: 'auto'
          }}>
            {code}
          </pre>
        </div>
        
        <div>
          <h4>Result:</h4>
          <div style={{ 
            backgroundColor: '#e3f2fd', 
            padding: '15px', 
            borderRadius: '4px',
            whiteSpace: 'pre-wrap'
          }}>
            {selectedDemo === 'tagged' ? (
              <p dangerouslySetInnerHTML={renderHTML(result)} />
            ) : (
              <p>{result}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateLiteralsDemo;