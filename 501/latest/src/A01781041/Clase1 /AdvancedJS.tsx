// src/class1/AdvancedJS.tsx
import React, { useState } from 'react';
import { UserList } from './api/UserList';
import { ApiExplainer } from './api/ApiExplainer';

const AdvancedJS: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  
  return (
    <div className="advanced-js-container">
      <h2>Advanced JavaScript Practice</h2>
      <p className="description">
        Este ejemplo demuestra el fetching de datos de un mock API usando ES6+ features,
        tambien se incluyen async/await, destructuring, y metodos modernos de arrays. 
      </p>
      
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'demo' ? 'active' : ''}`}
          onClick={() => setActiveTab('demo')}
        >
          Live Demo
        </button>
        <button 
          className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
          onClick={() => setActiveTab('code')}
        >
          Explicacion del codigo. 
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'demo' ? <UserList /> : <ApiExplainer />}
      </div>
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .advanced-js-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h2 {
          color:rgb(61, 133, 204);
          margin-bottom: 10px;
        }
        
        .description {
          color: rgb(186, 203, 220);
          margin-bottom: 30px;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #ddd;
          margin-bottom: 20px;
        }
        
        .tab-button {
          padding: 10px 20px;
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        
        .tab-button:hover {
          opacity: 1;
        }
        
        .tab-button.active {
          opacity: 1;
          font-weight: bold;
          border-bottom: 3px solid #3498db;
        }
        
        .tab-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          min-height: 400px;
        }
      `}</style>
    </div>
  );
};

export default AdvancedJS;