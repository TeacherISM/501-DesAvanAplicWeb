import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import TravelRequestForm from './TravelRequestForm'
import ExpenseForm from './ExpenseForm'

function App() {
  const [selectedForm, setSelectedForm] = useState<'travel' | 'expense'>('expense')

  return (
    <div>
      <nav>
        <button
          onClick={() => setSelectedForm('travel')}
          style={{
            fontWeight: selectedForm === 'travel' ? 'bold' : 'normal',
            marginRight: 8,
          }}
        >
          Travel Request Form
        </button>
        <button
          onClick={() => setSelectedForm('expense')}
          style={{ fontWeight: selectedForm === 'expense' ? 'bold' : 'normal' }}
        >
          Expense Form
        </button>
      </nav>

      <main style={{ marginTop: 20 }}>
        {selectedForm === 'travel' && <TravelRequestForm />}
        {selectedForm === 'expense' && <ExpenseForm />}
      </main>
      <a href='/A01027920/Home.html' className='buttonlink'>Regresar a menu</a>
    </div>
  )
}

createRoot(document.getElementById('login-root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
