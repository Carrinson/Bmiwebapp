import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes } from 'react-router'
import { Route } from 'react-router'

function App() {
  return(
    <>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>      
    </Routes>
    </>
  )
}

export default App
