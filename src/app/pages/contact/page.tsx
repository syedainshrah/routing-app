"use client";

import File from '@/app/Components/[id]/File'
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
  <div>
    <File/>
    <div className="relative w-full h-[316px]">
        <Image
          src="/rect.png"
          fill
          priority
          className="object-cover"
          alt="Background Image"
        />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image
            src="/house.png"
            width={100}
            height={100}
            alt="House Icon"
            className="mb-4"
          />
          
          <h1 className="text-3xl font-bold text-black mb-4">
          Contact
          </h1>
          
          <div className="flex items-center justify-center text-black">
            <span className="text-xl font-bold">Home</span>
            <IoIosArrowForward className="mx-2 text-xl" />
            <span className="text-xl">contact</span>
          </div>
        </div>
      </div>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section: Contact Details */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Feel free to contact us with any questions or inquiries.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">123 Main Street, Karachi, Pakistan</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">+92-123-4567890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Working Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the subject"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="mb-8">
    </div>
  </div>
  );
};

export default ContactForm;