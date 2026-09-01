import React from 'react';
import Movie from '../assets/movie.png';
import Qmart from '../assets/qmart.png';
import Sneakers from '../assets/sneakers.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: 'linear-gradient(135deg, #0a192f 0%, #112240 55%, #db2777 130%)' }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-pink-600 tracking-wider'>
                School Management System
              </span>
              <div className='pt-8 text-center'>
                <a href='https://drive.google.com/file/d/1RNEoZWZoky3njhGNj4EV8QvYlsHU4SBQ/view?usp=sharing' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Movie})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-pink-600 tracking-wider'>
                Movie App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://djangohermoso.github.io/jegflix-react/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Qmart})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-pink-600 tracking-wider'>
                MegaQmart 
              </span>
              <div className='pt-8 text-center'>
                <a href='https://djangohermoso.github.io/MegaQMart/index.html' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Sneakers})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-pink-600 tracking-wider'>
                Sneaker App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://djangohermoso.github.io/sneaker-app/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;