# WebSocket Chat Server

This is a simple WebSocket server for the chat application demo.

## Setup and Running

1. Install dependencies:
```
npm install
```

2. Start the server:
```
npm start
```

The server will run on `ws://localhost:8080`.

## Features

- Real-time message broadcasting to all connected clients
- User connection/disconnection notifications
- Consistent user colors for easy identification
- Timestamp for all messages

## Message Format

The server handles JSON messages with the following structure:

```json
{
  "type": "chat",
  "message": "Hello, world!",
  "username": "User123"
}
```

The server will add additional information to outgoing messages:
- userId: A random identifier for the user
- color: A color assigned to the user
- timestamp: Server timestamp when the message was received

## Server Responses

When a client connects, they will receive a welcome message and other clients will be notified about the new connection.

When a client disconnects, the remaining clients will be notified.