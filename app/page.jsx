"use client"
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='h-full flex flex-col px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:gap-8'>
      {/* Image */}
      <div className=' h-1/2 relative flex lg:h-full lg:w-1/2'>
        <Image src="/Hero-.png" alt="" fill className='object-contain z-0'/>
      </div>

      {/* Text */}
      <div className='h-1/2 flex flex-col justify-center gap-8 lg:h-full lg:w-1/2'>
        <h1 className='text-4xl lg:text-5xl font-bold'>Hello! I'm Shardul Khandebharad</h1>

        <p className=' md:text-xl'>An eager beginner in web and mobile app development, with a keen eye for crafting user-friendly applications and a drive to unlock unlimited potential in the digital realm.</p>

        <div className='flex gap-4'>
          <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button>
          <button className='p-4 rounded-lg ring-1 ring-black'>Contact Me</button>
        </div>

      </div>
    </div>
  )
}

export default page