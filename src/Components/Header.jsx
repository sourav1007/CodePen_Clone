import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

import { BsFillPinFill } from "react-icons/bs";
import { FaRegSmileWink } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";






function Header(props) {
  




  return (
    <>

      <div className=' lg:flex hidden bg-black w-full justify-between   items-center py-[1rem] px-4 pl-10  '>
        <div className='flex gap-1'>
          <button className='px-5 py-2 text-white border-b-2 bg-gray-700 hover:bg-[#1E1F26] border-transparent hover:border-b-2 hover:border-gray-500 rounded-sm'>Your Work</button>
          <button className='px-5 py-2 text-white border-b-2 bg-gray-700 hover:bg-[#1E1F26] border-transparent hover:border-b-2 hover:border-gray-500 rounded-sm'>Following</button>
          <button className='px-5 py-2 text-white border-b-2 bg-gray-700 hover:bg-[#1E1F26] border-transparent hover:border-b-2 hover:border-gray-500 rounded-sm'>Trending</button>
        </div>
        <div className="search w-[25%] relative">
          <IoSearch className='text-white absolute text-xl top-4 left-3 cursor-pointer' />
          <input type="text" placeholder='Search CodePen' className='py-3 rounded-sm px-10  outline-none w-full font-bold bg-gray-700 text-white' />

        </div>
        <div className="buttons flex">
          <button className=' flex rounded-[5px] bg-[#131417] hover:bg-[#444857] text-black px-2 py-3 mx-1'><BsFillPinFill className='text-white text-xl' /> <FaAngleDown className='text-white text-sm' /></button>
          <button className=' rounded-[5px]  text-white   px-4 py-3 mx-1 bg-[#2E8CA2]'><FaRegSmileWink className='text-black text-xl' /></button>

        </div>

      </div>
      <div className=' lg:hidden w-full flex justify-between max-[739px]:gap-2  items-center bg-black p-2'>
        <div>
          <FaCodepen className='text-4xl text-white' />
        </div>
        <div onClick={()=>{
            console.log("clickedd")
            props.setShowMenu(!props.showMenu);
            console.log(props.showMenu);
          }} className='flex bg-gray-700  px-[0.20rem] md:px-[0.30rem] py-3 text-white rounded-md'>
          <GiHamburgerMenu  className='text-xl' /><FaAngleDown />
        </div>
        <div className='md:flex md:w-[45%] justify-center gap-1  hidden  '>
          <button className=' p-3 text-white  bg-gray-700 hover:bg-[#1E1F26] border-transparent hover:border-b-2 hover:border-green-500 rounded-sm'>Your Work</button>
          <button className=' p-3 text-white  bg-gray-700 hover:bg-[#1E1F26] border-transparent hover:border-b-2 hover:border-green-500 rounded-sm'>Following</button>
          <button className=' p-3 text-white  bg-gray-700 hover:bg-[#1E1F26] border-transparent hover:border-b-2 hover:border-green-500 rounded-sm'>Trending</button>
        </div>
        <div className='w-[45%] md:w-[25%] relative'>
          <input className='px-4 pl-8 rounded-md bg-[#252830] py-3 font-semibold w-full max-[739px]:text-xs' type="text" placeholder='Search CodePen...' />
          <IoSearch className='text-gray-400 absolute max-[739px]:text-lg max-[739px]:top-[0.75rem] text-xl top-4 left-2 cursor-pointer' />

        </div>
        <div>
          <button className=' flex rounded-[5px] bg-[#252830] hover:bg-[#444857] text-black p-3 '><BsFillPinFill className='text-white text-xl' /> <FaAngleDown className='text-white text-sm' /></button>
        </div>
        <div>
          <button className=' rounded-[5px]  text-white   p-3  bg-[#2E8CA2]'><FaRegSmileWink className='text-black text-xl' /></button>
        </div>

      </div>


    </>


  )
}

export default Header
