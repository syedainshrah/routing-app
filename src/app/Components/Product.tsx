
import React from 'react';
import Image from 'next/image';

export default function Product() {
  return (
    <div>
      {/* Title Section */}
      <h1 className="font-bold text-center mt-7 text-3xl sm:text-4xl md:text-5xl">
        Top Pick For You
      </h1>
      <p className="text-center mt-2 text-sm sm:text-lg md:text-xl">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      {/* Product Grid Section */}
      <div className="bg-white py-8 px-6 sm:px-12 md:px-16">
        {/* Responsive Grid: 2 columns on small screens, 3 on medium, and 4 on large */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          
          {/* First Product Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <Image
              src="/img2.png"
              alt="Product 1"
              width={500}
              height={500}
              objectFit="cover"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Second Product Card with text */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <Image
              src="/chairs.jpg"
              alt="Product 2"
              width={500}
              height={500}
              objectFit="cover"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Elegant Chairs</h3>
              <p className="text-gray-600 text-sm">Comfortable and stylish seating</p>
              <button className="mt-3 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-300">
                View Details
              </button>
            </div>
          </div>

          {/* Third Product Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <Image
              src="/table.png"
              alt="Product 3"
              width={500}
              height={500}
              objectFit="cover"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Fourth Product Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <Image
              src="/img.png"
              alt="Product 4"
              width={500}
              height={500}
              objectFit="cover"
              className="w-full h-64 object-cover"
            />
          </div>
          
        </div>

        {/* View More Section */}
        <div className="text-center mt-10">
          <h1 className="font-bold text-xl sm:text-2xl">
            View More
          </h1>

          {/* Custom Underline with Margin */}
          <div className="w-24 mx-auto border-t-2 border-gray-800 mt-2"></div>
        </div>
      </div>
    </div>
  );
}
