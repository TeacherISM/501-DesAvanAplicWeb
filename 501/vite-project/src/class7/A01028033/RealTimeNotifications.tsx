import { useEffect, useRef, useState } from 'react';

const RealTimeNotifications = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socketRef.current = socket;

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => socket.close();
  }, []);

  const handleSend = () => {
    if (socketRef.current?.readyState === WebSocket.OPEN && inputValue.trim()) {
      socketRef.current.send(inputValue);
      setInputValue(''); // limpiar input después de enviar
    }
  };

  return (
    <div>
      <h2>Notifications</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje"
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>

      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeNotifications;
