
import React from 'react';
import Image from 'next/image';

export default function Product() {
  // Sample product data
  const products = [
    {
      id: 1,
      image: "/img2.png",
      title: "Modern Lamp",
      description: "Sleek lighting solution",
      alt: "Product 1"
    },
    {
      id: 2,
      image: "/chairs.jpg",
      title: "Elegant Chairs",
      description: "Comfortable and stylish seating",
      alt: "Product 2"
    },
    {
      id: 3,
      image: "/table.png",
      title: "Designer Table",
      description: "Minimalist furniture piece",
      alt: "Product 3"
    },
    {
      id: 4,
      image: "/img.png",
      title: "Contemporary Decor",
      description: "Unique home accessory",
      alt: "Product 4"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
          Top Pick For You
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            
            {/* Conditional rendering for product with details */}
            {product.id === 2 && (
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-300">
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More Section */}
      <div className="text-center mt-10">
        <h2 className="font-bold text-xl sm:text-2xl text-gray-900">
          View More
        </h2>
        <div className="w-24 h-1 bg-gray-800 mx-auto mt-2"></div>
      </div>
    </div>
  );
}