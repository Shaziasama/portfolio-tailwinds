import React from 'react'
import Image from 'next/image'

const project = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-600 underline lg:w-1/3 lg:mb-0 mb-4">
        My Projects
      </h1>
    
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image 
          width={300}
          height={300}
          
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/image/project1.png"

          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image 
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/image/project2.png"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image
          width={300}
          height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/image/project3.png"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
          width={300}
          height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/image/project-4.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/image/project5.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
          width={300}
          height={300}


            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/image/project6.png"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default project
