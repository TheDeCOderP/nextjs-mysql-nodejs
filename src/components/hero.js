import React from 'react'

const Hero = (props) => {
  return (
    <div
  className="relative w-screen h-[80vh] bg-cover bg-center flex items-center justify-center text-white ml-[-175px]"
  style={{
    backgroundImage: `url(${props.url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  <div
    className="p-8 rounded-md text-center max-w-3xl"
    style={{
        background: "rgba( 255, 255, 255, 0.1 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 3px )",
        // -webkit-backdrop-filter: "blur( 3px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )"
    }}
  >
    <h1 className="text-5xl font-bold uppercase mb-4 font-serif text-blue-800 " >{props.heading}</h1>
    <p className="text-[1.3rem] font-medium text-blue-600">
      {props.content}
    </p>
  </div>
</div>

  )
}

export default Hero
