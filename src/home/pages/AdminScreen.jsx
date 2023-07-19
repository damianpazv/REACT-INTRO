import React, { useState } from 'react'
import pruebaApi from '../../api/prueba';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Footer } from '../../layout/Footer';
import { ModalForm } from '../../components/ModalForm';
import Button from 'react-bootstrap/Button';
import { ModalFormEdit } from '../../components/ModalFormEdit';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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
    
    const [showedit, setShowedit] = useState(false);

    const handleCloseEdit = () => setShowedit(false);
    const handleShowEdit = () => setShowedit(true);

    const  [formDataEdit,setFormDataEdit ]= useState({
        name:"",
        price: "",
        description:"",
    })

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
    
  const eliminarProductsDB = async(id) => {
    try{
      const resp=await pruebaApi.delete(`/admin/eliminar/${id}`);
      console.log(resp);
      
  }

  catch(error)
  {
  console.log(error);
  }
  };


  const handleChangeEdit = (e) => {

    setFormDataEdit({
        ...formDataEdit,
        [e.target.name]: e.target.value,
    });
    
    
    
    
    
    }
    
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        
        const {_id,name,price,description}=formDataEdit
    
        //validaciones....
    
        if(name.trim()===""|| price===""|| description.trim()==="")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
            
          })
    }
    
    else if(price<0)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el precio no puede ser negativo',
            
          })
    }
    
    
        
        EditarProductsDB(_id,name,price,description)
        
        };
    
    const EditarProductsDB= async (_id,name,price,description) =>
    {
    
        try{
            const resp=await pruebaApi.put("/admin/editar",{_id,name,price,description});
            console.log(resp);
    
        }
    
        catch(error)
        {
        console.log(error);
        }
    }

const editarProductoClick = (producto) => {
setShowedit(true);
  setFormDataEdit(producto);

}


  return (
    <>
<div className='container '>

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
          <th>Eliminar</th>
          <th>Editar</th>
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
    <td><Button onClick={()=> eliminarProductsDB(product._id)} variant='danger'>Eliminar</Button ></td>
    <td><Button onClick={()=> editarProductoClick(product)} variant='info'>Editar</Button ></td>
  </tr>
)

})}
    </tbody>
    </Table>

    <ModalForm />

   
    <Modal show={showedit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEdit}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
              maxLength={20}
                type="text"
                
                name='name'
                 value={formDataEdit.name}
                autoFocus
                onChange={handleChangeEdit}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
              
                type="number"
                
                name='price'
                value={formDataEdit.price}
                onChange={handleChangeEdit}
                
              />
            </Form.Group>



            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} 
              name='description' 
              value={formDataEdit.description}
              onChange={handleChangeEdit}
              maxLength={50}
              />
              
            </Form.Group>
            <Button variant="primary" type='submit' 
          onClick={handleCloseEdit}
          >
            Agregar
          </Button>
          </Form>
        </Modal.Body>


        <Modal.Footer>
       

          
         
        </Modal.Footer>
      </Modal>

  
</div>






    </>
  )
}
