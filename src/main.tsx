import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Polyfill process for the browser to prevent crashes when accessing process.env
if (typeof window !== 'undefined' && !window.process) {
  window.process = { env: {} } as any;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
