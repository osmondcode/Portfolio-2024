import React from 'react'
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full min-h-[15vh] flex items-center justify-between lg:px-[10%] md:px-[35px] px-[17px] pt-[40px] pb-[5vh] text-[12px] flex-wrap gap-4'>
        <p>To get in touch with me and to view my <span className='text-[#F8C258]'>latest <br/>  designs</span>, please visit my social media page</p>

        <span className='text-[24px] flex gap-x-4'>
            <p>
              <button className='hover:translate-y-[-6px] hover:text-[#F8C258] duration-500'><FaLinkedin/></button>
            </p>
            <p>
              <button className='hover:translate-y-[-6px] hover:text-[#F8C258] duration-500'><FaTwitter/></button>
            </p>
            <p>
              <a href='https://wa.me/qr/YIQWFVDNGCQNJ1' className='hover:translate-y-[-6px] hover:text-[#F8C258] duration-500'><FaWhatsapp/></a>
            </p>
        </span>

        <span>
            <p>&copy; 2024 all rights reserved. By</p>
            <p className='border-b-[2px] border-b-[#F8C258] text-[#f8c258]'>osmondcode <span className='text-white'>&</span> OSCORP</p> 
        </span>
    </footer>
  )
}

export default Footer