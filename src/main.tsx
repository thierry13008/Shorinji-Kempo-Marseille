import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';

// Polyfill process for the browser to prevent crashes when accessing process.env
if (typeof window !== 'undefined' && !window.process) {
  window.process = { env: {} } as any;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
