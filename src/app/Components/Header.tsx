"use client";

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdContact } from "react-icons/io";
import { IoCartOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-yellow-200">
            <div className="relative flex justify-between items-center py-4 px-4 sm:px-12 md:px-16 max-w-7xl mx-auto">
                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-2xl focus:outline-none"
                    >
                        {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                    </button>
                </div>

                {/* Links Section - Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-yellow-200 flex flex-col items-center space-y-4 py-6 shadow-lg">
                        <Link href="/" className="hover:text-gray-700" onClick={toggleMenu}>Home</Link>
                        <Link href="/pages/shop" className="hover:text-gray-700" onClick={toggleMenu}>Shop</Link>
                        <Link href="/About" className="hover:text-gray-700" onClick={toggleMenu}>About</Link>
                        <Link href="/pages/contact" className="hover:text-gray-700" onClick={toggleMenu}>Contact</Link>
                    </div>
                )}

                {/* Desktop Links Section */}
                <div className="hidden md:flex justify-center items-center gap-8 lg:gap-16 flex-grow">
                    <Link href="/" className="hover:text-gray-700">Home</Link>
                    <Link href="/pages/shop" className="hover:text-gray-700">Shop</Link>
                    <Link href="/About" className="hover:text-gray-700">About</Link>
                    <Link href="/pages/contact" className="hover:text-gray-700">Contact</Link>
                </div>

                {/* Icons Section */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Contact Icon */}
                    <Link href="/contact" className="hover:text-gray-700">
                        <IoMdContact className="text-xl" />
                    </Link>

                    {/* Search Icon */}
                    <button className="hover:text-gray-700">
                        <CiSearch className="text-xl" />
                    </button>

                    {/* Wishlist Icon */}
                    <Link href="/wishlist" className="hover:text-gray-700">
                        <IoMdHeartEmpty className="text-xl" />
                    </Link>

                    {/* Cart Icon */}
                    <Link href="/cart" className="hover:text-gray-700">
                        <IoCartOutline className="text-xl" />
                    </Link>
                </div>
            </div>
        </header>
    );
}