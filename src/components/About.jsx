import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-400'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Ryan, nice to meet you.</p>
          </div>
          <div>
            <p>
            As a Software Development Engineer, I possess a versatile skill set that enables me to handle both front-end and back-end development tasks. I am proficient in creating responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript, ensuring a seamless user experience across different devices. On the back-end, I excel in designing and implementing scalable server-side logic, API integrations, and database management using technologies such as Node.js and MongoDB. With a strong understanding of software architecture and system design principles, I am adept at building robust and secure web applications that meet clients' needs and deliver optimal performance. My experience as a Software Development Engineer allows me to take a holistic approach to projects, ensuring smooth coordination between the front-end and back-end components, and delivering high-quality solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
