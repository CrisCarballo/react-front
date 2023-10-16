import { Route, Routes } from "react-router-dom";
import Bienvenido from "./views/layout/views/Bienvenido";
import PageNotFound from "./views/layout/views/PageNotFound";
import CuentasIndex from "./views/cuentas/CuentasIndex";
import CuentasFormulario from "./views/cuentas/formulario/CuentasFormulario"
import GruposIndex from "./views/grupos/GruposIndex";
import DashboardIndex from "./views/dashboard/DashboardIndex";
import ConfiguracionIndex from "./views/configuracion/configuracionIndex";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Bienvenido />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/cuentas" element={<CuentasIndex />} />
      <Route path="/cuentas-form" element={<CuentasFormulario />} />
      <Route path="/grupos" element={<GruposIndex />} />
      <Route path="/dashboard" element={<DashboardIndex />} />
      <Route path="/configuracion" element={<ConfiguracionIndex />} />
    </Routes>
  );
}

export default Rutas;
