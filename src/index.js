import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
const greeting = "Hola!"
root.render(
  <React.StrictMode>
    <App greeting={greeting} />
  </React.StrictMode>
);

