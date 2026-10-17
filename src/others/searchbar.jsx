import React from 'react'

const searchbar = () => {
  return (
    <div>
        <div className=' bg-gray-100 w-full h-auto  flex flex-row justify-between gap-y-5'>

            <div className=' flex-col flex gap-6 m-4 h-auto'>

                <p className='font-semibold text-blue-700'>Your next opportunity is here</p>
                <p className='text-black font-bold text-6xl'>Find your dream job <br></br> or internship</p>
                <p className='font-semibold text-gray-500'>Explore thousands of jobs and interships from top companies.<br></br>Build your skills. Grow your career. </p>
           
                <div className='flex flex-row w-auto py-3 gap-3'>
                    <input className='h-10 w-[95%] rounded-2xl px-3 py-6  bg-gray-200' placeholder='Enter your jobs & companies '></input>
                    <button className='bg-blue-700 text-white flex items-center justify-center rounded-2xl py-3 w-[40%]' >Search</button>
                </div> 
            </div>  
            <div>  
                <img className='h-[90%]' src='https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-remote-working-clipart-man-working-at-a-computer-desktop-vector-illustration-png-image_6862247.png'></img>
            </div>
        </div>
      
    </div>
  )
}

export default searchbar
