import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import ResponsiveNav from './ResponsiveNav'

const Header = () => {
  return (
    <div className='sticky top-0 bg-[#fff] z-20'>
      <div className='flex w-[95%] mx-auto justify-between items-center py-4'>
      <Logo/>
      <Navbar/>
      <div className='max-md:hidden'>Call logo</div>
      <ResponsiveNav/>
      </div>
      </div>
  )
}

export default Header