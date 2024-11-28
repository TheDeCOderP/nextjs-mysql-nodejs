import React from "react";
import { Clock, Calendar, PhoneCall } from "lucide-react";

const WorkingHours = () => {
  const hours = [
    { day: "Monday", time: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
    { day: "Thursday", time: "8:00 AM - 5:00 PM" },
    { day: "Friday", time: "8:00 AM - 3:00 PM" },
    { day: "Saturday", time: "Emergency Only" },
    { day: "Sunday", time: "Closed" },
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
    <div className="max-w-[95vw] md:max-w-[80vw] mx-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 my-8 bg-gradient-to-r from-blue-50 to-blue-100 border-4 border-blue-300">
      {/* Header */}
      <div className="bg-white py-4 px-6 text-center overflow-hidden">
        <div className="flex justify-center items-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-md ">
          <Calendar className="mr-2 text-blue-500" size={20} />
          <h2 className="text-xl md:text-4xl font-bold text-blue-600">
            Office Hours
          </h2>
        </div>
      </div>

      {/* Working Hours */}
      <div className="px-4 py-6 space-y-4">
        {hours.map((dayHour) => (
          <div
            key={dayHour.day}
            className={`flex justify-between items-center py-3 px-4 rounded-lg shadow-sm transition-all duration-200 ${
              dayHour.day === getCurrentDay()
                ? "bg-blue-100 border border-blue-300 font-semibold text-blue-800"
                : "bg-white hover:bg-gray-50 text-gray-700 shadow-xl"
            }`}
          >
            <span className="text-sm md:text-base font-medium">
              {dayHour.day}
            </span>
            <div className="flex items-center space-x-2">
              <Clock className="text-blue-600" size={16} />
              <span className="text-sm md:text-base">{dayHour.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-4 px-6 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <PhoneCall className="text-blue-600" size={18} />
          <span className="text-xs md:text-sm text-gray-700">
            Emergency Contact
          </span>
        </div>
        <a
          href="tel:+1-555-DENTAL"
          className="text-xs md:text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
        >
          (555) 338-6825
        </a>
      </div>
    </div>
  );
};

export default WorkingHours;
