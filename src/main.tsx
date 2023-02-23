import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Styles } from './components/styles/Global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Styles />
    <App />
  </React.StrictMode>
);
