import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Figma from '../assets/figma.png'
import AdobeXD from '../assets/xd.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#051123] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've use</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className=''>HTML</p>
                </div>

                <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className=''>CSS</p>
                </div>

                <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className=''>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className=''>React</p>
                </div>

                <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                    <p className=''>Github</p>
                </div>

                {/* <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className=''>Tailwind</p>
                </div> */}

                {/* <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                    <p className=''>Bootstrap</p>
                </div> */}

                <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Figma} alt="Figma icon" />
                    <p className=''>Figma</p>
                </div>

                <div className='shadow-md shadow-[#840c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Figma} alt="Figma icon" />
                    <p className=''>Wireshark</p>
                </div>

                

            </div>

        </div>
    </div>
  )
}

export default Skills