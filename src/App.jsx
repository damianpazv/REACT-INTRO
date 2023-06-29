import { useState } from 'react'

// import './App.css'
import { Minijuego } from './components/Minijuego'
import { Navbar } from 'react-bootstrap'
import { NavbarHome } from './layout/NavbarHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './router/AppRouter';

function App() {
  

  return (
    <>
    <AppRouter/>
  <NavbarHome/>


<h1>Home</h1>



    </>
  )
}

export default App
