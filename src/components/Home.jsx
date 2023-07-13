import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-blue-300'>Ryan Bagan</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I am a Full Stack Developer.</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>Some text</p>
        <div>
          <button>View Work <HiArrowNarrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Home
