import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import NavBar from './components/Navbar/NavBar'
import Home from './components/Home/Home'
function App() {


  return (
    <>

      <BrowserRouter>
      <NavBar />


        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/about' element={ <About/> } />
        </Routes>
      </BrowserRouter>

     

    </>
  )
}

export default App
