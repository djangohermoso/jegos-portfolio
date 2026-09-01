import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#051123]">

        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Diego Lara</h1>
            <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">Software Developer | Cybersecurity / SOC</h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
                Computer Engineering graduate and in-house software developer who builds and runs a
                production school management system across five education levels. Comfortable across the
                stack &mdash; PHP/Laravel, MariaDB, Linux server administration &mdash; and hands-on with
                defensive security: firewall configuration, SIEM/IDS deployment, log analysis, and OSINT.
            </p>

            <div className="flex flex-wrap gap-4">
                <Link to="experience" smooth={true} duration={500}>
                    <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                        View Experience
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </Link>
                <a href="https://drive.google.com/file/d/1RNEoZWZoky3njhGNj4EV8QvYlsHU4SBQ/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                        My Resume
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Home
