import React from 'react'
import 'ldrs/ring'
import 'ldrs/trefoil'
import { trefoil } from 'ldrs'

const preLoader = () => {
    trefoil.register()
  return (
    <div className='top-0 left-0 z-[150] fixed w-full h-screen flex items-center justify-center bg-[#150d1b]'>

            <l-trefoil
            size="40"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4" 
            color="white" 
            ></l-trefoil>
    </div>
  )
}

export default preLoader