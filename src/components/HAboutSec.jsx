import React from 'react'
import { Link } from 'react-router-dom'

const HAboutSec = () => {
  return (
    <div className="py-10 px-4 lg:py-20 lg:px-32 bg-gray-100 text-center">
    <h4 className="text-2xl font-bold">About Us</h4>
    <p className="mt-4 text-gray-600 max-w-screen-md mx-auto">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae odio velit ex quo nobis sit dicta aliquid! Ducimus eum accusamus magni eligendi atque facilis accusantium obcaecati! Id odit dolores aliquam, aut sint commodi eligendi dicta repudiandae nisi culpa sunt nostrum perspiciatis dolorum alias iste suscipit delectus ipsa atque dolor!
    </p>
    <Link to={'/About-Us'}>
      <button className="mt-6 border border-secondary text-secondary px-4 py-2 rounded-md">
        Know More -
      </button>
    </Link>
  </div>
  

  )
}

export default HAboutSec