import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



const About = () => {
  return (
    <div>
      <div className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/image/rem.webp"
      width={400}
      height={200}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-400 hover:text-red-200">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed text-cyan-100">
        I am a student at GIAIC,pursuing a course in Artificial Intelligence, web 3.0.Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
      <div className="flex justify-center">
        <button className="ml-4 inline-flex text-[30px] text-black bg-white border-0 py-2 px-6 rounded text-lg">
        
        <FaGithub />
        
        </button>

    
        <button className="ml-4 inline-flex text-[30px] bg-blue-700 text-white border-0 py-2 px-6 rounded text-lg">
        <FaLinkedin />

        </button>
      </div>
    </div>
</div>
</div>
</div>
  )
}

export default About

