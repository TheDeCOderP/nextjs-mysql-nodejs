

import React from "react";


export default function HeroSection() {
    return (
      <div className="relative bg-cover bg-center h-96 mt-10"
           style={{
             backgroundImage: "url('/images/appo1.jpg')",
             animation: "changeBackground 5s infinite ease-in-out"
           }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-16">
          <h1 className="text-5xl font-extrabold">Book Your Appointment</h1>
          <p className="mt-4 text-xl">We are here to help you with your dental needs. Schedule an appointment today!</p>
        </div>
  
        {/* Local CSS for Background Animation */}
        <style jsx>{`
          @keyframes changeBackground {
            0% {
              background-image: url('/images/appo1.jpg');
            }
            33% {
              background-image: url('/images/appo2.jpg');
            }
            66% {
              background-image: url('/images/appo3.jpg');
            }
            100% {
              background-image: url('/images/appo2.jpg');
            }
          }
        `}</style>
      </div>
    );
  }
  