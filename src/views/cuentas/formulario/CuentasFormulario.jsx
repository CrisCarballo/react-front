import BotonVolver from "../../../utils/botones/BotonVolver";

function CuentasFormulario() {
  return (
    <>
        
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
