import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
      
      <div className="flex justify-between items-center bg-yellow-200 py-4 px-6 sm:px-12 md:px-16">
      
            {/* Left Section (Text) */}
            <div className="flex flex-col justify-center items-start sm:w-1/2 md:w-1/3 mr-6 h-{276} w-{440} ml-36 mt-28">
                <h1 className="text-5xl font-bold text-gray-800 mb-2">Rocket Single</h1>
                <h1 className="text-5xl font-bold text-gray-800">Seater</h1>
                <div>
                    <h1 className="text-xl mt-8 text-black">Shop Now</h1>
                    <div className="w-24 mx-auto border-t-2 border-gray-800 mt-2"></div>
                </div>
            </div>

            {/* Right Section (Image Card) */}
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2">
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