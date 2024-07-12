import React from 'react'
import { FaFileDownload, FaPaperPlane } from 'react-icons/fa'
import boy from '../images/home.png'
export const Home = () => {
  return (
    <div id='home' className='w-full min-h-[88vh] flex flex-col md:flex-row items-center justify-between lg:px-[10%] md:px-[35px] px-[17px] mt-[12vh] overflow-hidden'>
        <div className='w-full md:w-2/3 h-[60vh] md:h-[70vh]  flex flex-col items-start justify-center'>
            <h3 className='md:text-[26px] 2sm:text-[22px] text-[19px] leading-9' data-aos='fade-right' data-aos-duration='1400'>
                Hello, My name is
            </h3>
            <h1 className='flex items-center gap-1 2sm:gap-2 text-[#F8C258] md:text-[33px] 2sm:text-[27px] text-[23px] font-semibold leading-11' data-aos='fade-right' data-aos-duration='1700'>
                <span className='text-white '>Ugbodaga</span>
                OSMOND,
            </h1>
            <h1 className='md:text-[28px] 2sm:text-[26px] text-[22px] leading-10' data-aos='fade-right' data-aos-duration='2000'>
                I am a Frontend Developer 
                <span className='text-[#F8C258] '> & </span> 
                Computer Engineer.
            </h1>
            <span className='flex items-start justify-center gap-[20px] mt-[20px]'>
                <span  data-aos='fade-up'>
                    <a href='./My Resume.pdf' download='Ugbodaga-Osmond_Resume' className='sm:py-2 py-1.5 sm:px-4 px-3 border-[1px] border-[#F8C258] rounded-[50px] text-[#2B0945] bg-[#F8C258] font-semibold 2sm:text-[15px] text-[13px] hover:text-[#F8C258] hover:bg-[#2B0945] duration-500 flex items-center gap-[5px]'>
                        Download CV
                        <FaFileDownload/>
                    </a>
                </span>
                <span data-aos='fade-up'>
                    <button className='sm:py-2 py-1.5 sm:px-4 px-3 border-[1px] border-[#F8C258] rounded-[50px] text-[#F8C258] font-semibold flex items-center justify-center gap-[5px] 2sm:text-[15px] text-[13px] hover:text-[#2B0945] hover:bg-[#F8C258] duration-500'>
                        Contact me
                        <FaPaperPlane/>
                    </button>
                </span>
            </span>
        </div>


        <div className='md:w-1/2 w-full h-fit flex items-center justify-center p-[10px]'>
            <span className='xl:w-[450px] lg:w-[400px] 2sm:w-[350px] w-[280px] xl:h-[450px] lg:h-[400px] 2sm:h-[350px] h-[280px] flex items-center justify-center '>
                <img src={boy} alt='developer' className='xl:w-[450px] lg:w-[400px] 2sm:w-[350px] w-[280px] xl:h-[450px] lg:h-[400px] 2sm:h-[350px] h-[280px] ' data-aos='fade-up'/>
            </span>
        </div>
    </div>
  )
}
