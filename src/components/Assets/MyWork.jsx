import React from 'react'
import { FaArrowRight,  } from 'react-icons/fa6';

const MyWork = () => {
  return (
    <div id='work' className='w-full min-h-[70vh] flex flex-col items-center justify-start lg:px-[10%] md:px-[35px] px-[17px] pt-[40px] pb-[5vh]'>
        <h1 className='text-[30px] font-semibold sm:mb-[30px] 2sm:mb-[20px] mb-[20px]' data-aos='flip-down'>
                My <span className='text-[#F8C258]'>Work</span>
        </h1>

        <div className='w-fit flex items-start justify-center flex-wrap gap-5' >
            <div className='w-[280px] h-[160px] border-[1px] border-[#f8c258] rounded-md flex items-center justify-center cursor-pointer overflow-hidden relative' data-aos='zoom-in'>
                <span className='absolute top-0 left-0 w-full h-full bg-black/50  BBbg hover:scale-[1.07] duration-500'>
                        <div className='w-full h-full bg-gradient-to-t from-black/80 to-black/10 flex items-end opacity-0 hover:opacity-100 duration-500 p-3 px-4'>
                                <a href='https://www.basketballnews.vercel.app' className='w-full flex items-center justify-between'>
                                        <h1 className='font-black uppercase'>Basketball News</h1>
                                        <FaArrowRight/>
                                </a>
                        </div>
                </span>
            </div>

            <div className='w-[280px] h-[160px] border-[1px] border-[#F8C258] rounded-md flex items-center justify-center cursor-pointer overflow-hidden relative' data-aos='zoom-in'>
                <span className='absolute top-0 left-0 w-full h-full bg-black/50  CSbg hover:scale-[1.07] duration-500'>
                                <div className='w-full h-full bg-gradient-to-t from-black/80 to-black/10 flex items-end opacity-0 hover:opacity-100 duration-500 p-3 px-4'>
                                <a href='https://www.cycleaning.vercel.app' className='w-full flex items-center justify-between'>
                                        <h1 className='font-black uppercase'>Cleaning Service</h1>
                                        <FaArrowRight/>
                                </a>
                                </div>
                        </span>
            </div>
            <div className='w-[280px] h-[160px] border-[1px] border-[#F8C258] rounded-md flex items-center justify-center cursor-pointer overflow-hidden relative' data-aos='zoom-in'>
                            <span className='absolute top-0 left-0 w-full h-full bg-black/50  FAbg hover:scale-[1.07] duration-500'>
                        <div className='w-full h-full bg-gradient-to-t from-black/80 to-black/10 flex items-end opacity-0 hover:opacity-100 duration-500 p-3 px-4'>
                        <a href='https://www.osmondkitchen.vercel.app' className='w-full flex items-center justify-between'>
                                        <h1 className='font-black uppercase'>food ordering</h1>
                                        <FaArrowRight/>
                                </a>
                        </div>
                        </span>
            </div>
            <div className='w-[280px] h-[160px] border-[1px] border-[#F8C258] rounded-md flex items-center justify-center cursor-pointer overflow-hidden relative' data-aos='zoom-in'>
                            <span className='absolute top-0 left-0 w-full h-full bg-black/50  PKbg hover:scale-[1.07] duration-500'>
                        <div className='w-full h-full bg-gradient-to-t from-black/80 to-black/10 flex items-end opacity-0 hover:opacity-100 duration-500 p-3 px-4'>
                                <a href='https://pickie.vercel.app' className='w-full flex items-center justify-between'>
                                        <h1 className='font-black uppercase'>e-commerce</h1>
                                        <FaArrowRight/>
                                </a>
                        </div>
                        </span>
            </div>
            <div className='w-[280px] h-[160px] border-[1px] border-[#F8C258] rounded-md flex items-center justify-center cursor-pointer overflow-hidden relative' data-aos='zoom-in'>
                            <span className='absolute top-0 left-0 w-full h-full bg-black/50  SLbg hover:scale-[1.07] duration-500'>
                        <div  className='w-full h-full bg-gradient-to-t from-black/80 to-black/10 flex items-end opacity-0 hover:opacity-100 duration-500 p-3 px-4'>
                                <a href='https://www.sole.vercel.app' className='w-full flex items-center justify-between'>
                                        <h1 className='font-black uppercase'>music streaming</h1>
                                        <FaArrowRight/>
                                </a>
                        </div>
                        </span>
            </div>
        </div>
    </div>
  )
}

export default MyWork