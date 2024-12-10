import React from 'react';
import Image from 'next/image';


export default function Product() {
    return (
     
     <div>
            <h1 className='font-bold flex justify-center items-center mt-7 text-3xl'>
                Top Pick For You
            </h1>
            <p className='flex justify-center items-center mt-2'>
                Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
            </p>

            <div className="bg-white py-8 px-6 sm:px-12 md:px-16">
    
                <div className="flex flex-wrap justify-between items-center w-full">

                    {/* First Image in a Card */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4">
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
                    </div>

                    {/* Second Image in a Card */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4">
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
                    </div>

                    {/* Third Image in a Card */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4">
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
                    </div>

                    {/* Fourth Image in a Card */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4">
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

                </div>

                <div>
                    <h1 className="flex justify-center items-center mt-10 pb-4 font-bold">
                        View More
                    </h1>

                    {/* Custom Underline with Margin */}
                    <div className="w-24 mx-auto border-t-2 border-gray-800 mt-2"></div>
                </div>

            </div>
        </div>
    );
}
