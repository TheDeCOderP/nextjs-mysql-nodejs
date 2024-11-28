import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DentalFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend a dental check-up and professional cleaning every six months to maintain optimal oral health and catch any potential issues early.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major dental insurance plans. Our front desk staff can help verify your coverage and assist with insurance claims.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide a comprehensive range of dental services including preventive care, cosmetic dentistry, teeth whitening, dental implants, orthodontics, and emergency dental treatments.",
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our office, using our online booking system, or sending an email. We offer flexible scheduling to accommodate your needs.",
    },
    {
      question: "What should I do in a dental emergency?",
      answer:
        "For dental emergencies, contact our office immediately. We provide same-day emergency appointments and can guide you on immediate steps to take while waiting to be seen.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[90vw] md:max-w-[80vw] mx-auto px-4 py-8 md:py-12 bg-gradient-to-r from-blue-50 to-blue-100 mt-10 border-4 border-blue-300 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "border-blue-400" : "border-blue-200"
            }`}
          >
            {/* Question Header */}
            <div
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 ${
                activeIndex === index ? "bg-blue-100" : "bg-white"
              } hover:bg-blue-50`}
            >
              <h3 className="text-base md:text-lg font-semibold text-blue-900">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <ChevronUp className="text-blue-700" />
              ) : (
                <ChevronDown className="text-blue-700" />
              )}
            </div>

            {/* Answer Section */}
            {activeIndex === index && (
              <div className="p-4 bg-blue-50 text-gray-700 border-t border-blue-200 text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentalFAQ;
