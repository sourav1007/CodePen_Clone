import React from 'react'
import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Components/Hero'



function App() {
  const [show, setShow] = useState(true);
  const[showMenu,setShowMenu]=useState(false);
  

  return (
    <BrowserRouter>
      <Sidebar show={show} setShow={setShow}></Sidebar>
      <div className='flex flex-col items-end h-screen'>
        <Hero show={show} showMenu={showMenu} setShowMenu={setShowMenu}></Hero>
      </div>

    </BrowserRouter>

  )
}

export default App
