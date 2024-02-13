import React from 'react'
import PersonalInfo from '../personal-info/personal-info'
import SecCol from '../sec-col/sec-cpl'

const Hero = () => {

  return (
    <header
        className='mt-[3rem] bg-black h-auto lg:mt-[5rem] lg:h-screen text-white'>
        <div className=' w-[92%] h-auto  mx-auto grid grid-cols-2 lg:h-[85vh] lg:w-[90%] '>
            <PersonalInfo />
            <SecCol />
        </div>
    </header>
  )
}

export default Hero