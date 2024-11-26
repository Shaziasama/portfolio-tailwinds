import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 '>
    <div className='ml-[10%] mt-16'>
        <Image src="/image/rem.webp"alt='my-pic' width={300} height={300} className='rounded-full ml-[40%]'/>
        </div>
        <div>
        <h2 className='text-5xl text-left ml-[20%] font-bold text-cyan-600 gap-y-2 mt-16'>Hello <br />I am <br />Shazia Samma</h2>
        <div className='ml-[20%] flex gap-14 mt-12'>
        <button className='text-xl p-3 border-2 border-cyan-600 rounded-xl hover:text-red-400'><Link href="/about">About Me</Link></button>
        <button className='text-xl p-3 border-2 border-cyan-600 rounded-xl hover:text-red-400'><Link href="/contact">Contact Me</Link></button>
      
        </div>
    </div>
     </div> 
  )
}

export default Hero
