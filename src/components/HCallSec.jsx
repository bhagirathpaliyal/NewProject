import React from 'react'

const HCallSec = () => {
  return (
    <div className='bg-call-bg bg-cover bg-no-repeat p-[100px] flex flex-col justify-center items-center gap-[50px]'>
        <h4 className='text-[45px] font-medium'>Contact David Willburn</h4>
        <div className='flex'>
            <button className='bg-[#f4b50e] text-[#fff] text-[12px] p-[15px]'><img src="./src/assets/phone-solid.svg" alt="Call" className='w-[20px]'/></button>
            <div className='bg-[#1a243f] text-[#fff] text-[12px] p-[15px]'>0123-456-789</div>
        </div>
    </div>
  )
}

export default HCallSec;