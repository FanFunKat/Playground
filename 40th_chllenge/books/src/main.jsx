import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BooksContext } from './context/books.jsx'

createRoot(document.getElementById('root')).render(
  <BooksContext.Provider value={5}>
    <StrictMode>
      <App />
    </StrictMode>
  </BooksContext.Provider>,
)
