import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContenedorPrincipal from "./views/layout/ContenedorPrincipal";
import CuentasIndex from "./views/cuentas/CuentasIndex";
import GruposIndex from "./views/grupos/GruposIndex";
import DashboardIndex from "./views/dashboard/DashboardIndex";
// import UsuariosIndex from "./views/usuarios/UsuariosIndex";
// import Registro from "./views/cuentas/Registro"
// import InicioIndex from "./views/inicio/InicioIndex";
import "./rutas.css";
import CuentasFormulario from "./views/cuentas/formulario/CuentasFormulario";

function Rutas() {
  return (
    <div className="rutas-contenedor">
      <Router>
        <Routes>
          <Route path="/" element={<ContenedorPrincipal />} />
          <Route path="/cuentas" element={<CuentasIndex />} />
          <Route path="/cuentas-formulario" element={<CuentasFormulario />} />
          <Route path="/grupos" element={<GruposIndex />} />
          <Route path="/dashboard" element={<DashboardIndex />} />
          {/* <Route path="/usuarios" element={<UsuariosIndex />} />
        <Route path="/crear-cuentas" element={<Registro />} />
        <Route exact path="/inicio" element={<InicioIndex />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas;
