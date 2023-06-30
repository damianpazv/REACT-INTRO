import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
export const RegisterScreen = () => {
  
   const [nombre, setNombre] = useState("");
   const [edad, setEdad] = useState("");
   const [email, setEmail] = useState("");
   const [contrasena, setContrasena] = useState("");
   const [confirmContrasena, setConfirmContrasena] = useState("");

   const emailRegex= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   const isvalidEmail=emailRegex.test(email);

   const navigate= useNavigate();

   const handleSubmit = (e) =>
   {
e.preventDefault() ;
if(nombre===""|| edad===""|| email===""|| contrasena===""|| confirmContrasena==="")
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        
      })
}
else if(edad<18)
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'el usuario debe ser mayor a 18 años',
        
      })
}
else if(nombre.length<3)
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'el nombre debe tener mas de 3 caracteres',
        
      })
}
else if(!isvalidEmail)
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'debe ser un email valido',
        
      })
}
else if(contrasena.length<5)
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La contraseña debe tener mas de 5 caracteres',
        
      })
}
else if(contrasena!=confirmContrasena)
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas deben ser iguales',
        
      })
}
else{
     
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Usuario registrado correctamente',
    showConfirmButton: false,
    timer: 1500
  })
  setTimeout(() => {
    navigate("/");
  }, 2000);
}

   }
    return (
   
<Form className='m-4' onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" onChange={(e)=> setNombre(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="edad">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" placeholder="Edad" onChange={(e)=> setEdad(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contrasena">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={(e)=> setContrasena(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmarContrasena">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={(e)=> setConfirmContrasena(e.target.value)}/>
      </Form.Group>

  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>





  )
}
