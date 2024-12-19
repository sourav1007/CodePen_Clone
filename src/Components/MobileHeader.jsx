import React from 'react'
import { Link } from 'react-router-dom';
import { SiWindows } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa6";



function MobileHeader(props) {
    const optionsArray = [
        { option: "Your Work", to: "your-work" },
        { option: "Search Images", to: "search-images" },
        { option: "To Do", to: "todo" },
        { option: "Pinned Items", to: "pinned-items" },
        { option: "Following", to: "following" },
        { option: "Trending", to: "trending" },
        { option: "Challenges", to: "challenges" },
        { option: "Spark", to: "spark" }
      ];
      
      

    const showMobileHeader = "left-[0%] ";
    const hideMobileHeader = "left-[-100%] "
    return (
        <div className={`w-[60%] md:w-[30%] h-[60%] md:top-[65px] top-[7%] duration-500 overflow-auto lg:hidden   absolute ${props.showMenu ? showMobileHeader : hideMobileHeader} z-30 bg-[#252830]`}>
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
                optionsArray.map((item,id)=>{
                    return(
                        <Link key={id} to={item.to}> 
                        <div onClick={()=>{
                            console.log("Link clicked")
                            props.setShowMenu(!props.showMenu);
                        }} className='p-2 pl-11 hover:bg-gray-800 text-white'>
                            {item.option}
                        </div>
                        </Link>
                        
                    )
                })
            }
             <div className='text-white    my-1 p-2 pl-11 text-[1.1rem]'>
                    Codepen<span className='bg-yellow-400 px-2 text-center text-xs rounded-sm ml-2 font-bold text-black'>PRO</span>

                </div>


        </div>
    )
}

export default MobileHeader
