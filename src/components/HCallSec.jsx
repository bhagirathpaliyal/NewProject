import React from 'react'
import callLogo from '/public/assets/phone-solid.svg'
const HCallSec = () => {
  return (
    <div className='bg-call-bg bg-cover bg-no-repeat p-[100px] flex flex-col justify-center items-center gap-[50px]'>
        <h4 className='text-[45px] font-medium'>Contact David Willburn</h4>
        <div className='flex'>
            <button className='bg-secondary text-[#fff] text-[12px] p-[15px]'><img src={callLogo} alt="Call" className='w-[20px]'/></button>
            <div className='bg-primary text-[#fff] text-[12px] p-[15px]'>0123-456-789</div>
        </div>
    </div>
  )
}

export default HCallSec;