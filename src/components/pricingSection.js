import React from 'react';
import { Check, X, Stethoscope } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      icon: <Stethoscope className="text-blue-500" size={48} />,
      name: 'Basic Dental Care',
      price: 99,
      features: [
        'Comprehensive Dental Exam',
        'Annual X-Rays',
        'Professional Cleaning',
        'Basic Consultation'
      ],
      unavailableFeatures: [
        'Advanced Cosmetic Treatments',
        'Orthodontic Consultations'
      ],
      recommended: false,
      bgColor: 'bg-white',
      textColor: 'text-blue-900'
    },
    {
      icon: <Stethoscope className="text-blue-600" size={48} />,
      name: 'Premium Dental Package',
      price: 249,
      features: [
        'Comprehensive Dental Exam',
        'Full Mouth X-Rays',
        'Professional Cleaning',
        'Advanced Consultation',
        'Teeth Whitening',
        'Emergency Dental Care'
      ],
      unavailableFeatures: ['Major Surgical Procedures'],
      recommended: true,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-950'
    },
    {
      icon: <Stethoscope className="text-blue-700" size={48} />,
      name: 'Comprehensive Care',
      price: 399,
      features: [
        'Comprehensive Dental Exam',
        'Full Mouth X-Rays',
        'Professional Cleaning',
        'Advanced Consultation',
        'Teeth Whitening',
        'Emergency Dental Care',
        'Orthodontic Consultation',
        'Advanced Cosmetic Treatments'
      ],
      unavailableFeatures: [],
      recommended: false,
      bgColor: 'bg-white',
      textColor: 'text-blue-900'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-blue-100 border-4 border-blue-300 rounded-lg w-[90vw] sm:w-[80vw] mx-auto my-10">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
            Our Dental Care Packages
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Choose the perfect dental care plan tailored to your needs. 
            Quality healthcare at transparent, affordable prices.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`
                ${plan.bgColor} ${plan.textColor}
                rounded-2xl shadow-lg overflow-hidden transform
                transition-all duration-300
                border border-gray-200
                ${plan.recommended ? 'scale-105 border-blue-500' : 'hover:shadow-2xl'}
              `}
            >
              <div className="p-6 sm:p-8 flex flex-col h-full">
                {/* Plan Icon and Name */}
                <div className="flex items-center mb-4 sm:mb-6">
                  {plan.icon}
                  <div className="ml-3">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {plan.name}
                      {plan.recommended && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Most Popular
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                {/* Price Section */}
                <div className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
                  ${plan.price}
                  <span className="text-sm sm:text-base text-gray-500 ml-2">
                    / year
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="text-green-500 mr-2" size={20} />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                  {plan.unavailableFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-400 line-through"
                    >
                      <X className="text-red-300 mr-2" size={20} />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Select Plan Button */}
                <button
                  className="
                    w-full py-3 rounded-lg
                    bg-blue-600 text-white
                    hover:bg-blue-700 transition-colors
                    font-semibold text-sm sm:text-base
                    mt-auto
                  "
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
