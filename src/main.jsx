/**
 * @copyright 2025 PRAVIN KUMAR
 * @license Apache-2.0
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/index.css'; /*styles CSS file */

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
