import React from "react";
import armoon from "../assets/portfolio/ar-moon.png";
import bkbikes from "../assets/portfolio/bk-bikes.png";
import bcounter from "../assets/portfolio/bcounter.png";
import bshop from '../assets/portfolio/bshpopz.png';
import portfolio from '../assets/portfolio/portfolio.png';

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
      src: bcounter,
      link:"bcounter.netlify.app",
      code:"https://github.com/balavenkat123/counter-js",
    },
    {
      id: 3,
      src: bkbikes,
      link:"https://b-shopzz.netlify.app",
      code:"https://github.com/balavenkat123?tab=repositories",
    },
    {
      id: 4,
      src: armoon,
      link:"https://brook-loving-recorder.glitch.me/",
      code:"https://github.com/balavenkat123?tab=repositories",
    },
    {
      id: 5,
      src: portfolio,
      link:"https://balavenkat.vercel.app/",
      code:"https://github.com/balavenkat123/b-portfolio",
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