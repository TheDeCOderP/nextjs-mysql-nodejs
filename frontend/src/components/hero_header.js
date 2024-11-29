import React from 'react';

const Heroheader = (props) => {
  return (
    <>
      <div
        className="relative w-screen h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="p-6 sm:p-8 rounded-md text-center max-w-xl sm:max-w-3xl"
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(7px)",
            WebkitBackdropFilter: "blur(7px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <h1
            className="text-3xl sm:text-5xl font-bold uppercase mb-4 font-serif text-headclr"
            style={{
              textShadow: "2px 2px 1px black",
            }}
          >
            {props.heading}
          </h1>
          <p
            className="text-base sm:text-lg font-light"
            style={{
              textShadow: "1px 1px 1px black",
            }}
          >
            {props.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Heroheader;
