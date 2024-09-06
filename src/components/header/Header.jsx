import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='flex w-[95%] mx-auto justify-between items-center py-4'>
      <Logo/>
      <Navbar/>
      <div className='text-[#f4b50e] '>hello</div>
      {/* text-[#1a243f] */}
      </div>
  )
}

export default Header