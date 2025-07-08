import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Dashboard from './pages/dashboard'
import SideBar from './components/SideBar'
import Bmi from './pages/Bmi'



function App() {
  return(
    <>
    {/* <SideBar/> */}
    {/* <Login/> */}
    <Routes>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>      
      <Route path='/' element = {<Dashboard/>}/>   
      <Route path='/Bmi' element = {<Bmi/>}/>
    </Routes>
    </>
  )
}

export default App
