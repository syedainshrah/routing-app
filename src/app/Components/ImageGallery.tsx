import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

export default function ImageGallery() {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[316px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/rect.png"
          alt="Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1440px"
          className="object-cover"
        />
      </div>

      {/* House Icon */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/house.png"
          alt="House Icon"
          width={100}
          height={100}
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-0 left-0 w-full text-center pb-6 md:pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
          Shop
        </h1>
        
        <div className="flex items-center justify-center space-x-2 text-base sm:text-lg">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
          <IoIosArrowForward className="text-gray-600" />
          <span className="text-gray-800">Shop</span>
        </div>
      </div>
    </div>
  );
}