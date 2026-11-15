import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
         
        <div className='w-full h-auto py-2 flex flex-row justify-between'>
            <h1 className='text-blue-950 mx-3 font-bold  text-2xl'>Hire<span className='text-blue-700 font-bold text-2xl '>Hub</span></h1>
            <div className=' flex flex-row justify-between items-center w-[50%]'>
                <Link to='/' className='text-black font-semibold hover:text-blue-700 '>Home</Link>
                <Link to='/applyjob/:id' className='text-black font-semibold hover:text-blue-700 '>Details</Link>
                <Link to='/savedjobs' className='text-black font-semibold hover:text-blue-700 '>Saved</Link>
                <Link to='/applications' className='text-black font-semibold hover:text-blue-700 '>Applications</Link>
            </div>  
            <div></div>
        </div>
      
    </div>
  )
}

export default navbar

