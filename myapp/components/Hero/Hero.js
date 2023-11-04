'use client'
import React from 'react';
import Image from 'next/image';
import hero1 from "../../public/hero1.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={hero1} />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Seafood Market</h1>
          <p className="mb-8 leading-relaxed">Explore our wide range of fresh seafood and enjoy the flavors of the ocean. Whether you're a seafood lover or a casual diner, we have something for everyone. Our commitment to quality ensures you get the best seafood experience.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-red-400 bg-transparent border-2 border-indigo-500 py-2 px-6 focus:outline-none hover:border-indigo-600 rounded text-lg">Order Now</button>
            <button className="ml-4 inline-flex text-gray-700 bg-transparent border-2 border-gray-100 py-2 px-6 focus:outline-none hover:border-gray-200 rounded text-lg">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
