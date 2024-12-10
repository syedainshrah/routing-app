"use client";
import File from '@/app/Components/[id]/File';
import Icon from '@/app/Components/Icon';
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const Checkout = () => {
  return (
    <div>
      <File />
      {/* Background Image and Text */}
      <div className="relative w-full h-[316px]">
        <Image
          src="/rect.png"
          width={1440}
          height={316}
          objectFit="cover"
          alt="Background Image"
        />

        {/* House Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/house.png"
            width={100}
            height={100}
            alt="House Icon"
          />
        </div>

        {/* Page Title and Breadcrumb */}
        <div className="absolute top-1/2 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-black mt-4 sm:mt-8 md:mt-10 mb-4 sm:mb-6 md:mb-8">
            My Account
          </h1>
          <div className="flex items-center justify-center md:mt-0 sm:mt-2 mb-8 sm:mb-10 text-black">
            <h1 className="text-xl sm:text-xl md:text-xl font-bold text-black">Home</h1>
            <IoIosArrowForward className="ml-2 text-xl sm:text-xl md:text-xl " />
            <h1 className="text-xl sm:text-xl md:text-xl  ml-2">My Account</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-white shadow py-4"></header>

        <main className="flex-grow">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Shipping Details */}
              <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Shipping Details
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                    { label: "Country/Region", name: "country" },
                    { label: "Street Address", name: "streetAddress" },
                    { label: "Town/City", name: "townCity" },
                    { label: "Province", name: "province" },
                    { label: "ZIP Code", name: "zipCode" },
                    { label: "Phone", name: "phone" },
                    { label: "Email", name: "email" },
                    { label: "Additional Information", name: "additionalInfo" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-gray-600 mb-1"
                      >
                        {field.label}
                      </label>
                      {field.name === "additionalInfo" ? (
                        <textarea
                          id={field.name}
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      ) : (
                        <input
                          type={field.name === "email" ? "email" : "text"}
                          id={field.name}
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary & Payment */}
              <div className="space-y-6 bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Sample Item 1</span>
                    <span>1 x PKR 1000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sample Item 2</span>
                    <span>2 x PKR 500</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold mt-4">
                    <span>Sub Total:</span>
                    <span className="text-gray-800">PKR 2000</span>
                  </div>
                  <div className="flex justify-between font-semibold mt-4">
                    <span>Shipping Charges</span>
                    <span>PKR 200</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold mt-4">
                    <span>Total:</span>
                    <span className="text-gray-800">PKR 2200</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Payment Method
                  </h3>
                  <div className="space-y-2">
                    {["Cash on Delivery", "EasyPaisa", "JazzCash"].map(
                      (method) => (
                        <label
                          key={method}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method}
                            className="h-4 w-4"
                          />
                          <span>{method}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
                <Link
                  href="/pages/cart"
                >
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      Place Order
                    </button>
                  </div>
                </Link>

              </div>
            </form>
          </div>
        </main>
      </div>
      <Icon />
    </div>
  );
};

export default Checkout;
