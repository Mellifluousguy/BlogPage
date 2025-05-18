import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const HeroSection = () => {
  return (
    <div className='h-screen flex bg-gray-900 w-screen text-white'>
      <div className='w-[45%] mt-[10vh] gap-4 flex flex-col items-start justify-center px-10'>
        <motion.h1 variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }} className='text-6xl !font-["Major_Mono_Display"]'>Your Daily Dose of Digital Wisdom</motion.h1>
        <motion.h2 variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }} className='text-2xl'>Dive into ideas that inform, inspire, and ignite thought.</motion.h2>
        <motion.a variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }} href="#top" className='border-white border rounded-md px-6 py-2 hover:bg-white hover:text-gray-900'>Start Reading</motion.a>
      </div>
      <img src="hero.webp" className='w-[55%] h-full object-cover' alt="" />
    </div>
  )
}

export default HeroSection