import React from "react";
import { hero, icons } from "../api/api";
import imageHeroDesktop from "../assets/image-hero-desktop.png";
import imageHeroMobile from "../assets/image-hero-mobile.png";

const Hero = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1200px] mx-auto px-8 gap-4 h-full">
        <div className="grid md:grid-cols-2">
          <div className="flex md:hidden justify-center">
            <img
              src={imageHeroMobile}
              alt="hero image"
              className="max-h-[80vh] max-w-full py-6"
            />
          </div>
          {/* left side */}
          <div className="flex justify-center flex-col">
            {hero.map((label, index) => (
              <div className="py-4" key={index}>
                {label.title && (
                  <h1 className="text-center md:text-left text-4xl md:text-7xl font-bold">
                    {label.title}
                  </h1>
                )}
                {label.subTitle && (
                  <p className="text-md md:text-lg text-gray-700 font-medium text-center md:text-left">
                    {label.subTitle}
                  </p>
                )}
                {label.btn && (
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-black px-6 py-2 rounded-full text-white font-bold">
                      {label.btn}
                    </button>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-4 pt-16">
              {icons.map((icon, i) => (
                <div key={i} className="flex items-center justify-center">
                  <img src={icon.icon} alt="icons" />
                </div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="hidden md:flex justify-center">
            <img
              src={imageHeroDesktop}
              alt="hero image"
              className="max-h-[80vh]  max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
