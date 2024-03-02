import React, { useState } from 'react'
import { HiChevronDoubleLeft} from "react-icons/hi2"
import { motion } from 'framer-motion'

const Home = () => {
  const [ isSideMenu, setIsSideMenu] = useState(false)
  return (
   <>
   <div 
   className={`w-2 ${isSideMenu? "w-2" : "flex-[.2] xl:flex-[.2]"} min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}>
    {/* anchor */}
      <motion.div 
       whileTap={{scale : .9}}
      onClick={()=> setIsSideMenu(!isSideMenu)} className='w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer '>
        <HiChevronDoubleLeft  className='text-white text-xl'/>
      </motion.div >
    <div className='overflow-hidden w-full flex flex-col gap-4'>
      {/* logo */}

    {/* start coding */}
    {/*home nav */}
    </div>
     </div>
   <div></div>
   </>
  )
}

export default Home