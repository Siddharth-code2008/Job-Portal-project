import React from 'react'

const navbar = () => {
  return (
    <div>
         
        <div className='w-full h-auto py-2 flex flex-row justify-between' >

            <h1 className='text-blue-950 mx-3 font-bold  text-2xl'>Hire<span className='text-blue-700 font-bold text-2xl '>Hub</span></h1>
            <div className=' flex flex-row justify-between items-center  w-[50%]'>
                <a href='#' className='text-black font-semibold hover:text-blue-700 '>Home</a>
                <a href='#' className='text-black font-semibold hover:text-blue-700 '>Jobs</a>
                <a href='#' className='text-black font-semibold hover:text-blue-700 '>Saved</a>
                <a href='#' className='text-black font-semibold hover:text-blue-700 '>Applications</a>
            </div>  
            <div></div>
        </div>
      
    </div>
  )
}

export default navbar
