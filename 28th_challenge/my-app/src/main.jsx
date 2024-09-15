import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { UserProvider } from './context/UserContrxt';

import './styles/global.css';
import './styles/new.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
