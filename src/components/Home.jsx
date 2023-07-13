import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-blue-300'>Ryan Bagan</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full Stack Developer.</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>As a full stack developer, I possess a versatile skill set that enables me to handle both front-end and back-end development tasks. I am proficient in creating responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript, ensuring a seamless user experience across different devices. On the back-end, I excel in designing and implementing scalable server-side logic, API integrations, and database management using technologies such as Node.js and MongoDB. With a strong understanding of software architecture and system design principles, I am adept at building robust and secure web applications that meet clients' needs and deliver optimal performance. My experience as a full stack developer allows me to take a holistic approach to projects, ensuring smooth coordination between the front-end and back-end components, and delivering high-quality solutions that exceed expectations.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3' />
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
