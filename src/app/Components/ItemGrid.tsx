import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center bg-yellow-200 py-4 px-6 sm:px-12 md:px-16 text-black">
        
        {/* Links Section */}
        <div className="flex justify-center items-center gap-16 sm:gap-8 md:gap-12 lg:gap-16 flex-grow text-black">
          <Link href="/" className="text-lg hover:text-gray-700 transition-colors">
            Home
          </Link>
          <Link href="/pages/shop" className="text-lg hover:text-gray-700 transition-colors">
            Shop
          </Link>
          <Link href="/About" className="text-lg hover:text-gray-700 transition-colors">
            About
          </Link>
          <Link href="/pages/contact" className="text-lg hover:text-gray-700 transition-colors">
            Contact
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-black">
          
          {/* Contact Icon */}
          <div>
            <IoMdContact className="text-2xl hover:text-gray-700" />
          </div>
          
          {/* Search Icon */}
          <div>
            <CiSearch className="text-2xl hover:text-gray-700" />
          </div>
          
          {/* Wishlist Icon */}
          <div>
            <IoMdHeartEmpty className="text-2xl hover:text-gray-700" />
          </div>
          
          {/* Cart Icon */}
          <div>
            <IoCartOutline className="text-2xl hover:text-gray-700" />
          </div>

        </div>
        
      </div>
    </header>
  );
}
