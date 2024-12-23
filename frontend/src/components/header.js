import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);  // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-white  p-2 shadow-md sticky w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-[70px] w-[200px] border-none" src="/logo.png" alt="Dental Clinic" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium text-[1.1rem] transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium text-[1.1rem] transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
                About
              </Link>
              <Link href="/treatment" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium text-[1.1rem] transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
                Treatments
              </Link>
              <Link href="/testimonials" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium text-[1.1rem] transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
                Testimonials
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-black px-3 py-2 rounded-md text-sm font-medium text-[1.1rem] transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105">
                Contact
              </Link>
              <Link href="/register" className="bg-btnclr hover:scale-105 text-white px-7 py-2 rounded-md text-sm font-medium">
                Register
              </Link>
              <Link href="/appointment" className="bg-btnclr hover:scale-105 text-white px-3 py-2 rounded-md text-sm font-medium">
                Book Appointment
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isOpen}
              aria-label="Main menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white text-center" onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/about" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white text-center" onClick={handleLinkClick}>
              About
            </Link>
            <Link href="/treatment" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white text-center" onClick={handleLinkClick}>
              Treatments
            </Link>
            <Link href="/testimonials" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white text-center" onClick={handleLinkClick}>
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white text-center" onClick={handleLinkClick}>
              Contact
            </Link>
            <Link href="/register" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white text-center" onClick={handleLinkClick}>
              Register
            </Link>
            <Link href="/appointment" className="bg-blue-500 block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700 text-center" onClick={handleLinkClick}>
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
