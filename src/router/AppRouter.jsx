import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../auth/pages/LoginScreen'
import { HomeScreen } from '../home/pages/HomeScreen'
import { Error404 } from '../home/pages/Error404'
import { NavbarHome } from '../layout/NavbarHome'
import { Piedra } from '../components/Piedra'

export const AppRouter = () => {
  return (
    <>
    
    <BrowserRouter>
    <NavbarHome/>
    <Routes>

         <Route path='/login' element={<LoginScreen/> } />
        
         <Route path='/' element={<HomeScreen/> } />

         <Route path='*' element={<Error404/> } />

         <Route path='/juego' element={<Piedra/> } />

    </Routes>


    
    
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}
