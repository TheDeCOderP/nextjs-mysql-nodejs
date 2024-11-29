import React from "react";
import { Clock, Calendar, PhoneCall } from "lucide-react";

const WorkingHours = () => {
  const hours = [
    { day: "Monday", time: "8:00 AM - 5:00 PM", isSpecial: false },
    { day: "Tuesday", time: "8:00 AM - 5:00 PM", isSpecial: false },
    { day: "Wednesday", time: "8:00 AM - 5:00 PM", isSpecial: false },
    { day: "Thursday", time: "8:00 AM - 5:00 PM", isSpecial: false },
    { day: "Friday", time: "8:00 AM - 3:00 PM", isSpecial: true },
    { day: "Saturday", time: "Emergency Only", isSpecial: true },
    { day: "Sunday", time: "Closed", isSpecial: true },
  ];

  const getCurrentDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[new Date().getDay()];
  };

  return (
    <div className="w-full max-w-full md:max-w-[80vw] mx-auto rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl bg-bgclr my-10">
      {/* Header */}
      <div className="bg-bgclr py-5 px-6 border-b border-gray-200">
        <div className="flex items-center justify-center space-x-3">
          <Calendar className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold text-headclr tracking-tight ">
            Office Hours
          </h2>
        </div>
      </div>

      {/* Working Hours List */}
      <div className="bg-bgclr px-6 py-5 space-y-3">
        {hours.map((dayHour) => (
          <div
            key={dayHour.day}
            className={`
              flex justify-between items-center 
              px-4 py-3 rounded-lg 
              transition-all duration-200 
              ${
                dayHour.day === getCurrentDay()
                  ? "bg-blue-100 border-2 border-headclr shadow-sm"
                  : "bg-white hover:bg-gray-100 shadow-sm"
              }
              ${dayHour.isSpecial ? "text-blue-800 font-semibold" : "text-gray-700"}
            `}
          >
            <span className="text-base font-medium tracking-tight">
              {dayHour.day}
            </span>
            <div className="flex items-center space-x-2">
              <Clock 
                className={`
                  ${
                    dayHour.isSpecial 
                    ? "text-blue-600" 
                    : "text-gray-500"
                  }
                `} 
                size={18} 
              />
              <span className="text-sm">
                {dayHour.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Footer */}
      <div className="bg-bgclr py-4 px-6 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <PhoneCall className="text-blue-600" size={20} />
          <span className="text-sm text-gray-600 font-medium">
            Emergency Contact
          </span>
        </div>
        <a
          href="tel:+1-555-DENTAL"
          className="
            text-sm font-semibold 
            text-blue-700 
            hover:text-blue-900 
            transition-colors 
            rounded-md 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-300
          "
        >
          (555) 338-6825
        </a>
      </div>
    </div>
  );
};

export default WorkingHours;