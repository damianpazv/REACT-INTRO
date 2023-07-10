import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


export const NavbarHome = () => {
  return (



    
    <div>

<Navbar expand="lg" bg="primary" data-bs-theme="dark" className="mb-3">
      <Container >
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
         <NavLink className={"m-3 text-decoration-none  "} to="/">Home</NavLink>
         <NavLink className={"m-3 text-decoration-none"} to="/login">Login</NavLink>
         <NavLink className={"m-3 text-decoration-none"} to="/juego">Juego</NavLink>
         <NavLink className={"m-3 text-decoration-none"} to="/registro">registro</NavLink>
         
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>






        
    </div>
  )
}
