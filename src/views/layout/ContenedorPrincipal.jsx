import MenuUsuario from "./menu/MenuUsuario";
import TabMenu from "./contenido/TabMenu";
import "./contenedorPrincipal.css";

function ContenedorPrincipal() {
  return (
    <div className="contenedor">
      <TabMenu /> {/* <- Carpeta contenido */}
      <MenuUsuario /> {/* <- Carpeta menu */}
    </div>
  );
}

export default ContenedorPrincipal;
