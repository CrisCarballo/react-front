import { useState } from "react";
import { Button, Space } from "antd";
import CuentasFormulario from "./formulario/CuentasFormulario"
import CuentasLista from "./lista/CuentasLista";

function CuentasIndex() {

  const [showCuentasFormulario, setShowCuentasFormulario] = useState(false);

  const handleClickAgregarCuenta = () => {
    setShowCuentasFormulario(true);
  };

  return (
    <div>
      {showCuentasFormulario ? (
        <CuentasFormulario />
      ) : (
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
            <Button
              type="primary"
              block
              onClick={handleClickAgregarCuenta}
            >
              Agregar cuenta
            </Button>
          </Space>
        </>
      )}
    </div>
  );
}

export default CuentasIndex;
