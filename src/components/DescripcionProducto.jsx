import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css';


export const DescripcionProducto = (producto) => {
  return (
    <div>



    <Container fluid>
      <Row >
        <Col xs={6} className='mb-4'><img className='img' src="https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb6dc54e1/products/NI_DH2987-001/NI_DH2987-001-1.JPG" width={400} alt="" /></Col>
        <Col className='m-4'><h2 style={{color:"blue"}}>holaa</h2>
        <hr />
        <p>Importante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina</p>
        </Col>
      </Row>
      <Row>
        <Col className='ms-2'><h3>Precio:</h3></Col>
        <Col><h3>Talles:</h3></Col>
        <Col><h3>Colores:</h3></Col>
      </Row>
    </Container>







    </div>
  )
}
