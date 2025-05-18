import React from 'react'
import LatestBlog from './LatestBlog'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const TopBlog = () => {
    return (
        <div id='top' className='-m-[7vh] shadow-md w-[80%]  self-center relative z-10 p-8 rounded-4xl bg-white h-fit min-h-screen'>
            <h1 className='text-5xl !font-["Major_Mono_Display"] font-semibold py-8'>Top Blogs</h1>
            <div className='grid gap-8 grid-cols-3'>
                <motion.div variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }} className='flex cursor-pointer flex-col col-span-2 gap-4'>
                    <img src="https://www.asics.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-asics-us-Library/default/dw9931ca9d/firstspirit/media/blog_images_12_1_21/asics_blog_hero_desktop_benefits_of_running_10621.jpg" className='hover:scale-105  w-full h-[450px] object-cover rounded-2xl shadow-md' loading='lazy' alt="image" />
                    <span className='text-gray-600'>3 min</span>
                    <div>
                        <h2 className='text-2xl'>5-Minute Morning Meditation Routine</h2>
                        <span className='text-gray-600'>A short and effective breathing and visualization routine to reduce anxiety and increase productivity.</span>
                    </div>

                    <div className='flex gap-4 '>
                        <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="user" className='w-[40px] shadow-md object-cover rounded-full h-[40px]' />
                        <div>
                            <span className='text-gray-600'>Writer</span>
                            <p>Mohit Gupta</p>
                        </div>
                    </div>
                </motion.div>
                <div className='flex gap-4 flex-col'>

                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className='flex flex-col cursor-pointer '>
                        <img src="https://cms.menutiger.com/wp-content/uploads/2024/02/white-wine-and-salmon-dish-on-the-table-1024x536.jpg" className='w-full object-cover shadow-md h-[175px] hover:scale-105  rounded-2xl' loading='lazy' alt="image" />
                        <span className='text-gray-600'>4 min</span>
                        <div>
                            <h2 className='text-lg'>The Art of Brewing the Perfect Cup of Coffee</h2>
                            <span className='text-gray-600 text-sm'>Brewing coffee is more than a process; it's a craft. Explore techniques from grind size.</span>
                        </div>
                        <div className='self-end flex gap-4 text-right text-sm'>
                            <div>
                                <span className='text-gray-600'>Writer</span>
                                <p>Mohit Gupta</p>
                            </div>
                            <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="user" className='w-[40px] object-cover rounded-full h-[40px]' />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className='flex flex-col col-span-2 cursor-pointer'>
                        <img src="https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg" className='hover:scale-105 w-full object-cover h-[175px] rounded-2xl' loading='lazy' alt="image" />
                        <span className='text-gray-600'>5 min</span>
                        <div>
                            <h2 className='text-lg'>Exploring the Streets of Kyoto</h2>
                            <span className='text-gray-600 text-sm'>Kyoto is a city where tradition meets serenity. From its ancient temples to local street food</span>
                        </div>
                        <div className='self-end flex gap-4 text-right text-sm'>
                            <div>
                                <span className='text-gray-600'>Writer</span>
                                <p>Mohit Gupta</p>
                            </div>
                            <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="user" className='w-[40px] object-cover rounded-full h-[40px]' />
                        </div>
                    </motion.div>

                </div>
            </div>
            <LatestBlog />
        </div>
    )
}


export default TopBlog
