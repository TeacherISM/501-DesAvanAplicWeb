import React, { useEffect, useRef, useState } from 'react';

const Class7Example: React.FC = () => {
  // State to hold received messages and user input
  const [notifications, setNotifications] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  // useRef to persist WebSocket connection across renders
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Establish WebSocket connection when component mounts
    ws.current = new WebSocket('ws://localhost:8080');

    // Handle incoming messages from the server
    ws.current.onmessage = async (event: MessageEvent) => {
      const data = event.data;

      // Convert Blob messages to string (for browser compatibility)
      if (data instanceof Blob) {
        const text = await data.text();
        setNotifications((prev) => [...prev, text]);
      } else {
        setNotifications((prev) => [...prev, data]);
      }
    };

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      ws.current?.close();
    };
  }, []);

  // Send the message to the server if WebSocket is open
  const handleSend = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(inputMessage);
      setInputMessage('');
    } else {
      console.warn('WebSocket not connected');
    }
  };

  return (
    <div>
      <h2>Real-Time Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>

      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Class7Example;