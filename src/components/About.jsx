/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-[#0a192f] text-gray-300 py-24'>
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
              <p>
                Computer Engineering graduate and in-house software developer. I build and run a
                production school management system that serves five education levels, and I work
                hands-on with defensive security &mdash; firewall configuration, SIEM/IDS deployment,
                log analysis, and OSINT. I'm looking for a developer or entry-level cybersecurity/SOC role.
              </p>
              <br />
              <p>
                Outside of work I'm a gamer at heart and enjoy game design in Unreal Engine. My favorite
                movie is The Godfather, and my favorite song is Soul to Squeeze by RHCP.
              </p>
            </div>
          </div>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pt-12'>
            <div>
              <p className='text-2xl font-bold text-gray-200 pb-2'>Education</p>
              <p className='font-semibold text-gray-100'>Polytechnic University of the Philippines</p>
              <p className='text-sm text-gray-400'>BS Computer Engineering &nbsp;&middot;&nbsp; 2018 &ndash; 2025</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-gray-200 pb-2'>Certifications</p>
              <ul className='list-disc list-inside space-y-1 text-gray-300'>
                <li>Cisco &mdash; Introduction to Cybersecurity</li>
                <li>Cisco &mdash; Networking Essentials</li>
                <li>TESDA &mdash; Creative Web Development</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
