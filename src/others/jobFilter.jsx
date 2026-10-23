import React, { useState } from 'react'



const jobFilter = (props) => {
  const [active,setactive] = useState(false)

  return (
    <div className='py-2 '>
        <div className='w-auto  flex flex-col '>
          <button onClick={props.onClick} className='flex items-center active:scale-95 cursor-pointer justify-center  rounded-xl bg-gray-500   py-2 px-4 text-white'>{props.text}</button>
        </div>     
    </div>
  )
}
export default jobFilter
