import React from 'react'
import { FaCircle, FaCode, FaConnectdevelop, FaPuzzlePiece, FaScrewdriverWrench } from 'react-icons/fa6'

export const MyService = () => {
  
  return (
    <div id='services' className='w-full min-h-[70vh] flex flex-col items-center justify-start lg:px-[10%] md:px-[35px] px-[17px] pt-[40px] pb-[5vh] overflow-hidden'> 
            <h1 className='text-[30px] font-semibold sm:mb-[30px] 2sm:mb-[20px] mb-[20px]' data-aos='zoom-in'>
                My <span className='text-[#F8C258]'>Services</span>
            </h1>

            <div className='w-full flex items-center justify-evenly flex-wrap gap-5'>

              <div data-aos='zoom-in'>
                  <span className='w-[250px] h-[300px] flex flex-col items-center justify-start bg-[#44285B] rounded-md p-3 cursor-pointer hover:shadow-md hover:shadow-[#f8c258] duration-500 hover:translate-y-[-8px]' >
                    <FaConnectdevelop className='w-[75px] h-[75px] text-[#F8C258]'/>
                    <h1 className='text-[23px] leading-7 text-center font-semibold mt-[5px]'>
                      Creative web <br/> design
                    </h1>

                    <div className='w-full text-[13px] mt-[12px] font-extralight flex flex-col gap-2'>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/> User engagement</p>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/> Brand representation</p>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/> User experience (UX) enhancement</p>
                      <p className='flex items-center leading-5'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/> Differentiation and memorability</p>
                    </div>
                  </span>
              </div>

              <div  data-aos='zoom-in'>
                  <span className='w-[250px] h-[300px] flex flex-col items-center justify-start bg-[#44285B] rounded-md p-3 cursor-pointer hover:shadow-md hover:shadow-[#f8c258] duration-500 hover:translate-y-[-8px]'>
                    <FaCode className='w-[75px] h-[75px] text-[#F8C258]'/>
                    <h1 className='text-[23px] leading-7 text-center font-semibold mt-[5px]'>
                      Interactive frontend development
                    </h1>

                    <div className='w-full text-[13px] mt-[12px] font-extralight flex flex-col gap-2'>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/> Creation of responsive websites</p>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>HTML, CSS, & JavaScript</p>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>User Interaction Handling</p>
                      <p className='flex items-center leading-5'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>Dynamic Content Rendering</p>
                    </div>
                  </span>
                  </div>


              <div data-aos='zoom-in'>
                  <span className='w-[250px] h-[300px] flex flex-col items-center justify-start bg-[#44285B] rounded-md p-3 cursor-pointer hover:shadow-md hover:shadow-[#f8c258] duration-500 hover:translate-y-[-8px]'>
                    <FaPuzzlePiece className='w-[70px] h-[70px] text-[#F8C258]'/>
                    <h1 className='text-[23px] leading-7 text-center font-semibold mt-[5px]'>
                      Computer engineering
                    </h1>

                    <div className='w-full text-[13px] mt-[12px] font-extralight flex flex-col gap-2'>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>Hardware Design and Development</p>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>Software Development</p>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>System Integration and Testing</p>
                      <p className='flex items-center leading-5'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>Research and Innovation</p>
                    </div>
                  </span>
                </div>


              <div data-aos='zoom-in'>
                  <span className='w-[250px] h-[300px] flex flex-col items-center justify-start bg-[#44285B] rounded-md p-3 cursor-pointer hover:shadow-md hover:shadow-[#f8c258] duration-500 hover:translate-y-[-8px]'>
                    <FaScrewdriverWrench className='w-[65px] h-[65px] text-[#F8C258] mb-[5px]'/>
                    <h1 className='text-[23px] leading-7 text-center font-semibold mt-[5px]'>
                      Maintenance and technical support
                    </h1>

                    <div className='w-full text-[13px] mt-[12px] font-extralight flex flex-col gap-2'>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>Regular website updates</p>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>Website performance tracking</p>
                      <p className='flex items-center'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>24/7 Support</p>
                      <p className='flex items-center leading-5'><FaCircle className='text-[#F8C528] text-[5px] mr-2'/>Technical issue resolution & bug fixing</p>
                    </div>
                  </span>
              </div>
            </div>
    </div>
  )
}
