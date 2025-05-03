import React, { useEffect, useState, useRef } from 'react';

const RealTimeNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onopen = (event: Event) => {
      console.log('WebSocket connection established', event);
    };

    ws.current.onmessage = async (event: MessageEvent) => {
      let message: string = '';

      // *** More robust data handling ***
      if (typeof event.data === 'string') {
        message = event.data;
      } else if (event.data instanceof ArrayBuffer) {
        try {
          const decoder = new TextDecoder('utf-8');
          message = decoder.decode(event.data);
        } catch (error) {
          console.error('Error decoding ArrayBuffer:', error);
          message = 'Error decoding message';
        }
      } else if (event.data instanceof Blob) {
        try {
          message = await new Response(event.data).text();
        } catch (error) {
          console.error('Error reading Blob as text:', error);
          message = 'Error reading message from Blob';
        }
      } else {
        console.warn('Received unexpected data type:', event.data);
        message = `Received unexpected data type: ${typeof event.data}`;
      }

      if (message) {
         setNotifications((prevNotifications) => [...prevNotifications, `Received: ${message}`]);
      }
    };

    ws.current.onerror = (event: Event) => {
      console.error('WebSocket error:', event);
    };

    ws.current.onclose = (event: CloseEvent) => {
      console.log('WebSocket connection closed', event);
    };

    return () => {
      if (ws.current) {
        console.log('Closing WebSocket connection');
        ws.current.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(messageInput);
      setNotifications((prevNotifications) => [...prevNotifications, `Sent: ${messageInput}`]);
      setMessageInput('');
    } else {
      console.warn('WebSocket connection is not open.');
    }
  };

  return (
    <div>
      <h2>Real-Time Notifications</h2>

      <div>
        <input
          type="text"
          value={messageInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessageInput(e.target.value)}
          placeholder="Enter message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeNotifications;
