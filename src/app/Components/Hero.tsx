import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center bg-yellow-200 py-4 px-6 sm:px-12 md:px-16">
      {/* Left Section (Text) */}
      <div className="flex flex-col justify-center items-start sm:w-1/2 md:w-1/3 mr-6 sm:ml-36 sm:mt-28 w-full text-center sm:text-left px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">Rocket Single</h1>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Seater</h1>
        <div>
          <h1 className="text-xl text-black mt-8 mb-4">Shop Now</h1>
          <div className="w-24 mx-auto border-t-2 border-gray-800 mt-2"></div>
        </div>
      </div>

      {/* Right Section (Image Card) */}
      <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 sm:mt-0 mt-10 px-4">
        <div className="bg-yellow-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-4">
          <div className="relative w-full pt-[75%]">
            <Image
              src="/sofa.png"
              alt="Sofa"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute inset-0 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
