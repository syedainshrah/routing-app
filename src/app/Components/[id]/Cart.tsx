import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

export default function Cart() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
                {/* Breadcrumb Section */}
                <div className="flex flex-wrap items-center space-x-2 md:space-x-4 text-gray-400 md:ml-14 gap-2">
                    <div className="flex items-center space-x-1 md:space-x-2">
                        <h1 className="text-sm md:text-base">Home</h1>
                        <IoIosArrowForward className="text-gray-400 text-xs md:text-base" />
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-2 text-gray-400">
                        <h1 className="text-sm md:text-base">Shop</h1>
                        <IoIosArrowForward className="text-gray-400 text-xs md:text-base" />
                    </div>
                    <div className="font-bold text-black">
                        <h1 className="text-sm md:text-base">Asgaard Sofa</h1>
                    </div>
                </div>

                {/* Main Product Layout */}
                <div className="flex flex-col md:flex-row mt-8">
                    {/* Left Side: Vertical Small Images */}
                    <div className="hidden md:flex flex-col space-y-4 mr-8">
                        <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-100 rounded-md">
                            <Image
                                src="/img14.png"
                                alt="Small Image 1"
                                width={64}
                                height={64}
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="w-12 md:w-16 h-12 md:h-16 bg-yellow-50 rounded-md">
                            <Image
                                src="/img15.png"
                                alt="Small Image 2"
                                width={64}
                                height={64}
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-100 rounded-md">
                            <Image
                                src="/img16.png"
                                alt="Small Image 3"
                                width={64}
                                height={64}
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-100 rounded-md">
                            <Image
                                src="/img17.png"
                                alt="Small Image 4"
                                width={64}
                                height={64}
                                className="object-cover rounded-md"
                            />
                        </div>
                    </div>

                    {/* Main Product Section */}
                    <div className="flex flex-col md:flex-row">
                        {/* Main Product Image */}
                        <div className="w-full md:w-[481px] h-[300px] md:h-[500px] mb-4 md:mb-0 md:mr-8 bg-yellow-50">
                            <Image
                                src="/Asgaard.png"
                                alt="Asgaard Sofa"
                                width={481}
                                height={500}
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col space-y-4 w-full md:w-80 px-4 md:px-0">
                            <h1 className="text-2xl md:text-3xl font-bold">Asgaard Sofa</h1>
                            <p className="text-lg md:text-xl text-gray-800">Rs. 250,000.00</p>

                            {/* Star Rating and Custom Review */}
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span className="text-gray-400 mx-2">|</span>
                                <span className="text-gray-600 text-sm md:text-base">5 Custom Review</span>
                            </div>

                            {/* Description Paragraph */}
                            <p className="text-gray-600 text-xs md:text-sm">
                                Embodying comfort and style, the Asgaard Sofa offers a perfect blend of modern design and luxurious comfort. Crafted with premium materials and meticulous attention to detail.
                            </p>

                            {/* Size Boxes */}
                            <div className="flex space-x-2 mt-4">
                                <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-100 flex items-center justify-center text-sm md:text-base">L</div>
                                <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-100 flex items-center justify-center text-sm md:text-base">XL</div>
                                <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-100 flex items-center justify-center text-sm md:text-base">XS</div>
                            </div>

                            {/* Color Circles */}
                            <div className="flex space-x-3 mt-4">
                                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-orange-800"></div>
                                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-yellow-500"></div>
                                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-blue-500"></div>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 ">
                                <div className="flex items-center border rounded w-full md:w-auto">
                                    <button 
                                        className="px-3 py-2 bg-gray-100 text-sm md:text-base"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 text-sm md:text-base">1</span>
                                    <button 
                                        className="px-3 py-2 bg-gray-100 text-sm md:text-base"
                                    >
                                        +
                                    </button>
                                </div>
                                <Link
                                href="/pages/account"
                                >
                                <button className="bg-white text-black flex items-center border border-black rounded w-full  px-6 py-2  md:w-auto text-sm md:text-base mr-2">
                                    Add to Cart
                                </button>
                                </Link>
                                <Link
                                href="/pages/checkout"
                                >
                                <button className="bg-white text-black flex items-center border border-black rounded w-full  px-6 py-2  md:w-auto text-sm md:text-base">
                                    Check out
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="mt-5 border-t pt-4  flex justify-center items-center">
                    <div className="flex justify-end items-center text-gray-600">
                        <div className="text-right space-y-2">
                            <p className="text-sm">SKU : SSOOI 4</p>
                            <p className="text-sm">Category : Chair</p>
                            <p className="text-sm">Tags : Furniture, Chair, Home</p>
                            <div className="flex justify-end items-center space-x-3 mt-2">
                                <p className="text-sm mr-2">Share</p>
                                <FaFacebook className="text-black text-xl cursor-pointer hover:text-blue-700" />
                                <FaWhatsapp className="text-black text-xl cursor-pointer hover:text-green-600" />
                                <FaTwitter className="text-black text-xl cursor-pointer hover:text-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}