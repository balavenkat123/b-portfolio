import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import {CgArrowRight} from 'react-icons/cg'





const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-blue-900 to-blue-950 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' >
        <div className='flex flex-col justify-center h-full' >
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>Hi..i am front end developer</h2>
          
          <p className='text-rose-300 py-4 max-w-md'>I am a Frontend Developer. I build beautifull websites with React and Tailwind CSS
          <br />
          very enthusiastic to code,intersted in making different projects and explore in new technologies
          .</p>
          <div>
            <button className='group static text-black font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-300 to-purple-400 cursor-pointer animate-bounce'>
              portfolio😎 <span className='group-hover:rotate-90 duration-300'><CgArrowRight/> </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home