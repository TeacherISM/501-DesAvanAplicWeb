// src/class1/api/ApiExplainer.tsx
import React from 'react';

export const ApiExplainer: React.FC = () => {
  return (
    <div className="api-explainer">
      <h3>Fetching Data with ES6+ Features</h3>
      
      <section className="code-section">
        <h4>1. Basic Fetch with Async/Await</h4>
        <div className="code-block">
          <pre>
{`// Using async/await with fetch
export const fetchUsers = async (): Promise<User[]> => {
  try {
    // Using fetch API with async/await
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    // Parse the JSON response
    const data: User[] = await response.json();
    
    // Return the data
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};`}
          </pre>
        </div>
        <div className="explanation">
          <p>This function demonstrates:</p>
          <ul>
            <li><strong>Arrow functions</strong> with async/await syntax</li>
            <li><strong>Template literals</strong> in the error message</li>
            <li><strong>TypeScript interfaces</strong> for type safety</li>
            <li><strong>Error handling</strong> with try/catch</li>
          </ul>
        </div>
      </section>
      
      <section className="code-section">
        <h4>2. Extracting Specific User Data with Destructuring</h4>
        <div className="code-block">
          <pre>
{`// Function to extract specific user data (using destructuring)
export const extractUserInfo = (user: User) => {
  // Destructure the properties we want
  const { id, name, email, phone, website, company: { name: companyName } } = user;
  
  // Return a new object with just those properties
  return { id, name, email, phone, website, companyName };
};`}
          </pre>
        </div>
        <div className="explanation">
          <p>This function demonstrates:</p>
          <ul>
            <li><strong>Object destructuring</strong> to extract specific properties</li>
            <li><strong>Nested destructuring</strong> to access company.name as companyName</li>
            <li><strong>Object property shorthand</strong> in the returned object</li>
          </ul>
        </div>
      </section>
      
      <section className="code-section">
        <h4>3. Processing User Data with Array Methods</h4>
        <div className="code-block">
          <pre>
{`// Function to process multiple users
export const processUserData = (users: User[]) => {
  // Use map to transform each user
  return users.map(user => {
    // Destructure and process each user
    const { id, name, username, email, address } = user;
    
    // Destructure nested address
    const { city, zipcode } = address;
    
    // Return a transformed object
    return {
      id,
      name,
      username,
      email,
      location: \`\${city}, \${zipcode}\`,
      // Create a display property using template literals
      displayName: \`\${name} (@\${username})\`,
    };
  });
};`}
          </pre>
        </div>
        <div className="explanation">
          <p>This function demonstrates:</p>
          <ul>
            <li><strong>Array.map()</strong> to transform an array of objects</li>
            <li><strong>Multiple levels of destructuring</strong></li>
            <li><strong>Template literals</strong> to create formatted strings</li>
            <li><strong>Object property shorthand</strong></li>
          </ul>
        </div>
      </section>
      
      <section className="code-section">
        <h4>4. Using the Hook Pattern in React Component</h4>
        <div className="code-block">
          <pre>
{`// Inside the UserList component
const UserList: React.FC = () => {
  // State to store users and loading status
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Function to load users
  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // JSX rendering with conditional logic
  return (
    <div className="user-list-container">
      {/* Button to trigger data loading */}
      <button onClick={loadUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>
      
      {/* Conditionally render users or message */}
      {users.length > 0 ? (
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              {/* User card content */}
            </div>
          ))}
        </div>
      ) : (
        <p>Click "Fetch Users" to load data</p>
      )}
    </div>
  );
};`}
          </pre>
        </div>
        <div className="explanation">
          <p>This component demonstrates:</p>
          <ul>
            <li><strong>React Hooks</strong> (useState) for state management</li>
            <li><strong>Async/await</strong> with state updates</li>
            <li><strong>Conditional rendering</strong> based on state</li>
            <li><strong>Array.map()</strong> to render lists of components</li>
            <li><strong>Ternary operators</strong> for conditional logic</li>
          </ul>
        </div>
      </section>
      
      <div className="key-features">
        <h4>Key ES6+ Features Used in this Example:</h4>
        <ol>
          <li><strong>Arrow Functions</strong> - More concise syntax and lexical this binding</li>
          <li><strong>Destructuring</strong> - Extract values from objects and arrays easily</li>
          <li><strong>Template Literals</strong> - String interpolation and multiline strings</li>
          <li><strong>Async/Await</strong> - Cleaner asynchronous code</li>
          <li><strong>Object Property Shorthand</strong> - {`{ name }`} instead of {`{ name: name }`}</li>
          <li><strong>Modern Array Methods</strong> - map, filter, reduce for functional programming</li>
          <li><strong>Default Parameters</strong> - Set default values for function parameters</li>
          <li><strong>Spread/Rest Operators</strong> - Work with arrays and objects more effectively</li>
        </ol>
      </div>
      
      {/* @ts-expect-error - style jsx is not recognized by TypeScript but is valid for this project */}
      <style jsx>{`
        .api-explainer {
          padding: 10px;
        }
        
        h3 {
          color: #2c3e50;
          margin-top: 0;
        }
        
        .code-section {
          margin-bottom: 30px;
        }
        
        h4 {
          color: #3498db;
          margin-bottom: 10px;
        }
        
        .code-block {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #3498db;
          margin-bottom: 15px;
          overflow-x: auto;
          color: #333;
        }
        
        pre {
          margin: 0;
          font-family: monospace;
          font-size: 14px;
          color: #333;
        }
        
        .explanation {
          background-color: #e8f4fe;
          padding: 15px;
          border-radius: 5px;
          color: #333;
        }
        
        .explanation p {
          margin-top: 0;
        }
        
        ul, ol {
          padding-left: 20px;
        }
        
        li {
          margin-bottom: 5px;
        }
        
        .key-features {
          background-color: #eafaf1;
          padding: 15px;
          border-radius: 5px;
          margin-top: 30px;
          color: #333;
        }
        
        .key-features h4 {
          color: #27ae60;
          margin-top: 0;
        }
        
        strong {
          color: #2c3e50;
        }
      `}</style>
    </div>
  );
};