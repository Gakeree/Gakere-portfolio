import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    { logo: "logo-instagram",href:" ", target:"_blank"},
    { logo: "logo-twitter",href:"https://twitter.com/ProudKenyan13", target:"_blank"},
    { logo: "logo-facebook",href:" ", target:"_blank"},
    { logo: "logo-linkedin",href:"", target:"_blank"},
    { logo: "logo-github",href:"https://github.com/Gakeree", target:"_blank"},
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-1/2  w-1/2 h-full object-fit rounded-full" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Kenedy Gakere</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <a href="#contact" className="btn-primary mt-8 w-40">Contact Me</a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <a href={icon.href} target={icon.target}>
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon.logo}></ion-icon>
              </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
