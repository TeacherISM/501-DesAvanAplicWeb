import BackToMenu from '../../class3/A01799073/components/BackMenu';
import React, { useEffect, useState } from 'react';

const Class7 = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("✅ Connected to WebSocket server");
    };

    ws.onmessage = async (event) => {
      try {
        const text = await event.data.text();
        const data = JSON.parse(text);
        setNotifications((prev) => [...prev, data.message]);
      } catch (err) {
        console.error("❌ Error parsing WebSocket message:", err, event.data);
      }
    };

    ws.onclose = () => {
      console.log("🔌 WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
      <h2>🔔 Notificaciones en tiempo real</h2>

      {notifications.length === 0 && (
        <>
          <p>🛠️ Aún no hay mensajes. Para probar:</p>
          <ol style={{ textAlign: "left", maxWidth: "900px", margin: "1rem auto", background: "#333", padding: "1rem", borderRadius: "10px" }}>
            <li>!No olvides prender el server!!</li>
            <li>Presiona <strong>F12</strong> o clic derecho → Inspeccionar → pestaña <strong>Consola</strong>.</li>

            <li>Pega y ejecuta este código: o inserta uno similiar</li>
            <pre style={{ background: "#111", color: "#0f0", padding: "1rem", borderRadius: "6px", fontSize: "0.9rem" }}>
                {`const ws = new WebSocket("ws://localhost:8080");
                ws.onopen = () => ws.send(JSON.stringify({
                type: "approval",
                message: "Tu solicitud fue aprobada por el gerente."
                }));`}
            </pre>
            <li>¡Verás el mensaje aquí mismo!</li>
          </ol>
        </>
      )}

      <ul style={{ marginTop: "2rem", listStyle: "none", padding: 0 }}>
        {notifications.map((msg, idx) => (
          <li key={idx} style={{ margin: "1rem 0", fontSize: "1.2rem" }}>🟢 {msg}</li>
        ))}
      </ul>
      <BackToMenu/>
    </div>
  );
};

export default Class7;