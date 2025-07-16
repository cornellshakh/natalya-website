import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import './index.css';
import { registerSW } from './lib/serviceWorker.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);

// Register service worker for PWA functionality
if (import.meta.env.PROD) {
  registerSW();
}
