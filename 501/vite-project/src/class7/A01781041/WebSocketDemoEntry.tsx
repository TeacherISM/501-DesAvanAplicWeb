import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WebSocketDemo from './WebSocketDemo'

createRoot(document.getElementById('websocket-demo-root')!).render(
  <StrictMode>
    <WebSocketDemo />
  </StrictMode>,
)