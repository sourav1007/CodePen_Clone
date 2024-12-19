import React from 'react'

import Header from './Header';

import { Route, Routes } from 'react-router-dom';
import Following from './Following';
import Footer from './Footer';
import SearchImages from './SearchImages';
import MobileHeader from './MobileHeader';
import CreateCard from './CreateCard';




function Hero(props) {
  const show=props.show;
  return (
    <>
    <div className={ `${show ? "lg:w-[87vw]" : "lg:w-full"} w-full  duration-300 flex  flex-col relative justify-between h-full`}>
      <Header setShowMenu={props.setShowMenu} showMenu={props.showMenu}></Header>
      <MobileHeader setShowMenu={props.setShowMenu} showMenu={props.showMenu}></MobileHeader>
      
    <Routes>
      <Route path='following' element={<Following></Following>}></Route>
      <Route path='search-images' element={<SearchImages></SearchImages>}></Route>
      <Route path='create-card' element={<CreateCard></CreateCard>}></Route>
    </Routes>
    
    <Footer></Footer>
    
      
     
   

    </div>
    
    </>

  )
}

export default Hero
