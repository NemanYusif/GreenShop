import React from 'react'
import HeroSection from '../../Components/HeroSection'
import CategoriesComponent from '../../Components/Categories'
import Contacts from '../../Components/Contacts'
import Sale from '../../Components/Sale'

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesComponent allCategories={true} border={true}/>
      <Contacts/>
      <Sale/>
    </div>
  )
}

export default MainPage