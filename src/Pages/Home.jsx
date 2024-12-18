import React from 'react'
import HCallSec from '../components/HCallSec'
import HAboutSec from '../components/HAboutSec'
import HeroSec from '../components/HeroSec'
import HAchievementSec from '../components/HAchievementSec'
import Header from '../components/header/Header'
import Logo from '../components/header/Logo'

const Home = ({ scrollToSection }) => {
 
  return (
    <div >
      <div className='text-[#fff] flex flex-col items-center bg-gradient-to-r from-[#08132f] to-[#0c2b59] p-[40px]'>
        <Logo/>
        <h1 className='font-thin'>Ghuman law associates</h1>
      </div>
      <Header scrollToSection={scrollToSection}/>
    <HeroSec/>
    <HAboutSec/>
    <HAchievementSec/>
    <HCallSec/>
    </div>
  )
}

export default Home