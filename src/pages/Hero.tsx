import React from "react";
// import MotionPath from "../animations/MotionPath";
import Underline from "../animations/MotionPath";

type HeroProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageSrc, imageAlt }) => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center py-20 px-4 max-w-6xl mx-auto">
      {/* Image on left */}
      <div className="w-full md:w-2/5 mb-8 md:mb-0">
        <img
          src={imageSrc}
          alt={imageAlt || "Hero Image"}
          className="rounded-lg object-cover w-full h-auto shadow-lg"
        />
      </div>

      {/* Text on right */}
      <div className="w-full md:w-3/5 md:pl-12  md:text-left">
        <h1
          id="title"
          className="text-4xl relative inline-block text-center leading-tight md:text-7xl font-extrabold tracking-tight"
        >
          {title}
          <div className="mb-2">
            <Underline />
          </div>
        </h1>
        {subtitle && (
          <p
            id="subtitle"
            className="mt-4  text-lg md:text-3xl font-extrabold  text-gray-500"
          >
            {subtitle}
          </p>
        )}
      </div>
      {/* <MotionPath /> */}
    </section>
  );
};

export default Hero;
