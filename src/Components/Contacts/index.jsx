import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => {
  return (
    <>
    <div className='bg-[#0B710B] max-w-11/12 mx-auto rounded-md'>
   <div className='flex justify-center font-bold pt-8'>
   <h2 className='text-white text-5xl'>
    5% off on the first order
    </h2>
   </div>
   <div className='flex pt-7 items-center justify-center'>
   <div className='pl-6 w-[80%]'>
    <img src="/OnlyOne/hands.svg" alt="" />
   </div>
   <div className='w-1/2  flex flex-col gap-5'>
   <div className='w-full'>
    <input className='border-1 focus:bg-white  rounded-md p-3 w-[80%] border-white' type="text" placeholder='Name' />
   </div>
   <div className=' w-100%'>
    <input className='border-1 focus:bg-white rounded-md p-3 w-[80%] border-white' type="text" placeholder='Phone number' />
   </div>
   <div className=' w-100%'>
    <input className='border-1 focus:bg-white rounded-md p-3 w-[80%] border-white' type="text" placeholder='Email' />
   </div>
   <div className='bg-white w-[80%]  rounded-md flex justify-center'>
    <Link className='text-[#282828]  text-xl  p-3  font-semibold  flex justify-center'>
    Get a discount
    </Link>
   </div>
   </div>
    
   </div>
    </div>
    </>
  )
}

export default Contacts