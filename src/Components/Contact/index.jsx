import React from 'react'
import { TbBrandInstagramFilled } from "react-icons/tb";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <>
    <div className='mx-auto max-w-11/12 pt-14'>
        <div>
            <h1 className='text-5xl font-bold'>Contact</h1>
        </div>
       <div className='flex gap-10 pt-10'>
       <div className='w-full flex flex-col gap-5'>
       <div className='bg-[#F1F3F4] pl-6 rounded-md'>
            <p className='opacity-40 pt-6'>Phone</p>
            <h2 className='text-2xl font-semibold pb-6 pt-2 text-[#282828] opacity-90'>+7 (499) 350-66-04</h2>
        </div>
        <div className='bg-[#F1F3F4] pl-6 rounded-md'>
            <p className='opacity-40 pt-6'>Address</p>
            <h2 className='text-2xl font-semibold pb-6 pt-2 text-[#282828] opacity-90'>
            Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
            </h2>
        </div>
       </div>
       <div className='w-[60%] flex flex-col gap-5'>
        <div className='bg-[#F1F3F4] pl-6 rounded-md'>
            <p className='opacity-40 pt-6'>Social</p>
            <div className='flex gap-3 pt-2 pb-5'>
            <Link target='_blank' to="https://www.instagram.com/">
            <TbBrandInstagramFilled className='text-4xl text-[#282828] opacity-90'/>
            </Link>
            <Link target='_blank' to="https://web.whatsapp.com/">
            <TbBrandWhatsappFilled className='text-4xl text-[#282828] opacity-90'/>
            </Link>
            </div>
        </div>
        <div className='bg-[#F1F3F4] pl-6 rounded-md'>
            <p className='opacity-40 pt-6'>Working Hours</p>
            <h2 className='text-2xl text-[#282828] opacity-90 font-semibold pt-2 pb-6 '>24 hours a day</h2>
        </div>
       </div>
       </div>
    </div>
    </>
  )
}

export default Contact