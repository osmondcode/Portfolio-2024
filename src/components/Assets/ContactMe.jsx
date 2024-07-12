import React from 'react'
import { FaEnvelope} from 'react-icons/fa'
import { FaLocationDot, FaMobileScreen,} from 'react-icons/fa6'

const ContactMe = () => {
  return (
    <div id='contact' className='w-full min-h-[40vh] flex flex-col items-center justify-start lg:px-[10%] md:px-[35px] px-[17px] pt-[40px] pb-[5vh] bg-[#44285B]'>
        <h1 className='text-[30px] font-semibold sm:mb-[30px] 2sm:mb-[20px] mb-[20px]' data-aos='flip-up'>
                Contact <span className='text-[#F8C258]'>Me</span>
        </h1>

        <div className='w-full flex items-center justify-around flex-wrap gap-4'>
            <span className='flex flex-col items-center justify-center gap-2 text-[#f8c258]'>
                <p data-aos='fade-right'>
                    <FaEnvelope className='text-[23px]'/>
                </p>
                <span data-aos='fade-down'>
                    <a href='mailto:osmondcode@gmail.com' className='text-white font-mono font-semibold hover:text-[#f8c258] duration-500'>osmondcode@gmail.com</a>
                </span>
            </span>
            <span className='flex flex-col items-center justify-center gap-2 text-[#f8c258]'>
                <p data-aos='fade-right'>
                    <FaLocationDot className='text-[23px]'/>
                </p>
                <span data-aos='fade-down'>
                    <button className='text-white font-mono font-semibold hover:text-[#f8c258] duration-500'>Lagos - Nigeria</button>
                </span>
                    
            </span>
            <span className='flex flex-col items-center justify-center gap-2 text-[#f8c258]'>
                <p data-aos='fade-right'>
                    <FaMobileScreen className='text-[23px]' />
                </p>
                <span data-aos='fade-down'>
                    <a href='tel: +23403311434' className='text-white font-mono font-semibold hover:text-[#f8c258] duration-500'>+(234) 903-3811-434</a>
                </span>
            </span>
        </div>
        
    </div>
  )
}

export default ContactMe