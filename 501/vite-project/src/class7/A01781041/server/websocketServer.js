const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Store connected clients
const clients = new Set();

// Keep track of user colors for consistent identification
const userColors = {};
const colors = [
  '#2ecc71', // Green
  '#3498db', // Blue
  '#9b59b6', // Purple
  '#e74c3c', // Red
  '#f1c40f', // Yellow
  '#1abc9c', // Cyan
  '#d35400', // Orange
];

// Function to assign a random color to a user
function getColor(userId) {
  if (!userColors[userId]) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    userColors[userId] = randomColor;
  }
  return userColors[userId];
}

// Connection event
wss.on('connection', (ws) => {
  console.log('Client connected');
  clients.add(ws);
  
  // Generate a unique ID for this connection
  const userId = Math.random().toString(36).substring(2, 10);
  const userColor = getColor(userId);
  
  // Send welcome message to the new client
  ws.send(JSON.stringify({
    type: 'system',
    message: 'Welcome to the WebSocket Chat! You are now connected.',
    timestamp: Date.now(),
  }));
  
  // Broadcast connection notification to all clients
  broadcastMessage({
    type: 'system',
    message: `A new user has joined the chat.`,
    timestamp: Date.now(),
  });
  
  // Message event
  ws.on('message', (message) => {
    try {
      // Parse the incoming message
      const data = JSON.parse(message.toString());
      
      // Process different message types
      if (data.type === 'chat') {
        // Add user ID, color, and timestamp to the message
        const enhancedMessage = {
          ...data,
          userId,
          color: userColor,
          timestamp: Date.now(),
        };
        
        // Broadcast to all clients
        broadcastMessage(enhancedMessage);
      }
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });
  
  // Close event
  ws.on('close', () => {
    console.log('Client disconnected');
    clients.delete(ws);
    
    // Broadcast disconnection notification
    broadcastMessage({
      type: 'system',
      message: 'A user has left the chat.',
      timestamp: Date.now(),
    });
  });
  
  // Error event
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    clients.delete(ws);
  });
});

// Function to broadcast a message to all connected clients
function broadcastMessage(message) {
  const messageString = JSON.stringify(message);
  
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(messageString);
    }
  });
}

console.log('WebSocket server running on ws://localhost:8080');