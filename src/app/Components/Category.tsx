import React from 'react';
import Image from 'next/image';

export default function Category() {
    return (
        <div className="bg-gray-100">
            {/* Flex container to align items horizontally */}
            <div className="flex justify-between items-center w-full px-6 sm:px-12 md:px-16">

                {/* First Image */}
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                    <Image
                        src="/group.png"
                        alt="Sofa"
                        width={1440}
                        height={800}
                        objectFit="cover"
                        className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[600px]"
                    />
                </div>

                {/* Second Image */}
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                    <Image
                        src="/mask.png"
                        alt="Sofa"
                        width={1440}
                        height={800}
                        objectFit="cover"
                        className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[600px]"
                    />
                </div>

            </div>
        </div>
    );
}
