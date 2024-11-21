import React from 'react'
import HCallSec from '../components/HCallSec'
import HAboutSec from '../components/HAboutSec'
import HeroSec from '../components/HeroSec'
import HAchievementSec from '../components/HAchievementSec'

const Home = () => {
 
  return (
    <div className=''>
    <HeroSec/>
    <HAboutSec/>
    <HAchievementSec/>
    <HCallSec/>
    </div>
  )
}

export default Home