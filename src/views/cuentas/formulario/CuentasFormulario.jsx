import BotonVolver from "../../../utils/botones/BotonVolver";
import { Button, Form, Input, Select } from "antd";

function CuentasFormulario() {
  return (
    <>
      <h1>Agregar cuenta</h1>
      <Form
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          label="Nombre"
          name="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Descripción" name="Descripcion">
          <Input />
        </Form.Item>

        <Form.Item label="Monto" name="Monto">
          <Input />
        </Form.Item>

        <Form.Item label="Tipo de cuenta">
          <Select>
            <Select.Option value="demo1">Demo1</Select.Option>
            <Select.Option value="demo2">Demo2</Select.Option>
            <Select.Option value="demo3">Demo3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Aceptar
          </Button>
        </Form.Item>
      </Form>
      <BotonVolver />
    </>
  );
}

export default CuentasFormulario;

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function Registro() {
//   const [validated, setValidated] = useState(false);
//   const [opciones, setOpciones] = useState([]); // Estado para almacenar las opciones del select

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   const useEffect(() => {
//     Realiza una solicitud a la API para obtener los datos
//     fetch('http://localhost:8000/cuentas/tipo/list/')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(response.json())
//         Actualiza el estado con las opciones obtenidas de la API
//         setOpciones(data);
//       })
//       .catch((error) => {
//         console.error('Error al obtener datos de la API:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1> Registrar Cuentas </h1>
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-2">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>Nombre *</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Nombre"
//             defaultValue=" "
//           />
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Descripción </Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Descripción"
//             defaultValue=" "
//           />
//         </Form.Group>
//       </Row>
//       <Row className="mb-2">
//         <Form.Group as={Col} md="4" controlId="validationCustom03">
//           <Form.Label>Monto Actual * </Form.Label>
//           <Form.Control type="number" placeholder="Monto actual" required />
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom05">
//         <Form.Label>Tipo de Cuenta * </Form.Label>
//          <Form.Select>

//          </Form.Select>

//         </Form.Group>
//       </Row>
//       {/* <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group> */}
//       <Button type="submit">Submit form</Button>
//     </Form>
//     </div>
//   );
// }

// export default Registro;
