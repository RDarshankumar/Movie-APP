import React from 'react'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import { Routes,Route } from 'react-router-dom'

const Regis = () => {
  return (
    <>
    <Routes>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/Login' element={<Login />}></Route>
    </Routes>
      
    </>
  )
}

export default Regis
