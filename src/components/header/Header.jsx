import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='sticky top-0 bg-[#fff] z-10'>
      <div className='flex w-[95%] mx-auto justify-between items-center py-4'>
      <Logo/>
      <Navbar/>
      <div >Call logo</div>
      {/* text-[#1a243f] text-[#f4b50e] */}
      </div>
      </div>
  )
}

export default Header