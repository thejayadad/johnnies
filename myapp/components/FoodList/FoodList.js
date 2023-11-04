'use client'

import React, { useState, useEffect } from 'react';
import FoodCard from '../FoodCard/FoodCard'

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch('/api/food')
      .then((response) => response.json())
      .then((data) => {
        setFoodItems(data); 
      })
      .catch((error) => {
        console.error('Error fetching food items:', error);
      });
  }, []);
  return (
    <section className='px-4 py-12 max-w-screen-2xl mx-auto text-gray-600 body-font'>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">Seafood Selection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {foodItems.map((foodItem) => (
          <FoodCard
            key={foodItem._id} // Use a unique key for each item
            food={foodItem}
          />
        ))}

        </div>
    </section>
  )
}

export default FoodList