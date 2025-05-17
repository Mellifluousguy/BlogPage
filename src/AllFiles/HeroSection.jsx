import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-screen flex bg-gray-900 w-screen text-white'>
      <div className='w-[45%] mt-[10vh] gap-4 flex flex-col items-start justify-center px-10'>
        <h1 className='text-6xl !font-["Major_Mono_Display"]'>Your Daily Dose of Digital Wisdom</h1>
        <h2 className='text-2xl'>Dive into ideas that inform, inspire, and ignite thought.</h2>
        <a href="#top" className='border-white border rounded-md px-6 py-2 hover:bg-white hover:text-gray-900'>Start Reading</a>
      </div>
      <img src="hero.webp" className='w-[55%] h-full object-cover' alt="" />
    </div>
  )
}

export default HeroSection