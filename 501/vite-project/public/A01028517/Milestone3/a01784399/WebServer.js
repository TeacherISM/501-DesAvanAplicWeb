// server.mjs o server.js con "type": "module"
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    // reenviar a todos los clientes conectados
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        client.send(data);
      }
    });
  });

  ws.send('Welcome to WebSocket Server!');
});
