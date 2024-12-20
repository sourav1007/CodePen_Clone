import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className='sm:flex text-white w-full h-full overflow-auto  bg-[#1D1E22] '>
            <div className='w-full h-1/2 sm:w-1/2 sm:h-full bg-[url("/codepenbg.webp")] bg-center bg-cover p-2'>
            </div>
            <div className='w-full h-1/2 sm:w-1/2 sm:h-full  p-2 items-center sm:justify-center flex flex-col gap-3'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-extrabold'>The best place to build, test, and discover front-end code.</h1>
               <Link to="/pen"><button className='bg-yellow-500 px-4 py-2 font-bold rounded-md text-black'>Lets Get Started</button></Link> 

            </div>
        </div>
    )
}

export default Home
