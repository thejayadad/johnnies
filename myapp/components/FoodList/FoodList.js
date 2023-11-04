'use client'

import React from 'react'
import FoodCard from '../FoodCard/FoodCard'

const FoodList = () => {
  return (
    <section className='px-4 py-12 max-w-screen-2xl mx-auto text-gray-600 body-font'>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">Seafood Selection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />

        </div>
    </section>
  )
}

export default FoodList