import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterPrice from '../FilterPrice';



const URL ="http://localhost:5000"

const FilterAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const fetchAll = async () => {
          try {
            const categories = ["equipments", "fertilizer", "protective", "planting", "pots"];
            const responses = await Promise.all(
              categories.map((category) => axios.get(`${URL}/${category}`))
            );
    
            const combined = responses.flatMap(response => response.data);
            setAllProducts(combined);
          } catch (error) {
            console.error("Məlumatlar gətirilərkən xəta baş verdi:", error);
          }
        };
    
        fetchAll();
      }, []);
  return (
   <>
   
   <div className='max-w-11/12 mx-auto pt-14'>
   <h2 className='text-5xl font-bold '>
      All Products
        </h2>
        <div>
      <FilterPrice/>
      </div>
<div className='pb-10 flex items-center justify-between  '>
    
      </div>
    
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center justify-center'>
        {
            allProducts.length ? (
                allProducts.map(({id,image,name,price,salePrice,salePercent,category})=>{
                    return(
                 <div key={`${category}${id}`} className='border-1 border-[#DDDDDD] rounded-sm flex flex-col gap-2 justify-center items-center'>
                <div className='flex flex-col relative'>
                <img className='w-full' src={image} alt="" />
                {
                    salePercent > 0 && (
                        <div className='bg-[#339933] absolute end-3 top-3 text-white rounded-md px-2
                 py-1 text-[13px] font-bold flex items-center justify-center '>
                    -{salePercent}%
                </div>
                    )
                }
                </div>
                
                <div>
                    <p>{name}</p>
                </div>
                <div className='flex items-end gap-2'>
                    <h3 className='text-2xl font-bold'>
                        ${price}
                    </h3>
                    {
                        salePrice > 0 && (
                            <h4 className='text-[14px] opacity-50'>
                        ${salePrice}
                    </h4>
                        )
                    }
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

export default FilterAllProducts