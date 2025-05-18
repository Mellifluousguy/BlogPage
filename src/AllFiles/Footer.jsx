import React from 'react'

const Footer = () => {
    return (
        <div className='h-[50vh]  pt-20 text-white grid bg-gray-800 gap-10 grid-cols-6 items-center'>
            <h1 className='col-span-2 text-5xl text-center border-r py-10 border-white !font-["Borel"] '>MelBlog</h1>
            <div className='flex-col border-r gap-6 border-white text-lg justify-evenly flex'>
                <a href="#">Home</a>
                <a href="top">Top Blog</a>
                <a href="latest">Latest</a>
            </div>
            <div className='flex-col border-r gap-6 border-white text-lg justify-evenly flex'>
                <a href="#">FAQ</a>
                <a href="#">Terms & Condition</a>
                <a href="#">About Us</a>
            </div>
            <div className='col-span-2 w-70'>
                <h4>Social Media</h4>
                <span><i className="fa-brands fa-instagram"></i></span>&nbsp;
                <span><i className="fa-brands fa-linkedin"></i></span>&nbsp;
                <span><i className="fa-brands fa-github"></i></span>&nbsp;
                <span><i className="fa-brands fa-twitter"></i></span>
                <br />
                <br />
                <h4>About Us</h4>
                <span className='text-sm'>Hello I am a webpage created by Mellifluousguy. </span>
            </div>
        </div>
    )
}

export default Footer