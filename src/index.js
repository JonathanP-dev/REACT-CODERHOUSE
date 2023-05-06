import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/Cart';
import { FilterProvider } from './contexts/Filters';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
const greeting = "Hola!"
root.render(
  <FilterProvider>
    <CartProvider>
      <App greeting={greeting} />
    </CartProvider>
  </FilterProvider>
);

