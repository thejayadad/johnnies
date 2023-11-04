'use client'
import React from 'react';

const FoodItem = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="food"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Seafood Delight</h2>
            <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
            <div className="flex items-center space-x-4 mt-4">
              <p className="leading-relaxed lg:w-3/4">
                Explore the flavors of the ocean with our delightful seafood platter. Savor the freshness of the sea and enjoy a scrumptious meal that will satisfy your taste buds.
              </p>
            </div>
            <div className="mt-4">
              <div className="mb-4">
                <h3 className="text-gray-800 text-lg font-semibold">Select Meal Size</h3>
                <div className="flex items-center space-x-2">
                  <label className="cursor-pointer">
                    <input type="radio" name="mealSize" value="small" className="hidden" />
                    <div className="bg-white border border-gray-300 rounded-md p-2 hover:bg-indigo-100">
                      <span className="text-sm font-medium text-gray-800">Small</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="mealSize" value="medium" className="hidden" />
                    <div className="bg-white border border-gray-300 rounded-md p-2 hover:bg-indigo-100">
                      <span className="text-sm font-medium text-gray-800">Medium</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="mealSize" value="large" className="hidden" />
                    <div className="bg-white border border-gray-300 rounded-md p-2 hover:bg-indigo-100">
                      <span className="text-sm font-medium text-gray-800">Large</span>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-gray-800 text-lg font-semibold">Preparation Style</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="cursor-pointer">
                    <input type="radio" name="prepStyle" value="fried" className="hidden" />
                    <div className="relative">
                      <img
                        alt="Fried"
                        src="fried-image.jpg"
                        className="rounded-md object-cover w-20 h-20 hover:scale-105 transform transition-transform"
                      />
                      <span className="block text-sm font-medium text-gray-800 text-center mt-2 hover:text-indigo-600">Fried</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="prepStyle" value="boil" className="hidden" />
                    <div className="relative">
                      <img
                        alt="Boil"
                        src="boil-image.jpg"
                        className="rounded-md object-cover w-20 h-20 hover:scale-105 transform transition-transform"
                      />
                      <span className="block text-sm font-medium text-gray-800 text-center mt-2 hover:text-indigo-600">Boil</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="prepStyle" value="steam" className="hidden" />
                    <div className="relative">
                      <img
                        alt="Steam"
                        src="steam-image.jpg"
                        className="rounded-md object-cover w-20 h-20 hover:scale-105 transform transition-transform"
                      />
                      <span className="block text-sm font-medium text-gray-800 text-center mt-2 hover:text-indigo-600">Steam</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodItem;
