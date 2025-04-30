import React from 'react'

const FilterPrice = ({onPriceChange,onDiscountChange,hiddenDiscount}) => {

  const handlePriceChange = (e)=>{
    const{name,value}=e.target;
    onPriceChange((prev)=>({
      ...prev,
        [name]:value
    }))
  }
  const handleDiscountChange = (e)=>{
    onDiscountChange(e.target.checked)
  }
  return (
    <>
    <div className='flex pb-10 items-center gap-5'>
        <div className='flex gap-3 '>
            <h2 className='text-2xl font-semibold'>
                Price
            </h2>
            <input className='border-[#DDDDDD] rounded-md w-[7.2rem] 
             pl-2 border text-black' name='min' type="number" placeholder='from' onChange={handlePriceChange} />
            <input className='border-[#DDDDDD] rounded-md w-[7.2rem] 
             pl-2 border text-black' name='max' type="number" placeholder='to' onChange={handlePriceChange} />
        </div>
        {
          hiddenDiscount && (
            <div className='flex gap-3 '>
            <div>
            <h2 className='text-2xl font-semibold'>
            Discounted items
            </h2>
            </div>
            <input className='w-[1.7rem] border border-[#DDDDDD]' type="checkbox" onChange={handleDiscountChange}/>
        </div>
          )
        }
    </div>
    </>
  )
}

export default FilterPrice