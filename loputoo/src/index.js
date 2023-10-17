import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CartSumContextProvider } from "./store/CartSumContext";
import { AuthContextProvider } from "./store/AuthContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


