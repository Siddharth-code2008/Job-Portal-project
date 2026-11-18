import React, { useState } from 'react'

const categories = (props) => {

  return (
    <div >
            <div className='flex flex-row '>
                <button onClick={props.onClick}  className= "flex cursor-pointer hover:border-blue-600 hover:scale-105 active:scale-95 flex-col py-6 px-8 gap-3 w-full  border-gray-200 border-2 h-50 items-center rounded-2xl " >
                    <div  className='cursor-pointer'><img src={props.src} ></img></div>
                    <div  className='cursor-pointer'><p className='font-semibold '>{props.para}</p></div>
                </button>
            </div>
      
    </div>
  )
}
 
export default categories
