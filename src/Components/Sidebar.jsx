import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import { SiWindows } from "react-icons/si";
function Sidebar(props) {

    const optionsArray = [
        { option: "Your Work", to: "your-work" },
        { option: "Search Images", to: "search-images" },
        { option: "Create Card", to: "create-card" },
        { option: "Cards", to: "cards" },
        { option: "Following", to: "following" },
        { option: "Trending", to: "trending" },
        { option: "Challenges", to: "challenges" },
        { option: "Spark", to: "spark" }
    ];

    const showSideBar = "left-[0%] h-screen bg-[#1E1F26]  flex flex-col ";
    const hideSideBar = "left-[-12%] h-screen bg-[#1E1F26]   flex flex-col "
    const hamburgerIconLeft = <FaAngleLeft />;
    const hamburgerIconRight = <FaAngleRight />






    return (
        <>
            <div className={` ${props.show ? showSideBar : hideSideBar} hidden  lg:flex absolute duration-300 h-screen w-[13vw] z-10  `}>
                <div className={`bg-gray-700 ${props.show ? "opacity-100" : "opacity-50"} w-10 hover:bg-[#70768E] rounded-tr-md rounded-br-md text-white relative left-[12rem] top-8  flex  cursor-pointer px-1 py-2`} onClick={() => { props.setShow(!props.show);  }}>
                    <GiHamburgerMenu className='text-xl' />
                    {props.show ? hamburgerIconLeft : hamburgerIconRight}
                </div>

                <Link to='/'><svg className='w-40 mx-2 cursor-pointer' fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" viewBox="0 0 138 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg></Link>
                <div className='p-6 w-full flex flex-col items-start gap-[1px]'>
                    <h2 className='text-[10px] text-gray-300 mb-2'>CREATE</h2>
                    <Link to="create" className='flex items-center justify-center gap-6 text-white w-full px-2 py-3 text-center border-t-4 border-yellow-400  cursor-pointer bg-gray-700 hover:bg-black'>
                        <SiWindows /><div >Pen
                        </div>
                        <FaAngleDown className='text-white text-sm' /></Link>

                    <div className='flex items-center justify-center gap-3 text-white w-full  py-3 text-center bg-gray-700 cursor-pointer rounded-bl-md rounded-br-md hover:bg-black '>
                        <SiWindows />
                        <div>Collection</div>
                    </div>


                </div>

                {
                    optionsArray.map((item, id) => {
                        return (
                            <Link key={id} to={item.to}>
                                <div className='p-2 pl-11 hover:bg-gray-800 text-white'>
                                    {item.option}
                                </div>
                            </Link>

                        )
                    })
                }

                <div className='text-white  hover:bg-slate-950 cursor-pointer w-full my-1 px-7 py-2 text-[1.1rem]'>
                    Codepen<span className='bg-yellow-400 px-2 text-center text-xs rounded-sm ml-2 font-bold text-black'>PRO</span>

                </div>

            </div>

        </>

    )
}

export default Sidebar;
