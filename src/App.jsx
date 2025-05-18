import React from 'react';
import HeroSection from './AllFiles/HeroSection';
import TopBlog from './AllFiles/TopBlog';
import Footer from './AllFiles/Footer';
import { motion, useScroll } from 'framer-motion';
import './App.css';

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          transformOrigin: "0% 0%",
          zIndex: 100,
        }}
        className="bg-red-400"
      />

      <div className='relative flex bg-gray-300 flex-col '>
        <nav className='flex w-[80%] shadow-md bg-white rounded-b-4xl justify-evenly fixed top-0 left-1/2 transform -translate-x-1/2 z-50 items-center h-[15vh]'>
          <h1 className=' !font-["Borel"] text-4xl self-center'>MelBlog</h1>
          <div className='w-fit text-gray-800 font-medium flex gap-8'>
            <a href="#" className='hover:text-gray-500'>Home</a>
            <a href="#top" className='hover:text-gray-500'>Top Blogs</a>
            <a href="#latest" className='hover:text-gray-500'>Latest Blogs</a>
          </div>

          <span className='flex items-center gap-4' >Mohit Gupta <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740" alt="avatar" className='w-[45px] h-[45px] object-cover rounded-full' /></span>
        </nav>
        <HeroSection />
        <TopBlog />
        <Footer />
      </div>
    </div>
  )
}

export default App