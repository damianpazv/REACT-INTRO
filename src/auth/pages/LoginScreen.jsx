import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import pruebaApi from '../../api/prueba';


export const LoginScreen = () => {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const navigate= useNavigate();


  const handleLogin = async(e) =>
  {
e.preventDefault() ;


if(email.trim()===""|| password.trim()==="")
{
   Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'Todos los campos son obligatorios',
       
     })
}




    


try {

  const respo=await pruebaApi.get("/admin/usuarios");
  const usuariosdb= (respo.data.usuarios);
  
  let usuariomail=  usuariosdb.find((usuario)=>usuario.email===email);
  
  //console.log(usuariomail);
  
   if(!usuariomail)
{
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'alguno de los datos ingresados es incorrecto',

})
}

else{


  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Usuario logueado correctamente',
    showConfirmButton: false,
    timer: 1500
  })


  const resp= await pruebaApi.post("/auth/login",{email,password});
  console.log(resp);
  localStorage.setItem("token",resp.data.token);
}




}

catch(error){
console.log(error);

}




 // setTimeout(() => {
 //   navigate("/");
 // }, 2000);


  }

   return (
  
<Form className='m-4' onSubmit={handleLogin}>


     <Form.Group className="mb-3" controlId="email">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
     </Form.Group>

     <Form.Group className="mb-3" controlId="contrasena">
       <Form.Label>Contraseña</Form.Label>
       <Form.Control type="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)} />
     </Form.Group>
 
     <Button variant="primary" type="submit">
       Ingresar
     </Button>
   </Form>





 )
}
