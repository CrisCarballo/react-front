import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function BotonVolver() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button type="primary" onClick={handleGoBack}>
      Volver
    </Button>
  );
}

export default BotonVolver;
