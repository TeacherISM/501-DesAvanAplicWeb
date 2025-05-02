import React, { useEffect, useState } from 'react';

interface NotificationMessage {
  type: string;
  employeeId?: string;
  requestId?: string;
  message: string;
}

const HandleMessage: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event: MessageEvent) => {
      const message = JSON.parse(event.data) as NotificationMessage;

      if (message.type === 'approval') {
        setNotifications((prevNotifications: string[]) => [
          ...prevNotifications,
          message.message,
        ]);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default HandleMessage;


