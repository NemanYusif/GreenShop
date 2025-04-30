import React, { useEffect, useState } from 'react'
import FilterPrice from '../FilterPrice/'

const [discounted,setDiscounted]=useState([]);

const DiscountedItems = () => {

    useEffect(()=>{
        const getall = async()=>{
            try{
                const allData = [
                    "equipments",
                    "fertilizer",
                    "protective",
                    "planting",
                    "pots"
                ]
            }
        }
    })

  return (
    <>
    <div className='mx-auto max-w-11/12'>
        <h2 className='text-5xl font-bold pt-14 pb-10'>
        Discounted items
        </h2>
        <div>
            <FilterPrice/>
        </div>
    </div>
    <div className='max-w-11/12 mx-auto pt-14'>
<div className='pb-10 flex items-center justify-between  '>
      <h2 className='text-5xl font-bold '>
            Sale
        </h2>
        <div className='border-1 w-[85%] opacity-30' >
        </div>
        <Link className='opacity-40 border-1 p-1 pr-3 pl-3 rounded-md text-base'>
        All Sales
        </Link>
      </div>
      <div className='flex gap-7  items-center justify-center '>
        {
            sale.length ? (
                sale.map(({id,image,name,price,salePrice,saleprassents})=>{
                    return(
                 <div key={id} className='border-1 border-[#DDDDDD] rounded-sm flex flex-col gap-2 justify-center items-center'>
                <div className='flex flex-col relative'>
                <img className='w-full' src={image} alt="" />
                <div className='bg-[#339933] absolute end-3 top-3 text-white rounded-md px-2
                 py-1 text-[13px] font-bold flex items-center justify-center '>
                    -{saleprassents}%
                </div>
                </div>
                
                <div>
                    <p>{name}</p>
                </div>
                <div className='flex items-end gap-2'>
                    <h3 className='text-2xl font-bold'>
                        ${price}
                    </h3>
                    <h4 className='text-[14px] opacity-50'>
                        ${salePrice}
                    </h4>
            </div>
        </div>
                    )
                })
            ): <h1>Tapilmadi</h1>
        }
      </div>
</div>
    </>
  )
}

export default DiscountedItems