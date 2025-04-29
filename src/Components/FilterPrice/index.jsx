import React from 'react'

const FilterPrice = () => {
  return (
    <>
    <div className='flex'>
        <div className='flex gap-3 pb-10'>
            <h2 className='text-2xl font-semibold'>
                Price
            </h2>
            <input className='border-[#DDDDDD] rounded-md w-[8%]  pl-2 border-1 text-black' type="text" placeholder='from' />
            <input className='border-[#DDDDDD] rounded-md w-[8%]  pl-2 border-1 text-black' type="text" placeholder='to' />
        </div>
        <div className='flex gap-3'>
            <h2 className='text-2xl font-semibold'>
            Discounted items
            </h2>
        </div>
    </div>
    </>
  )
}

export default FilterPrice