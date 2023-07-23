import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import bshop from '../assets/portfolio/bshpopz.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bshop,
      link:"https://b-shopzz.netlify.app",
      code:"https://github.com/balavenkat123?tab=repositories",
    },
    {
      id: 2,
      src: bshop,
      link:"https://b-shopzz.netlify.app",
      code:"https://github.com/balavenkat123?tab=repositories",
    },
    {
      id: 3,
      src: bshop,
      link:"https://b-shopzz.netlify.app",
      code:"https://github.com/balavenkat123?tab=repositories",
    },
    {
      id: 4,
      src: bshop,
      link:"https://b-shopzz.netlify.app",
      code:"https://github.com/balavenkat123?tab=repositories",
    },
    {
      id: 5,
      src: bshop,
      link:"https://b-shopzz.netlify.app",
      code:"https://github.com/balavenkat123?tab=repositories",
    },
    {
      id: 6,
      src: bshop,
      link:"https://b-shopzz.netlify.app",
      code:"https://github.com/balavenkat123?tab=repositories",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link} >
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a href="https://github.com/balavenkat123?tab=repositories">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;