import WebSocket, { WebSocketServer } from 'ws';

// Crear el servidor WebSocket
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
  console.log('New client connected');

  ws.on('message', (message: string | Buffer) => {
    const text = message.toString();
    console.log(`Received: ${text}`);

    // Reenviar el mensaje a todos los clientes conectados
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(text);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
