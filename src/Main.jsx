import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContenedorPrincipal from "./views/layout/ContenedorPrincipal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContenedorPrincipal />
    </BrowserRouter>
  </React.StrictMode>
);
