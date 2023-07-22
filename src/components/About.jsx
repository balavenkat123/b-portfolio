import React from "react";
// import AboutImg from "../assets/aboutme 1.jpg";

const About = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white md:h-screen" id="about">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 ">
            About Me
          </h2>

          <p className="pb-5 px-10 text-xl">
            Hi, My Name Is Bala venkat everyone calls me Bala. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <br />
          <p className="pb-5 px-10 text-xl">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>
          <br />

          <p className="pb-5 px-10 text-xl">In backend I know Node.js and firebase</p>

          <p className="pb-5 px-10 text-xl">
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p>
        </div>

        {/* <div className=" about-img ">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;