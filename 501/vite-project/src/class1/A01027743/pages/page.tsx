import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Activity1 from './class1'

createRoot(document.getElementById('class1')!).render(
    <StrictMode>
        <Activity1 />
    </StrictMode>,
)
