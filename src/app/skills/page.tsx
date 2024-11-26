import React from 'react'

const skills = () => {
  return (
    <div>
      <h1 className='mt-24 text-center text-4xl font-bold text-cyan-600 underline' >My Skills</h1>
      <p className='mt-24 text-center text-font-semibold text-cyan-200 pl-36 pr-36'> 
      I have a solid foundation in web development,specializing in HTML ,CSS and Javascript.My experience extends to using frameworks like
        React, Next.js, and Tailwind CSS. I am also proficient in using other popular web development tools like
        Git, GitHub, and npm. I am always learning and adapting to new technologies and best practices.
      </p>
      <ul>
    
    
    
      
        <li className='text-2xl text-white font-semibold ml-24  mt-20 mb-6'>HTML</li><div className= " ml-44 mb-1 w-[40%] h-4 rounded-2xl bg-green-500"></div>
        <li className='text-2xl text-white font-semibold ml-24 mb-3'>CSS</li><div className= " ml-44 mb-1 w-[35%] h-4 rounded-2xl bg-orange-600"></div>
        
        <li className='text-2xl text-white font-semibold ml-24 mb-6'>Javascript</li><div className= " ml-44 mb-1 w-[38%] h-4 rounded-2xl bg-yellow-400"></div>
        <li className='text-2xl text-white font-semibold ml-24 mb-6'>React</li>
        <div className= " ml-44 mb-1 w-[25%] h-4 rounded-2xl bg-blue-600"></div>
        <li className='text-2xl text-white font-semibold ml-24  mb-6'>Tailwind CSS</li>
        <div className= " ml-44 mb-1 w-[25%] h-4 rounded-2xl bg-red-600"></div>
        <li className='text-2xl text-white font-semibold ml-24 mb-6'>Next.js</li>
        <div className=" ml-44 mb-20 w-[40%] h-4 rounded-2xl bg-violet-500"></div>
        
    
        

      </ul>
    </div>
  )
}

export default skills
