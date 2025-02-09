import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NavigationProvider } from './context/navigation.jsx'

createRoot(document.getElementById('root')).render(
  <NavigationProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NavigationProvider>
)
