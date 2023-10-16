import { Layout } from "antd";
import Navbar from "./Navbar";
import Rutas from "../../Rutas";
import "./layout.css"

const { Header, Content } = Layout;

const ContenedorPrincipal = () => (
  <Layout>
    <Header className="navbar_contenedor">
      <Navbar />
    </Header>
    <Content className="contenido_rutas">
      <Rutas />
    </Content>
  </Layout>
);
export default ContenedorPrincipal;
