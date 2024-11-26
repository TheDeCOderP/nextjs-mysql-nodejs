import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: "Dr. Emily Rodriguez",
    specialty: "Orthodontics",
    experience: "15 years",
    image: "/emily1.png",
    bio: "Expert in braces, aligners, and jaw alignment treatments."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Periodontics",
    experience: "12 years",
    image: "/michel-chen.png",
    bio: "Specializes in gum disease treatment and implant surgery."
  },
  {
    id: 3,
    name: "Dr. Sarah Thompson",
    specialty: "Pediatric Dentistry",
    experience: "10 years",
    image: "/sara.png",
    bio: "Committed to children's oral health and preventive care."
  },
  {
    id: 4,
    name: "Dr. David Kim",
    specialty: "Endodontics",
    experience: "18 years",
    image: "/david.png",
    bio: "Renowned expert in root canal treatments and dental trauma care."
  },
  {
    id: 5,
    name: "Dr. Maria Garcia",
    specialty: "Prosthodontics",
    experience: "20 years",
    image: "/maria.png",
    bio: "Skilled in restorative dentistry and smile makeovers."
  }
];

const ScrollImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(handleNext, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-10 flex items-center justify-center gap-3">
        <UserCheck className="text-blue-600 w-10 h-10" />
        Our Expert Medical Team
      </h2>

      {/* Image and Info Section */}
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl">
        {/* Image Section */}
        <div className="relative h-[400px] md:h-[500px] group">
          <Image
            src={doctors[currentIndex].image}
            alt={doctors[currentIndex].name}
            fill
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-blue-50 transition group"
          >
            <ChevronLeft className="text-gray-700 group-hover:text-blue-600 w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-blue-50 transition group"
          >
            <ChevronRight className="text-gray-700 group-hover:text-blue-600 w-6 h-6" />
          </button>
        </div>

        {/* Info Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-blue-700">
            {doctors[currentIndex].name}
          </h3>
          <div className="mb-6 space-y-2">
            <p className="text-lg text-blue-600 font-semibold tracking-wide uppercase">
              {doctors[currentIndex].specialty}
            </p>
            <p className="text-gray-600 font-medium flex items-center gap-2">
              <span className="text-blue-500">●</span>
              Experience: {doctors[currentIndex].experience}
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            {doctors[currentIndex].bio}
          </p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {doctors.map((doctor, index) => (
          <button
            key={doctor.id}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View ${doctor.name}'s profile`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out hover:scale-125 ${
              index === currentIndex
                ? 'bg-blue-600 scale-125 shadow-md'
                : 'bg-gray-300 hover:bg-blue-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollImage;
