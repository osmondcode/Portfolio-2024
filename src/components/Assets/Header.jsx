import React from 'react'
import { FaFileDownload, FaPaperPlane } from 'react-icons/fa'
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.div 
        initial={{y: '-30vw'}}
        animate={{y: 0}}
        className='w-full h-[12vh] flex items-center justify-between fixed top-0 left-auto right-auto bg-[#2B0945]  z-50 shadow-sm shadow-[#F8C258] lg:px-[10%] md:px-[35px] px-[17px]'
        >
        <span>
            <h1 className='flex items-center gap-1 2sm:gap-2 text-[#F8C258] text-[22px] font-semibold' data-aos='zoom-out'>
                <span className='text-white hidden 2sm:flex'>Ugbodaga</span>
                <span className='text-white 2sm:hidden flex'>U</span>
                OSMOND.
            </h1>
        </span>

        <span className='flex items-center justify-center gap-[8px]'>
            <span data-aos='zoom-out'>
                <button className='w-[30px] h-[30px] border-[0.5px] border-[#f8c258] hover:border-[#2b0945] hover:bg-[#f8c258] rounded-md flex items-center justify-center overflow-hidden text-[#f8c258] hover:text-[#2b0945] duration-500' >
                    <FaFileDownload/>
                </button>
            </span>

            <span data-aos='zoom-out'>
                <a href='mailto: osmondcode@gmail.com' className='w-[30px] h-[30px] border-[0.5px] border-[#f8c258] hover:border-[#2b0945] hover:bg-[#f8c258] rounded-md flex items-center justify-center overflow-hidden text-[#f8c258] hover:text-[#2b0945] duration-500'>
                    <FaPaperPlane/>
                </a>
            </span>
        </span>
    </motion.div>
  )
}
