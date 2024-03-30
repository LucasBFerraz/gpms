import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/login.css'
import App from './App';
import Login from './login.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

reportWebVitals();
