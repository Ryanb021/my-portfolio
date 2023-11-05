import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-blue-300'>Ryan Bagan</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Software Development Engineer.</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>
          My passion as a Software Development Engineer stems from my deep fascination with the intersection of technology and creativity. I am driven by the opportunity to bring ideas to life through innovative and user-centric web applications. The ability to continuously learn, adapt, and contribute to every layer of the development stack fuels my enthusiasm and motivates me to create impactful and dynamic digital experiences.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <Link to="work" spy={true} smooth={true} duration={500}>
                <HiArrowNarrowRight className='ml-3' />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
