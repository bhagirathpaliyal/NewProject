import React from 'react'
import awardImg from '/public/assets/award-solid.svg'
import shieldImg from '/public/assets/shield-alt-solid.svg'
import trophyImg from '/public/assets/trophy-solid.svg'
import earthAsiaImg from '/public/assets/earth-asia-solid.svg'
const HSection2 = () => {
  return (
    <div className='bg-primary '>
      <div className='w-[95%] mx-auto py-[50px] flex max-lg:flex-col gap-[10px]'>

      <div className='flex items-center gap-[20px]'>
        <div className='max-w-[84px] flex-1  '>            
          <img src={awardImg} alt="image" className='h-[84px] w-[100%]' />
        </div>
        <div className='flex-1 flex-col'>
          <h4 className='text-[22px] font-bold text-secondary'>Proven</h4>
          <p className='text-[16px] mt-[10px] text-[#fff]'>Proven has helped to win millions for our clients</p>

        </div>
      </div>


      <div className='flex items-center gap-[20px]'>
        <div className='max-w-[84px] flex-1  '>            
          <img src={shieldImg} alt="imclassName='h-[84px] w-[100%]' age" />
        </div>
        <div className='flex-1 flex-col'>
          <h4 className='text-[22px] font-bold text-secondary'>Trusted</h4>
          <p className='text-[16px] mt-[10px] text-[#fff]'>We take our role as trusted legal advisors seriously</p>

        </div>
      </div>


      <div className='flex items-center gap-[20px]'>
        <div className='max-w-[84px] flex-1  '>            
          <img src={trophyImg} alt="image"className='h-[84px] w-[100%]'  />
        </div>
        <div className='flex-1 flex-col'>
          <h4 className='text-[22px] font-bold text-secondary'>Award Winning</h4>
          <p className='text-[16px] mt-[10px] text-[#fff]'>We are honored to have received multiple awards</p>

        </div>
      </div>



      <div className='flex items-center gap-[20px]'>
        <div className='max-w-[84px] flex-1  '>            
          <img src={earthAsiaImg} alt="img" className=' h-[84px] w-[100%]'  />
        </div>
        <div className='flex-1 flex-col'>
          <h4 className='text-[22px] font-bold text-secondary'>Multilingual</h4>
          <p className='text-[16px] mt-[10px] text-[#fff]'>Meet all your language & localization needs</p>

        </div>
      </div>

      </div>
    </div>
  )
}

export default HSection2