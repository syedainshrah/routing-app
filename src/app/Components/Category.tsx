import React from 'react'; 
import Image from 'next/image';  

export default function Category() {     
    return (         
        <div className="bg-gray-100 py-8 px-4 sm:px-6 md:px-8 lg:px-16 ">             
            <div className="max-w-screen-xl mx-auto">                 
                {/* Responsive Grid Container */}                 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-5">                     
                    {/* First Image Card */}                     
                    <div className="group">                         
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-4">                             
                            {/* Image Container with Aspect Ratio Maintenance */}                             
                            <div className="relative w-full pt-[75%] mb-4"> {/* 4:3 Aspect Ratio */}                                 
                                <Image                                     
                                    src="/group.png"                                     
                                    alt="Sofa Collection"                                     
                                    fill                                     
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"                                     
                                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"                                 
                                />                             
                            </div>                             
                        </div>                     
                    </div>                      
                    
                    {/* Second Image Card */}                     
                    <div className="group">                         
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-4">                             
                            {/* Image Container with Aspect Ratio Maintenance */}                             
                            <div className="relative w-full pt-[75%] mb-4"> {/* 4:3 Aspect Ratio */}                                 
                                <Image                                     
                                    src="/mask.png"                                     
                                    alt="Interior Design"                                     
                                    fill                                     
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"                                     
                                    className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"                                 
                                />                             
                            </div>                                                      
                        </div>                     
                    </div>                 
                </div>             
            </div>         
        </div>     
    ); 
}