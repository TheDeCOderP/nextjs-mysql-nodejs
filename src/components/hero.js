import React from 'react';

const Hero = (props) => {
  return (
    <div
      className="relative w-screen h-[85vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <div
        className="p-6 sm:p-8 rounded-md text-center max-w-[90%] sm:max-w-lg md:max-w-3xl bg-white/10 backdrop-blur-sm shadow-lg border border-white/20"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4 font-serif text-blue-700"
          style={{ textShadow: "2px 1px 2px white" }}
        >
          {props.heading}
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg font-medium text-blue-600"
          style={{ textShadow: "2px 1px 2px white" }}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default Hero;
