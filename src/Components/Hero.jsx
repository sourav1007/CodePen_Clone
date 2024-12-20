import React from 'react'

import Header from './Header';

import { Route, Routes } from 'react-router-dom';
import Following from './Following';
import Footer from './Footer';
import SearchImages from './SearchImages';
import MobileHeader from './MobileHeader';
import CreateCard from './CreateCard';
import Cards from './Cards';
import Pen from './Pen';




function Hero(props) {
  return (
    <>
    <div className={ `${props.show ? "lg:w-[87vw]" : "lg:w-full"} w-full  duration-300 flex overflow-auto  flex-col relative justify-between h-full`}>
      <Header setShowMenu={props.setShowMenu} showMenu={props.showMenu} footerRef={props.footerRef}></Header>
      <MobileHeader setShowMenu={props.setShowMenu} showMenu={props.showMenu } footerRef={props.footerRef} show={props.show} setShow={props.setShow} ></MobileHeader>
      
    <Routes>
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
