import React, { useEffect, useState } from 'react';

const RealTimeNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    setWs(socket);

    socket.onmessage = async (event) => {
      const data = event.data;
    
      if (data instanceof Blob) {
        const text = await data.text(); // Convierte Blob a string
        setNotifications((prev) => [...prev, text]);
      } else {
        setNotifications((prev) => [...prev, String(data)]);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(message); // Envía el mensaje al servidor
      setMessage(''); // Limpia el campo de entrada
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <a href="/">
    <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}>Página Inicial</button>
  </a>
  <a href="/public/A01028517/Milestone3/Milestone3_Menu.html">
    <button style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}>Menú Milestone 3</button>
  </a>
  <h2 style={{ textAlign: 'center', color: '#333' }}>Real-Time Notifications</h2>

  <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
    {notifications.map((notification, index) => (
      <li
        key={index}
        style={{
          backgroundColor: '#f0f0f0',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        {notification}
      </li>
    ))}
  </ul>

  <div style={{ display: 'flex', gap: '10px' }}>
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type a message"
      style={{
        flexGrow: 1,
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '16px',
      }}
    />
    <button
      onClick={sendMessage}
      style={{
        padding: '10px 16px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      Send
    </button>
    
  </div>
  
</div>

  );
};

export default RealTimeNotifications;