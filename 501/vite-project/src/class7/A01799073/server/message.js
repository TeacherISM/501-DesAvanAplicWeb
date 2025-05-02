const wss = require('./server_pruebas');

const sendApprovalNotification = (employeeId, requestId) => {
  const message = JSON.stringify({
    type: 'approval',
    employeeId,
    requestId,
    message: 'Your travel request has been approved.',
  });

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

module.exports = { sendApprovalNotification };