import React from 'react'
import GreenBtn from '../GreenBtn'

const HeroSection = () => {
  return (
    <div>
      <div className='bg-[url("/OnlyOne/heroSec.svg")] bg-cover bg-center h-screen w-full'>
        <div className=' mx-auto max-w-11/12' >
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  text-white pt-24 font-bold pb-10' >
        Amazing Discounts <br/> on Garden Products!
        </h1>
        <div>
          <GreenBtn/>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection