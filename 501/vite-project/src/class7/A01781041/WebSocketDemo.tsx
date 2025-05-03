import React, { useState, useEffect, useRef } from 'react';

// Define message types
interface Message {
  type: 'chat' | 'system' | 'status';
  message: string;
  username?: string;
  userId?: string;
  color?: string;
  timestamp: number;
}

// Connection status type
type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error';

const WebSocketDemo: React.FC = () => {
  // State variables
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('disconnected');
  
  // WebSocket reference
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  // Function to connect to WebSocket server
  const connectToServer = () => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      return; // Already connected
    }
    
    setConnectionStatus('connecting');
    
    // Create new WebSocket connection
    const ws = new WebSocket('ws://localhost:8080');
    
    // Connection opened
    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      setConnectionStatus('connected');
      
      // Add local status message
      setMessages(prev => [...prev, {
        type: 'status',
        message: 'Connected to server',
        timestamp: Date.now(),
      }]);
    };
    
    // Connection closed
    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
      setConnectionStatus('disconnected');
      
      // Add local status message
      setMessages(prev => [...prev, {
        type: 'status',
        message: 'Disconnected from server',
        timestamp: Date.now(),
      }]);
      
      // Attempt to reconnect after 3 seconds
      setTimeout(() => {
        if (wsRef.current?.readyState !== WebSocket.OPEN) {
          connectToServer();
        }
      }, 3000);
    };
    
    // Connection error
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setConnectionStatus('error');
      
      // Add local error message
      setMessages(prev => [...prev, {
        type: 'status',
        message: 'Connection error',
        timestamp: Date.now(),
      }]);
    };
    
    // Message received
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages(prev => [...prev, data]);
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };
    
    wsRef.current = ws;
  };
  
  // Connect to server on component mount
  useEffect(() => {
    connectToServer();
    
    // Clean up on unmount
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle sending messages
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || !isUsernameSet) {
      return;
    }
    
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      // Create message object
      const messageObj = {
        type: 'chat',
        message: inputMessage,
        username: username,
      };
      
      // Send message
      wsRef.current.send(JSON.stringify(messageObj));
      
      // Clear input
      setInputMessage('');
    } else {
      // Add local error message
      setMessages(prev => [...prev, {
        type: 'status',
        message: 'Cannot send message: Not connected to server',
        timestamp: Date.now(),
      }]);
      
      // Try to reconnect
      connectToServer();
    }
  };
  
  // Set username
  const handleSetUsername = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username.trim()) {
      setIsUsernameSet(true);
      
      // Add local status message
      setMessages(prev => [...prev, {
        type: 'status',
        message: `You are now chatting as "${username}"`,
        timestamp: Date.now(),
      }]);
    }
  };
  
  // Format timestamp
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div>
      <div className="nav-bar">
        <a href="/A01781041/Home.html" className="back-link">← Back to Menu</a>
      </div>
      
      <div className="websocket-demo-container">
        <h1>WebSocket Chat Demo</h1>
        
        <div className="connection-status">
          <div className={`status-indicator ${connectionStatus}`}></div>
          <span>{connectionStatus === 'connected' ? 'Connected' : 
                 connectionStatus === 'connecting' ? 'Connecting...' :
                 connectionStatus === 'error' ? 'Connection Error' : 'Disconnected'}</span>
          {connectionStatus !== 'connected' && connectionStatus !== 'connecting' && (
            <button onClick={connectToServer} className="reconnect-button">
              Reconnect
            </button>
          )}
        </div>
        
        {!isUsernameSet ? (
          <div className="username-container">
            <p>Enter your username to start chatting:</p>
            <form onSubmit={handleSetUsername} className="username-form">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your username"
                className="username-input"
                required
              />
              <button type="submit" className="username-button">Start Chatting</button>
            </form>
          </div>
        ) : (
          <>
            <div className="messages-container">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`} style={{ 
                  borderLeftColor: msg.type === 'chat' ? msg.color : undefined 
                }}>
                  <div className="message-header">
                    {msg.type === 'chat' && (
                      <span className="username" style={{ color: msg.color }}>
                        {msg.username || 'Anonymous'}
                      </span>
                    )}
                    <span className="timestamp">{formatTime(msg.timestamp)}</span>
                  </div>
                  <div className="message-content">{msg.message}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={sendMessage} className="message-form">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="message-input"
                disabled={connectionStatus !== 'connected'}
              />
              <button 
                type="submit" 
                className="send-button"
                disabled={connectionStatus !== 'connected' || !inputMessage.trim()}
              >
                Send
              </button>
            </form>
          </>
        )}
        
        <div className="websocket-explanation">
          <h2>About WebSockets</h2>
          
          <div className="explanation-grid">
            <div className="explanation-card">
              <h3>What are WebSockets?</h3>
              <p>
                WebSockets provide a persistent connection between client and server, 
                allowing for real-time, bidirectional communication. Unlike HTTP, which 
                is stateless, WebSockets maintain an open connection for faster data transfer.
              </p>
            </div>
            
            <div className="explanation-card">
              <h3>Key Benefits</h3>
              <ul>
                <li>Real-time updates without polling</li>
                <li>Reduced latency compared to HTTP requests</li>
                <li>Bidirectional communication</li>
                <li>Less overhead for frequent small messages</li>
                <li>Ideal for chat, gaming, and live updates</li>
              </ul>
            </div>
          </div>
          
          <div className="explanation-card">
            <h3>How This Demo Works</h3>
            <p>
              This chat application demonstrates WebSockets by:
            </p>
            <ol>
              <li>Establishing a persistent connection to a WebSocket server</li>
              <li>Sending messages as JSON objects through the WebSocket</li>
              <li>Receiving and displaying real-time messages from other users</li>
              <li>Handling connection states (connecting, connected, disconnected)</li>
              <li>Implementing automatic reconnection on disconnection</li>
            </ol>
          </div>
          
          <div className="server-instructions">
            <h3>Running the WebSocket Server</h3>
            <p>
              To use this chat app, you need to run the included WebSocket server:
            </p>
            <ol>
              <li>Navigate to the server directory: <code>cd src/class7/A01781041/server</code></li>
              <li>Install dependencies: <code>npm install</code></li>
              <li>Start the server: <code>npm start</code></li>
            </ol>
            <p>
              The server will run on <code>ws://localhost:8080</code> and handle message broadcasting
              between all connected clients.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .nav-bar {
          padding: 15px;
          background-color: #f8f8f8;
          margin-bottom: 20px;
          border-bottom: 1px solid #ddd;
        }

        .back-link {
          color: #3498db;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
        }

        .back-link:hover {
          text-decoration: underline;
        }
        
        .websocket-demo-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h1 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 20px;
        }
        
        .connection-status {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background-color: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        
        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .connected {
          background-color: #2ecc71;
          box-shadow: 0 0 5px #2ecc71;
        }
        
        .connecting {
          background-color: #f1c40f;
          box-shadow: 0 0 5px #f1c40f;
          animation: pulse 1.5s infinite;
        }
        
        .disconnected {
          background-color: #95a5a6;
        }
        
        .error {
          background-color: #e74c3c;
          box-shadow: 0 0 5px #e74c3c;
        }
        
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        
        .reconnect-button {
          margin-left: auto;
          background-color: #3498db;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .username-container {
          text-align: center;
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        
        .username-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          gap: 10px;
        }
        
        .username-input {
          flex: 1;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .username-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        
        .messages-container {
          height: 400px;
          overflow-y: auto;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 20px;
        }
        
        .message {
          margin-bottom: 15px;
          padding: 10px 15px;
          border-radius: 5px;
          background-color: #f8f9fa;
          border-left: 4px solid transparent;
          max-width: 85%;
        }
        
        .message.chat {
          background-color: #f8f9fa;
        }
        
        .message.system {
          background-color: #eaf2fd;
          border-left-color: #3498db;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          max-width: 100%;
          font-style: italic;
          color: #7f8c8d;
        }
        
        .message.status {
          background-color: #f5f5f5;
          border-left-color: #95a5a6;
          color: #7f8c8d;
          font-style: italic;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          max-width: 100%;
        }
        
        .message-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          font-size: 14px;
        }
        
        .username {
          font-weight: bold;
        }
        
        .timestamp {
          color: #95a5a6;
        }
        
        .message-content {
          word-break: break-word;
        }
        
        .message-form {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }
        
        .message-input {
          flex: 1;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .message-input:disabled {
          background-color: #f5f5f5;
          cursor: not-allowed;
        }
        
        .send-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        
        .send-button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }
        
        .websocket-explanation {
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          margin-top: 40px;
        }
        
        .websocket-explanation h2 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 25px;
        }
        
        .explanation-grid {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
          .explanation-grid {
            flex-direction: column;
          }
        }
        
        .explanation-card {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          margin-bottom: 20px;
        }
        
        .explanation-card h3 {
          color: #3498db;
          margin-top: 0;
          margin-bottom: 15px;
        }
        
        .explanation-card p {
          color: #34495e;
          line-height: 1.5;
        }
        
        .explanation-card ul, .explanation-card ol {
          padding-left: 20px;
          margin-top: 10px;
          color: #34495e;
        }
        
        .explanation-card li {
          margin-bottom: 8px;
          line-height: 1.5;
        }
        
        .server-instructions {
          background-color: #eaf2fd;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }
        
        .server-instructions h3 {
          color: #2c3e50;
          margin-top: 0;
        }
        
        .server-instructions code {
          background-color: #f5f5f5;
          padding: 3px 6px;
          border-radius: 3px;
          font-family: monospace;
          color: #c0392b;
        }
      `}</style>
    </div>
  );
};

export default WebSocketDemo;