import React from 'react';
import { Clock, Calendar, PhoneCall } from 'lucide-react';

const WorkingHours = () => {
  const hours = [
    { day: 'Monday', time: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', time: '8:00 AM - 5:00 PM' },
    { day: 'Wednesday', time: '8:00 AM - 5:00 PM' },
    { day: 'Thursday', time: '8:00 AM - 5:00 PM' },
    { day: 'Friday', time: '8:00 AM - 3:00 PM' },
    { day: 'Saturday', time: 'Emergency Only' },
    { day: 'Sunday', time: 'Closed' }
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  return (
    <div className="w-full md:w-60vw lg:w-60vw xl:w-60vw mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="bg-white p-5">
        <div className="flex items-center justify-center">
          <Calendar className="mr-3 text-white" size={24} />
          <h2 className="text-[2.5rem] font-bold text-blue-600 tracking-wide ">
            Office Hours
          </h2>
        </div>
      </div>
      
      <div className="px-6 py-4 space-y-3">
        {hours.map((dayHour) => (
          <div 
            key={dayHour.day} 
            className={`flex justify-between items-center p-3 rounded-md transition-all duration-200 ${
              dayHour.day === getCurrentDay() 
                ? 'bg-blue-50 border border-blue-200 font-semibold text-blue-900' 
                : 'hover:bg-gray-50 text-gray-700 hover:border hover:border-gray-200'
            }`}
          >
            <span className="font-medium text-base text-md">{dayHour.day}</span>
            <div className="flex items-center space-x-2">
              <Clock className="text-blue-600" size={16} />
              <span className="text-md">{dayHour.time}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-100 px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <PhoneCall className="text-blue-600" size={16} />
          <span className="text-sm text-gray-700">Emergency Contact</span>
        </div>
        <a 
          href="tel:+1-555-DENTAL" 
          className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
        >
          (555) 338-6825
        </a>
      </div>
    </div>
  );
};

export default WorkingHours;