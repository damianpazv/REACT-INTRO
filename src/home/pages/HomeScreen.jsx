import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const HomeScreen = () => {

  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState("")
  const [imagen, setImagen] = useState("")
  const [productos, setproductos] = useState([])

  const submitForm = (e) => {
e.preventDefault();

const nuevoProducto={
  nombre:nombre,
  precio:precio,
  imagen:imagen
}
setproductos([...productos,nuevoProducto]);

setNombre("")
setPrecio("")
setImagen("")

  }

 



  return (
    <div>

<form onSubmit={submitForm}>

<label htmlFor="">Nombre</label>
<input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre} autoFocus/>

<label htmlFor="">precio</label>
<input type="number" onChange={(e)=>setPrecio(e.target.value)} value={precio}/>

<label htmlFor="">imagen</label>
<input type="url" onChange={(e)=>setImagen(e.target.value)} value={imagen}/>

<Button variant="primary" type="submit">
        Cargar producto
      </Button>

</form>

<h2>productos cargados</h2>

<div className='container'>

  <div className='row'>
  {productos.map((producto)=>{

return(
  <div className='col-6'>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producto.imagen}/>
  <Card.Body>
    <Card.Title>{producto.nombre}</Card.Title>
    <Card.Text>
      {producto.precio}
    </Card.Text>
    <Button variant="primary">comprar</Button>
  </Card.Body>
</Card>



  </div>

)

  })}

  </div>

 


</div>

    </div>
    
  )
}
