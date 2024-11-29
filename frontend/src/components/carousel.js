import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Savitha Johnson",
      position: "Marketing Executive",
      text: "The level of care and precision at this dental practice is truly exceptional. From the moment I walked in, I felt welcomed and understood. The team's commitment to patient comfort and advanced dental techniques is unparalleled.",
      avatar: "/savitha_jonhson.png",
      rating: 5,
    },
    {
      name: "Michael Cleark",
      position: "Software Engineer",
      text: "As someone who's always been anxious about dental visits, I can confidently say this clinic has transformed my perspective. The cutting-edge technology, combined with the staff's empathetic approach, makes every appointment a positive experience.",
      avatar: "/michael_claerk.png",
      rating: 5,
    },
    {
      name: "Emily Paul",
      position: "Educator",
      text: "I've been searching for a dental practice that truly prioritizes patient care and professional excellence. This clinic exceeds all expectations. Their comprehensive approach to dental health and personalized treatment plans are remarkable.",
      avatar: "/emily_paul.png",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`mx-1 ${
          index < rating ? "text-yellow-500 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-[90vw] bg-bgclr text-headclr py-8 rounded-lg mt-10 mx-auto border-4 border-blue-300">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Patient Testimonials</h2>
          <p className="text-base md:text-xl max-w-2xl mx-auto text-blue-600">
            Hear from our patients about their transformative dental experiences
            and the exceptional care they have received.
          </p>
        </div>

        <div className="relative bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <button
            onClick={prevTestimonial}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 
                       bg-btnclr text-white p-2 rounded-full 
                        transition-colors z-20 shadow-lg"
          >
            <ChevronLeft size={20} className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 
                       bg-btnclr text-white p-2 rounded-full 
                        transition-colors z-20 shadow-lg"
          >
            <ChevronRight size={20} className="w-6 h-6" />
          </button>

          <div className="text-center p-8 md:p-12 relative z-10">
            <Quote
              className="text-blue-500 mx-auto mb-4 opacity-20"
              size={100}
            />

            <p className="text-gray-800 text-base md:text-xl font-medium italic mb-4 min-h-[100px]">
              {testimonials[currentIndex].text}
            </p>

            <div className="flex justify-center mb-4">
              {renderStars(testimonials[currentIndex].rating || 5)}
            </div>

            <div className="flex items-center justify-center flex-col md:flex-row">
              {testimonials[currentIndex].avatar && (
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 md:mb-0 md:mr-6 object-cover border-4 border-blue-100"
                />
              )}
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-2xl font-semibold text-headclr">
                  {testimonials[currentIndex].name}
                </h3>
                {testimonials[currentIndex].position && (
                  <p className="text-gray-600 text-sm md:text-lg">
                    {testimonials[currentIndex].position}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 md:h-3 md:w-3 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 w-4 md:w-6"
                  : "bg-gray-300 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string,
      text: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default TestimonialCarousel;
