import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#051123]">

        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Diego Lara</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">Aspiring Frontend Developer/CyberSecurity Specialist</h2>
            {/* <p className="text-[#8892b0] py-4 max-w-[700px] ">My passion is Web Development, Web Design & Game Design</p> */}

            <div>
                <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"> <a href="https://drive.google.com/file/d/1RNEoZWZoky3njhGNj4EV8QvYlsHU4SBQ/view?usp=sharing" target="_blank">
                    My Resume 
                    </a>
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3" />
                    </span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Home