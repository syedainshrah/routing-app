// components/ProductCard.tsx

'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
  return (
    <div className="w-full h-auto bg-yellow-50 p-4">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:px-10">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <Image
            src="/Asgaard.png"
            alt="Sofa"
            width={983}
            height={799}
            className="w-full h-auto object-cover" // Make sure the image is responsive and maintains aspect ratio
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center sm:w-1/2 sm:ml-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">New Arrivals</h1>
          <h2 className="font-bold text-3xl sm:text-5xl mt-2">Asgaard Sofa</h2>

          {/* Link for navigation to the dynamic product page */}
          <Link href={`/Components/1`}>
            <button className="mt-4 px-6 py-2 border-2 border-black rounded-md hover:bg-black hover:text-white transition-all duration-300">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
