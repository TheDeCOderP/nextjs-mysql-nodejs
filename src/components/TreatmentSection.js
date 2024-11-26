import React, { useState } from "react";

const TreatmentSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const treatments = [
    {
      icon: "./root-canal.png",
      title: "Root Canal Treatment",
      shortDesc: "Advanced care for damaged teeth",
      fullDesc: "State-of-the-art treatment using the latest technology for a pain-free experience."
    },
    {
      icon: "./tooth-whitening.png",
      title: "Teeth Whitening",
      shortDesc: "Professional whitening solutions",
      fullDesc: "Advanced whitening techniques for a brighter, more confident smile."
    },
    {
      icon: "./implant.png",
      title: "Dental Implants",
      shortDesc: "Permanent tooth replacement",
      fullDesc: "Long-lasting, natural-looking implants using cutting-edge techniques."
    },
    {
      icon: "./braces.png",
      title: "Orthodontics",
      shortDesc: "Align and straighten teeth",
      fullDesc: "Expert treatments to fix misaligned teeth with braces or clear aligners."
    },
    {
      icon: "./dental-crown.png",
      title: "Cosmetic Dentistry",
      shortDesc: "Enhance your smile",
      fullDesc: "Improve the aesthetics of your smile with veneers, crowns, and more."
    },
    {
      icon: "./teethgum.png",
      title: "Gum Treatments",
      shortDesc: "Healthy gums, healthy smile",
      fullDesc: "Advanced periodontal care to treat gum disease and improve oral health."
    },
    {
      icon: "./toothrestore.png",
      title: "Dentures",
      shortDesc: "Comfortable tooth replacement",
      fullDesc: "Custom-fitted dentures for a natural and comfortable fit."
    },
    {
      icon: "teethclean.png",
      title: "Dental Cleaning",
      shortDesc: "Maintain oral hygiene",
      fullDesc: "Thorough professional cleaning to keep your teeth and gums healthy."
    }
  ];

  return (
    <div className="max-w-[1200px] my-8 mx-auto px-6 overflow-x-hidden">
      <h1 className="text-4xl mb-12 text-center font-bold bg-gradient-to-r from-blue-900 via-blue-600 to-blue-500 bg-clip-text text-transparent relative pb-4 drop-shadow-lg">
        Our Treatments
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-800 rounded-sm"></span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-2">
        {treatments.map((treatment, index) => (
          <div 
            key={index} 
            className="relative h-80 perspective-[1000px]"
            onMouseEnter={() => setFlippedCard(index)}
            onMouseLeave={() => setFlippedCard(null)}
          >
            <div className={`
              relative w-full h-full transition-transform duration-1000 
              ${flippedCard === index ? 'rotate-y-180' : 'rotate-y-0'}
              ease-in-out transform-3d
            `}>
              {/* Front of Card */}
              <div className={`
                absolute w-full h-full backface-hidden rounded-3xl p-10 
                flex flex-col items-center justify-center text-center 
                bg-white shadow-md border border-black-200 
                bg-gradient-to-br from-white to-slate-50
                ${flippedCard === index ? 'opacity-0 invisible' : 'opacity-100 visible'}
                transition-all duration-1000 ease-in-out transform
              `}>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform group-hover:-translate-y-2">
                  <img 
                    src={treatment.icon} 
                    alt={treatment.title} 
                    className="w-20 h-20 object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="my-4 text-xl font-bold text-blue-900 tracking-tight">{treatment.title}</h3>
                <p className="text-base text-slate-600 font-medium">{treatment.shortDesc}</p>
              </div>

              {/* Back of Card */}
              <div className={`
                absolute w-full h-full backface-hidden rounded-3xl p-10 
                flex flex-col items-center justify-center text-center 
                bg-gradient-to-br from-blue-600 to-blue-800 text-white 
                rotate-y-180 shadow-xl
                ${flippedCard === index ? 'opacity-100 visible' : 'opacity-0 invisible'}
                transition-all duration-1000 ease-in-out transform
              `}>
                <h3 className="mb-6 text-xl font-bold">{treatment.title}</h3>
                <p className="text-lg text-white/90 max-w-[90%] mx-auto leading-relaxed">{treatment.fullDesc}</p>
                <a 
                  href="/appointment" 
                  className="mt-8 px-6 py-3 bg-white/20 border border-white/40 rounded-xl text-white font-medium transition-all hover:bg-white/30 hover:-translate-y-1"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentSection;