import React from "react";
import { FaTooth, FaMoneyBillAlt, FaUserMd, FaRobot } from "react-icons/fa";

const DentalCard = () => {
  return (
    <div className=" text-gray-800 p-6 md:p-10 rounded-lg shadow-lg mx-auto max-w-[90vw] md:max-w-[80vw] border-4 border-blue-300 my-10 bg-bgclr">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8 text-center text-headclr">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {/* Card Item */}
        <div className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 rounded-lg border border-gray-400 transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
          <div className="p-3 md:p-4 bg-blue-600 text-white rounded-full shadow-md flex items-center justify-center">
            <FaTooth className="text-xl md:text-2xl" />
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Expert Consultations
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Enjoy free consultations with our experienced dental professionals, committed to your oral health.
            </p>
          </div>
        </div>
        {/* Card Item */}
        <div className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 rounded-lg border border-gray-400 transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
          <div className="p-3 md:p-4 bg-blue-600 text-white rounded-full shadow-md flex items-center justify-center">
            <FaMoneyBillAlt className="text-xl md:text-2xl" />
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Transparent Pricing
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Receive upfront cost estimates with 0% EMI options to suit your financial needs.
            </p>
          </div>
        </div>
        {/* Card Item */}
        <div className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 rounded-lg border border-gray-400 transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
          <div className="p-3 md:p-4 bg-blue-600 text-white rounded-full shadow-md flex items-center justify-center">
            <FaUserMd className="text-xl md:text-2xl" />
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Safe & Sterile Clinics
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Our clinics meet the highest standards of cleanliness and safety for your peace of mind.
            </p>
          </div>
        </div>
        {/* Card Item */}
        <div className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 rounded-lg border border-gray-400 transition-all duration-300 hover:border-blue-600 hover:shadow-lg">
          <div className="p-3 md:p-4 bg-blue-600 text-white rounded-full shadow-md flex items-center justify-center">
            <FaRobot className="text-xl md:text-2xl" />
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              AI-Powered Precision
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Benefit from cutting-edge AI technology, ensuring precise and reliable dental treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCard;
