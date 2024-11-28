import React, { useState } from 'react';
import { Play } from 'lucide-react';

const TeamSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const teamMember = {
    name: "Our Team",
    image: "/our_team.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Our dental team consists of highly skilled doctors with extensive experience in providing top-quality care, combining years of expertise in various specialties to ensure the best outcomes for our patients."
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-8 md:py-12 bg-blue-50 mt-10  mx-auto rounded-lg">
      <h1 className="relative text-3xl md:text-4xl font-bold text-blue-900 mb-6 md:mb-12 text-center">
        Our Team
      </h1>
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="relative">
            <div 
              className="cursor-pointer group overflow-hidden"
              onClick={() => setIsVideoOpen(true)}
            >
              <img 
                src={teamMember.image} 
                alt={teamMember.name} 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center">
                <Play 
                  className="w-16 h-16 md:w-24 md:h-24 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 text-center">
            <p className="text-blue-800 text-sm sm:text-base md:text-[1.2rem] max-w-2xl mx-auto">
              {teamMember.description}
            </p>
          </div>
        </div>

        {isVideoOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setIsVideoOpen(false)}
          >
            <div 
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-4 right-0 text-white text-2xl md:text-3xl"
                onClick={() => setIsVideoOpen(false)}
              >
                ×
              </button>
              <iframe 
                width="100%" 
                height="auto" 
                src={teamMember.videoUrl}
                title={`${teamMember.name} Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
