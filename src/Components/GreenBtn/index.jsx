import React from 'react'
import { Link } from 'react-router-dom'
import AllSales from '../../Pages/AllSales'

const GreenBtn = () => {
  return (
    <>

   <div className='bg-[#339933] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[18%] xl:max-w-[17%] pt-3 pb-3 text-center rounded-md'>
        <Link to="/allSales" className=' sm:text-xl md:text-1xl lg:text-2xl xl:text-2xl text-white '>
        Check out
        </Link>
    </div>
    </>
  )
}

export default GreenBtn