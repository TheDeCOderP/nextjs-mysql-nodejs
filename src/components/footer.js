



'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Logo1 from '../assets/logo1.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: 'fa-brands fa-facebook',
      href: 'https://www.facebook.com/prabishac/',
      ariaLabel: 'Facebook',
    },
    {
      icon: 'fa-brands fa-twitter',
      href: 'https://x.com/PrabishaC',
      ariaLabel: 'Twitter',
    },
    {
      icon: 'fa-brands fa-whatsapp',
      href: 'https://wa.me/447867090363',
      ariaLabel: 'WhatsApp',
    },
    {
      icon: 'fa-brands fa-instagram',
      href: 'https://www.instagram.com/prabishahr/',
      ariaLabel: 'Instagram',
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0a1426] to-[#1a365d] text-white py-10 sm:py-16 px-4 sm:px-8 relative overflow-hidden ">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3182ce] to-[#63b3ed]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {/* Company Section */}
        <div className="lg:pr-12 text-center sm:text-left">
          <div className="mb-6 flex justify-center sm:justify-start">
          <img className='mb-4' src='./logo1.png' alt='logo' />
          </div>
          <p className="text-gray-300 leading-relaxed text-md mb-6 max-w-md mx-auto sm:mx-0">
            Committed to your oral health and well-being. 
          </p>
          <h3 className="text-xl font-semibold mb-4 relative pb-3 text-center sm:text-left after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#3182ce] after:to-[#63b3ed] after:rounded-sm">
            Follow Us On
          </h3>
          <div className="flex space-x-4 justify-center sm:justify-start">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="bg-white/10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-200 hover:bg-[#63b3ed] hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <i className={`${link.icon} text-xl`}></i>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#3182ce] after:to-[#63b3ed] after:rounded-sm">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Treatments', 'Testimonials', 'Contact'].map(
              (link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-300 text-md hover:text-[#63b3ed] transition-all duration-300 hover:translate-x-1.5"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#3182ce] after:to-[#63b3ed] after:rounded-sm">
            Our Services
          </h3>
          <ul className="space-y-3">
            {[
              'General Checkups',
              'Teeth Fillings',
              'Root Canals',
              'Teeth Whitening',
              'Orthodontics',
            ].map((service, index) => (
              <li key={index} className="text-gray-300 text-md">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-    xl font-semibold mb-4 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#3182ce] after:to-[#63b3ed] after:rounded-sm">
            Stay Connected
          </h3>
          <div className="mb-6">
            <div className="flex justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[190px] p-3 text-sm text-black border-2 border-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#63b3ed]"
              />
              <button className="bg-[#1363DF] text-white px-4 py-3 text-sm rounded-r-lg hover:bg-[#3182ce] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-12">
            <ul className="space-y-3">
              <li className="flex items-center justify-center sm:justify-start text-gray-300 text-md">
                <i className="fas fa-phone-alt mr-3 text-white"></i>
                <span>09599824600</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start text-gray-300 text-md">
                <i className="far fa-envelope mr-3 text-white"></i>
                <span>www.prabisha.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start text-gray-300 text-md text-center sm:text-left">
                <i className="fas fa-map-marker-alt mr-3 text-white"></i>
                <span>
                  Prabisha Consulting Pvt.Ltd, Pocket, Sector D, Vasant Kunj,
                  New Delhi, Delhi 110070
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm border-t border-white/10 h-[3vh]">
        © 2024. All Rights Reserved by{' '}
        <Link
          href="#"
          className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
        >
          Prabisha Consulting
        </Link>
      </div>
    </footer>
  );
};

export default Footer;