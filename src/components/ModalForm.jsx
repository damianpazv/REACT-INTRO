import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import pruebaApi from '../api/prueba';


export const ModalForm = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const  [formData,setFormData ]= useState({
        name:"",
        price: "",
        description:"",
    })

const handleChange = (e) => {

setFormData({
    ...formData,
    [e.target.name]: e.target.value,
});





}

const handleSubmit = (e) => {
    e.preventDefault();
    
    const {name,price,description}=formData

    //validaciones....
    
    AgregarProductsDB(name,price,description)
    
    };

const AgregarProductsDB= async (name,price,description) =>
{

    try{
        const resp=await pruebaApi.post("/admin/new",{name,price,description});
        

    }

    catch(error)
    {
    console.log(error);
    }
}

  return (

    <div>



<Button variant="primary" onClick={handleShow} >
        <h5>+</h5>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zapatillas"
                name='name'
                 value={formData.name}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="number"
                placeholder="15000"
                name='price'
                value={formData.price}
                onChange={handleChange}
                
              />
            </Form.Group>



            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} 
              name='description' 
              value={formData.description}
              onChange={handleChange}
              />
              
            </Form.Group>
            <Button variant="primary" type='submit' 
          onClick={handleClose}
          >
            Agregar
          </Button>
          </Form>
        </Modal.Body>


        <Modal.Footer>
       

          
         
        </Modal.Footer>
      </Modal>



    </div>
  )
}
