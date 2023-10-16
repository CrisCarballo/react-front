import React from 'react';
import ReactDOM from 'react-dom/client';
import Rutas from './Rutas';
import "./main.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rutas /> {/* la ruta principal, osea "/" te lleva al componente <ContenedorPrincipal /> */}
  </React.StrictMode>,
)
