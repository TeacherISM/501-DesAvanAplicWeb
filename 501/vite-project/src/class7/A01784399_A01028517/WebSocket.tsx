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
    <div>
      <h2>Real-Time Notifications</h2>
      <p>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </p>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default RealTimeNotifications;