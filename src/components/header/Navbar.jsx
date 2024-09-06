import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='flex gap-6 text-[14px]'>
        <NavLink to={'/'}> <li>Home</li></NavLink>
        <NavLink to={'/About-Us'}>   <li>About Us</li></NavLink>
        <NavLink to={'/'}>   <li>Case Study</li></NavLink>
        <NavLink to={'/About-Us'}>   <li>Contact Us</li></NavLink>

      </ul>
    </nav>
  )
}

export default Navbar