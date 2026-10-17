import React from 'react'

const categories = (props) => {
  return (
    <div >
            <div className='flex flex-row '>
                <div className='flex flex-col py-6 px-8 gap-3 w-full border-gray-200 border-3 h-50 items-center rounded-2xl '>
                    <a href='#'><img src={props.src} ></img></a>
                    <a href='#'><p className='font-semibold '>{props.para}</p></a>
                </div>

            </div>

      
    </div>
  )
}

export default categories
