import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 font-bold">
          If you're looking for a web developer who is passionate about creating beautiful, functional websites,
           then I would love to hear from you. <br/>Please take a look at my portfolio to see some of my recent work, 
           and feel free to contact me if 
          you have any questions or would like to discuss a potential project.
          <br/> Thank you for visiting my website!
          </p>
          <a href="#contact" className="btn-primary mt-10 w-fit text-center">Say Hello</a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[23rem] h-80 lg:absolute bottom-0 -right-3 object-fit rounded-full"
        />
      </div>
    </section>
  );
};

export default Hireme;
