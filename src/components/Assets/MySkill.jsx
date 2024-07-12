import React from 'react'
import react from '../images/Thinkster-removebg-preview.png'
import html from '../images/HTML5_without_wordmark_color_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png'
import css from '../images/CSS_3_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png'
import javascript from '../images/Javascript_Logo__JS___01__-_PNG_Logo_Vector_Brand_Downloads__SVG__EPS_-removebg-preview.png'
import redux from '../images/Redux_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png'
import git from '../images/images-removebg-preview.png'
import tailwind from '../images/Tailwind_Css_Mark_-_Css_Framework_Programmer_Coder_Sticker_by_farhanhafeez-removebg-preview.png'
import api from '../images/images__1_-removebg-preview.png'
import leftImg from '../images/3D_Man_chatting_remotely_with_female_colleague_illustration-removebg-preview.png'
import bootstrap from '../images/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67-removebg-preview.png'

export const MySkill = () => {
  return (
    <div id='skills' className='w-full min-h-[65vh] flex flex-col items-center justify-center lg:px-[10%] md:px-[35px] px-[17px] pt-[40px] pb-[5vh] bg-[#44285B] overflow-hidden'>
            <span className='w-full min-h-[50px] flex flex-row-reverse items-center justify-around flex-wrap gap-[35px]'>

                <div className='w-[440px] h-[440px] flex items-center justify-center relative' data-aos='fade-right'>

                <span className='lg:w-[400px] 2sm:w-[350px] w-[280px] lg:h-[400px] 2sm:h-[350px] h-[280px] flex items-center justify-center '>
                    <img src={leftImg} alt='developer' className=' lg:w-[400px] 2sm:w-[350px] w-[280px] lg:h-[400px] 2sm:h-[350px] h-[280px] ' data-aos='fade-up'/>
                </span>


                </div>


                <div className='w-[320px] h-[320px] flex flex-col md:items-center items-center md:justify-center justify-center'>
                    <h1 className='text-[30px] font-semibold sm:mb-[30px] 2sm:mb-[20px] mb-[20px]' data-aos='fade-right'>
                    My <span className='text-[#F8C258]'>Skills</span>
                    </h1>

                    <span className='w-[220px] flex items-center justify-start gap-[30px] flex-wrap'>
                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' data-aos='fade-down'>
                                <img src={html}  alt='html' className='w-[30px] h-[30px]'/>
                            </div>
                    </span>

                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' >
                                <img src={css}  alt='CSS' className='w-[30px] h-[30px]'/>
                            </div>
                        </span>

                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' >
                                <img src={javascript}  alt='JavaScript' className='w-[30px] h-[30px]'/>
                            </div>
                        </span>

                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' >
                                <img src={react}  alt='React JS' className='w-[30px] h-[30px]'/>
                            </div>
                        </span>

                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' >
                                <img src={redux}  alt='Redux' className='w-[30px] h-[30px]'/>
                            </div>
                        </span>

                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' >
                                <img src={git}  alt='Github' className='w-[30px] h-[30px]'/>
                            </div>
                        </span>

                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' >
                                <img src={api}  alt='APIs' className='w-[30px] h-[30px]'/>
                            </div>
                        </span>

                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' >
                                <img src={tailwind}  alt='tailwind' className='w-[30px] h-[30px]'/>
                            </div>
                        </span>

                        <span data-aos='fade-down'>
                            <div className='w-[45px] h-[50px] flex items-center justify-center rounded-md bg-[#2B0945]  border-b-[3px] border-[#f8c258] p-1' >
                                <img src={bootstrap}  alt='Bootstrap' className='w-[30px] h-[30px]'/>
                            </div>
                        </span>
                    </span>
                </div>
            </span>
    </div>
  )
}
