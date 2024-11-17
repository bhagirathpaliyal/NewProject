import React from 'react'
import { Link } from 'react-router-dom'

const HAboutSec = () => {
  return (
    <div className='p-[100px] flex flex-col justify-center items-center gap-[20px]'>
      <h4 className='text-[26px]'>About Us</h4>
      <div className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque nisi enim ullam similique incidunt voluptas ea ipsa voluptate ab error tenetur eligendi cum magnam, excepturi repellendus dolorum rerum, a vel. Neque, eveniet magnam ipsam quod nisi et a cupiditate labore, sapiente nulla qui. Dolorem nihil perferendis sint sapiente ullam impedit rem soluta consectetur quos dignissimos sequi asperiores illum, quaerat officia beatae unde provident alias aperiam dicta praesentium iste? Provident, exercitationem excepturi tenetur earum placeat quos nihil cumque amet, aliquam veritatis repellat quaerat pariatur dolore at sed assumenda omnis quasi praesentium. Facere quaerat quia ratione illo sed repellat asperiores laborum.</div>
     <Link to={'/About-Us'}><button className='border border-secondary text-secondary font-medium p-2 rounded-md'>Know More -</button></Link> 
    </div>
  )
}

export default HAboutSec