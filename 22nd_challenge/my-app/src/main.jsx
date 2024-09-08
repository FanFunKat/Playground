import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { AppGrocery } from './components/AppGrocery';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AppGrocery />
  </StrictMode>
);