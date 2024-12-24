import React from 'react'
import Footer from './Footer'
import Header from './Header';

import { Route, Routes } from 'react-router-dom';
import Following from './Following';

import SearchImages from './SearchImages';

import CreateCard from './CreateCard';
import Cards from './Cards'; 
import Pen from './Pen';
import Home from './Home';




function Hero(props) {

  return (
    <>
      
        <div className={`${props.show ? "lg:w-[87vw]" : "lg:w-full"} w-full  justify-between  duration-300 flex overflow-auto  flex-col relative  h-screen`}>
          <Header setShowMenu={props.setShowMenu} showMenu={props.showMenu} footerRef={props.footerRef}></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='following' element={<Following></Following>}></Route>
            <Route path='search-images' element={<SearchImages></SearchImages>}></Route>
            <Route path='create-card' element={<CreateCard formData={props.formData} setFormData={props.setFormData} ></CreateCard>}></Route>
            <Route path='cards' element={<Cards formData={props.formData} setFormData={props.setFormData}></Cards>}></Route>
            <Route path='pen' element={<Pen></Pen>}></Route>
          </Routes>
          <Footer footerRef={props.footerRef}></Footer>


         
        





      </div>

    </>

  )
}

export default Hero
