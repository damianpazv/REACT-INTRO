import React, { useState } from 'react'
import pruebaApi from '../../api/prueba';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export const AdminScreen = () => {

    const [cargarUsuarios, setcargarUsuarios] = useState([]);
    const [cargarProductos, setcargarProductos] = useState([]);

    const cargarUsersDB= async () =>
    {

        try{
            const resp=await pruebaApi.get("/admin/usuarios");
            setcargarUsuarios(resp.data.usuarios);

        }

        catch(error)
        {
        console.log(error);
        }
    }
    
    useEffect(() => {
   cargarUsersDB();
   cargarProductsDB();
    }, []);
    


    const cargarProductsDB= async () =>
    {

        try{
            const resp=await pruebaApi.get("/admin/productos");
            setcargarProductos(resp.data.productos);

        }

        catch(error)
        {
        console.log(error);
        }
    }
    
  



  return (
    <>

<h2 className='m-3 text-center'>USUARIOS</h2>

<Table striped bordered hover className='m-3'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
{cargarUsuarios.map((user) =>{
return(

    <tr key={user._id}>
    <td>{user._id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.role}</td>
  </tr>
)

})}
    </tbody>
    </Table>


    <h2 className='text-center'>PRODUCTOS</h2>

<Table striped bordered hover className='m-3'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
{cargarProductos.map((product) =>{
return(

    <tr key={product._id}>
    <td>{product._id}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.description}</td>
  </tr>
)

})}
    </tbody>
    </Table>




    </>
  )
}
