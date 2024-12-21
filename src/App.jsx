import React, { useRef } from 'react'
import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Components/Hero'



function App() {
  const footerRef=useRef();
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [formData, setFormData] = useState([]);




  return (
    <BrowserRouter>
      <Sidebar footerRef={footerRef} show={show} setShow={setShow} ></Sidebar>
      <div className='flex flex-col items-end h-screen '>
        <Hero show={show} setShow={setShow} showMenu={showMenu} setShowMenu={setShowMenu} formData={formData} setFormData={setFormData} footerRef={footerRef}></Hero>
      </div>

    </BrowserRouter>

  )
}

export default App
