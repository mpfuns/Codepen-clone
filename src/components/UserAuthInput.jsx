import React, { useState } from 'react'
import {FaEnvelope, FaEye} from "react-icons/fa6"

const UserAuthInput = () => {
  
  const [value, setValue] = useState("")
  
  return (
    <div  className='flex flex-col items-start justify-start gap-1 '>
      <label className=' text-sm text-gray-300'>Email</label>
      <div className={`flex items-center  justify-center gap-3 w-full md:w-96  rounded-md px-4 py-1 bg-gray-200`}>
        <FaEnvelope className='text-text555' />
        <input type="text"  
                placeholder='Email  here' 
                className='flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        <div className=' cursor-pointer'>
            <FaEye className=' text-text555 text-2xl' />


        </div>
      </div>
    </div>
  )
}

export default UserAuthInput