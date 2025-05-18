import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { colgroup } from 'framer-motion/client'


const card = ({ blog, index }) => {

    return (
        <motion.div
            variants={fadeIn("up", 0.01 * index)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            key={blog.title} className='flex py-4 relative flex-col  gap-1' >
            <img src={blog.image} alt={blog.title} className='w-80 shadow-lg h-48 object-cover rounded-xl' />
            <span className='text-sm text-gray-800'>{blog.readTime}</span>
            <h2 className='text-lg '>{blog.title}</h2>
            <p className='text-gray-600 text-sm'>{blog.subtitle.slice(0, 44)}</p>

            <div className=' flex gap-2 items-center relative text-xs'>
                <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt={blog.name} className='w-[35px] object-cover rounded-full h-[35px]' />
                <div>
                    <span className='text-gray-600'>Writer</span>
                    <p>{blog.author}</p>
                </div>
                <span className='text-xs absolute right-0 self-end'>{blog.date}</span>
            </div>
        </motion.div>
    )
}

export default card