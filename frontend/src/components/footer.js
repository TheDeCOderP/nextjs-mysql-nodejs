'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="bg-gradient-to-r from-[#0a1426] to-[#1a365d] text-white px-4 relative overflow-hidden w-full p-2 text-center">
      
      <div>
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
