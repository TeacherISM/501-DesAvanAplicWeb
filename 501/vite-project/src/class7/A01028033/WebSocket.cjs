const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // 🔔 Broadcast a todos que un usuario se conectó
  const connectMessage = 'Usuario conectado';
  wss.clients.forEach((client) => {
    if (client.readyState === ws.OPEN) {
      client.send(connectMessage);
    }
  });

  ws.on('message', (message) => {
    try {
      console.log(`Received: ${message}`);

      // 🔄 Reenviar el mensaje a todos los clientes
      wss.clients.forEach((client) => {
        if (client.readyState === ws.OPEN) {
          client.send(message.toString()); // por si es un Buffer
        }
      });
    } catch (err) {
      console.error('❌ Error processing message:', err);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('✅ WebSocket server is running on ws://localhost:8080');
