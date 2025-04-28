import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'

const URL ="http://localhost:5000/categories/"



const CategoriesComponent = () => {
    const [categories,setCategories] = useState([])

useEffect(()=>{
    axios.get(URL).then(({data})=>{
        setCategories(data)
    })

},[])
  return (
    <>
    <div className='pt-20 mx-auto max-w-11/12'>
      <div className='pb-10 flex items-center justify-between  '>
      <h2 className='text-5xl font-bold '>
            Categories
        </h2>
        <div className='border-1 w-[73%] opacity-30' >
        </div>
        <Link className='opacity-40 border-1 p-1 pr-3 pl-3 rounded-md text-base'>
        All Categories
        </Link>
      </div>
      <div className='flex pb-10 flex-wrap justify-center w-full '>
      {
        categories.length ? (
                categories.map(({id,image,name})=>{
                    return (
                        <div key={id} className='flex h-[100%] flex-col items-center
                         justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                        <Link  to="/aboutProducts"><img src={image} alt="" /></Link>
                        <p className='text-center p-3 '>{name}</p>
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

export default CategoriesComponent