/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Diego, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Passionate about technology, driven to become a SOC analyst, and a gamer at heart. And also I love Game Designing using Unreal Engine.
              </p>
              <p>I like to explore new technologies and try out new things</p> 
              <br />
              <p>My favorite movie is The Godfather, and my favorite music is Soul to Squeeze by RHCP </p>
              
             
              
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default About