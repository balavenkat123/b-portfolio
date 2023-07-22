import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactPortfolio2 from "../assets/portfolio/reactPortfolio2.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src: arrayDestruct
      // link: "https://b-shopzz.netlify.app"

    },
    {
      id:2,
      src: installNode
      

    },
    {
      id:3,
      src: navbar

    },
    {
      id:4,
      src: reactParallax

    },
    {
      id:5,
      src: reactPortfolio2

    },
    {
      id:6,
      src: reactSmooth

    },
  ]

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-blue-950 to-blue-900 text-white md:h-screen">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-grey-500'>Portfolio</p>
          <p className='py-6' >check some works of mine</p>
        </div>
      
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {/* {portfolios.map(({id,src}) =>{
            

          })} */}
          <div  className='shadow-md shadow-purple-800 rounded-lg'>
              <img  src={arrayDestruct} alt="" className='hover:scale-105 duration-200 rounded-md'/>
              <div className='flex items-center justify-center '>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150 font-bold  '>Demo</button>
                <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150 font-bold'>Code</button>
              </div>
          </div>
          

          
        </div>
      </div>  
    </div>
  )


  
}

export default Portfolio