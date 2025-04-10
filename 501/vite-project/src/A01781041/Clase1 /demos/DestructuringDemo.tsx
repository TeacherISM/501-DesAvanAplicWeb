// src/A01781041/Clase1/demos/DestructuringDemo.tsx
import React, { useState } from 'react';

// Interface for our user
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  address: {
    city: string;
    country: string;
  };
  skills: string[];
}

const DestructuringDemo: React.FC = () => {
  // Sample user data
  const user: User = {
    id: 1,
    name: "Michael Devlyn",
    email: "michael@example.com",
    role: "Student",
    address: {
      city: "Monterrey",
      country: "Mexico"
    },
    skills: ["JavaScript", "React", "TypeScript"]
  };
  
  const [selectedProperty, setSelectedProperty] = useState<string>('');
  const [destructuredValue, setDestructuredValue] = useState<string>('');
  
  const handlePropertySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const property = event.target.value;
    setSelectedProperty(property);
    
    // Apply destructuring based on selection
    if (property) {
      try {
        let result: string;
        
        switch(property) {
          case 'basic': {
            const { name, email } = user;
            result = `Name: ${name}, Email: ${email}`;
            break;
          }
          case 'nested': {
            const { address: { city, country } } = user;
            result = `City: ${city}, Country: ${country}`;
            break;
          }
          case 'renamed': {
            const { name: userName, role: userRole } = user;
            result = `User Name: ${userName}, User Role: ${userRole}`;
            break;
          }
          case 'array': {
            const [firstSkill, secondSkill] = user.skills;
            result = `First Skill: ${firstSkill}, Second Skill: ${secondSkill}`;
            break;
          }
          case 'rest': {
            const { id, ...userInfo } = user;
            result = `ID: ${id}, Other Info: ${JSON.stringify(userInfo)}`;
            break;
          }
          default:
            result = 'Select a destructuring pattern';
        }
        
        setDestructuredValue(result);
        console.log(result);
      } catch (error) {
        setDestructuredValue(`Error: ${error instanceof Error ? error.message : String(error)}`);
      }
    } else {
      setDestructuredValue('');
    }
  };
  
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '8px', border: '1px solid #d0d7de' }}>
      <h3 style={{ color: '#1a365d', marginBottom: '12px' }}>Destructuring Demo</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#2d3748', fontSize: '16px' }}>This demo shows different ways to use object and array destructuring.</p>
        
        <div style={{
          backgroundColor: '#2d3748',
          color: '#f8f9fa',
          padding: '15px',
          borderRadius: '4px',
          marginBottom: '15px'
        }}>
          <p style={{ color: '#90cdf4', marginTop: '0', fontWeight: '600' }}><strong>User Object:</strong></p>
          <pre style={{ overflow: 'auto', margin: '0', fontSize: '14px', lineHeight: '1.5' }}>
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
      
      <div>
        <label htmlFor="destructuring-pattern" style={{ display: 'block', marginBottom: '10px', color: '#2d3748', fontWeight: '500' }}>
          Select Destructuring Pattern:
        </label>
        <select 
          id="destructuring-pattern"
          value={selectedProperty}
          onChange={handlePropertySelect}
          style={{ 
            width: '100%', 
            padding: '10px', 
            marginBottom: '15px',
            borderRadius: '4px',
            border: '1px solid #cbd5e0',
            fontSize: '15px',
            color: '#2d3748',
            backgroundColor: 'white'
          }}
        >
          <option value="">-- Select a pattern --</option>
          <option value="basic">Basic Destructuring: const &#123; name, email &#125; = user</option>
          <option value="nested">Nested Destructuring: const &#123; address: &#123; city, country &#125; &#125; = user</option>
          <option value="renamed">Renamed Properties: const &#123; name: userName, role: userRole &#125; = user</option>
          <option value="array">Array Destructuring: const [firstSkill, secondSkill] = user.skills</option>
          <option value="rest">Rest Operator: const &#123; id, ...userInfo &#125; = user</option>
        </select>
        
        {selectedProperty && (
          <div style={{
            backgroundColor: '#ebf8ff',
            padding: '15px',
            borderRadius: '4px',
            marginTop: '15px',
            border: '1px solid #90cdf4'
          }}>
            <p style={{ color: '#2c5282', fontWeight: '600', marginTop: '0' }}><strong>Result:</strong></p>
            <p style={{ color: '#2d3748', fontSize: '16px' }}>{destructuredValue}</p>
            <p style={{ marginBottom: '0' }}><small style={{ color: '#4a5568' }}>Check the console to see the logged result</small></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestructuringDemo;