import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import pruebaApi from '../../api/prueba';
export const RegisterScreen = () => {
  
   const [name, setName] = useState("");
   const [edad, setEdad] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmContrasena, setConfirmContrasena] = useState("");

   const emailRegex= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   const isvalidEmail=emailRegex.test(email);

   const navigate= useNavigate();

   const handleSubmit = async(e) =>
   {
e.preventDefault() ;


// if(name===""|| edad===""|| email===""|| password===""|| confirmContrasena==="")
// {
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Todos los campos son obligatorios',
        
//       })
// }
// else if(edad<18)
// {
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'el usuario debe ser mayor a 18 años',
        
//       })
// }
// else if(name.length<3)
// {
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'el nombre debe tener mas de 3 caracteres',
        
//       })
// }
// else if(!isvalidEmail)
// {
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'debe ser un email valido',
        
//       })
// }
// else if(password.length<5)
// {
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'La contraseña debe tener mas de 5 caracteres',
        
//       })
// }
// else if(password!=confirmContrasena)
// {
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Las contraseñas deben ser iguales',
        
//       })
// }
// else{
     
// Swal.fire({
//     position: 'center',
//     icon: 'success',
//     title: 'Usuario registrado correctamente',
//     showConfirmButton: false,
//     timer: 1500
//   })

try {
  const resp= await pruebaApi.post("/auth/new",{name,email,password});

}

catch(error){
console.log(error);

}




  // setTimeout(() => {
  //   navigate("/");
  // }, 2000);
}

   //}

    return (
   
<Form className='m-4' onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" onChange={(e)=> setName(e.target.value)} />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="edad">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" placeholder="Edad" onChange={(e)=> setEdad(e.target.value)} />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contrasena">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="confirmarContrasena">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={(e)=> setConfirmContrasena(e.target.value)}/>
      </Form.Group> */}

  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>





  )
}
