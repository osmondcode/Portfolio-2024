import React from 'react'

export const About = () => {
  return (
    <div id='about' className='bg-[#44285B] w-full min-h-[65vh] flex flex-col md:flex-row items-center justify-between lg:px-[10%] md:px-[35px] px-[17px] pt-[50px] md:pt-0 overflow-hidden'>
        <span className='md:w-1/2 sm:w-4/5 w-full min-h-[50vh]' data-aos='fade-right'>
            <h1 className='text-[30px] font-semibold sm:mb-[30px] 2sm:mb-[20px] mb-[10px]' data-aos='fade-down'>
                About <span className='text-[#F8C258]'>Me</span>
            </h1>

            <p className='2sm:text-[18px] text-[17px] font-light'>Passionate about computer engineering and frontend development,  i combine creativity and technical skills to impactful visual experience. I create <span className='text-[#F8C258] '>Aesthetic, Initiative, & Responsive user Interfaces.</span> My user-centered approach allows me to design captivating visuals  and provide an optimal user experience. Continuously seeking the latest trends, <span className='text-[#F8C258]'>i enjoy taking on new challenges</span> and collaborating with  clients to bring their ideas to life through high-quality web experiences.</p>
        </span>

        <span className='w-1/3 h-[35vh] flex items-center justify-center gap-[20px] my-[20px] md:my-0' data-aos='fade-left'>
            <div className='h-[35vh] flex flex-col items-center justify-center'>
                <span className='w-[40px] h-[170px] border-[1px] border-[#F8C258] rounded-t-[50px] rounded-b-[50px] cursor-pointer hover:bg-[#F8C258] duration-500 borderDown'></span>
            </div>

            <div className='h-[35vh] flex flex-col items-center justify-between'>
                <span className='w-[40px] h-[150px] bg-[#F8C258] rounded-t-[50px] rounded-b-[50px] cursor-pointer hover:bg-[#44285B] border-[0.5px] border-[#F8C258] duration-500 orangeUp'></span>
                <span className='w-[40px] h-[40px] bg-[#FFF] rounded-t-[50px] rounded-b-[50px] cursor-pointer hover:bg-[#44285B] border-[0.5px] border-[#FFF] hover:border-[#F8C258] duration-500 whiteUp'></span>
            </div>

            <div className='h-[35vh] flex flex-col items-center justify-center'>
                <span className='w-[40px] h-[170px] border-[1px] border-[#F8C258] rounded-t-[50px] rounded-b-[50px] cursor-pointer hover:bg-[#F8C258] duration-500 borderUp'></span>
            </div>

            <div className='h-[35vh] flex flex-col items-center justify-between py-[20px]'>
                <span className='w-[40px] h-[40px] bg-[#FFF] rounded-t-[50px] rounded-b-[50px] cursor-pointer hover:bg-[#44285B] border-[0.5px] border-[#FFF] hover:border-[#F8C258] duration-500 whiteUp'></span>
                <span className='w-[40px] h-[150px] bg-[#F8C258] rounded-t-[50px] rounded-b-[50px] cursor-pointer hover:bg-[#44285B] border-[0.5px] border-[#F8C258] duration-500 orangeUp'></span>
            </div>
        </span>
    </div>
  )
}
