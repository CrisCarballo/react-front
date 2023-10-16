import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";
import CuentasLista from "./lista/CuentasLista";

function CuentasIndex() {

  const navigate = useNavigate();

  const handleClickAgregarCuenta = () => {
    navigate("/cuentas-form")
  };

  return (
    <>
      <h1>Cuentas Activas</h1>
      <CuentasLista />
      <Space
        direction="vertical"
        style={{
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Button type="primary" block onClick={handleClickAgregarCuenta}>
          Agregar cuenta
        </Button>
      </Space>
    </>
  );
}

export default CuentasIndex;
