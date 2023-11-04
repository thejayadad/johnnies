'use client'

import React from 'react'
import hero1 from "../../public/hero1.png"
import Image from 'next/image'
import Link from 'next/link'

const FoodCard = () => {
  return (
    
<div class="p-4 w-full">
  <Link
    href={'/fooditem/'}
    className='block relative h-96 rounded overflow-hidden'
  >
<img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />

  </Link>
  <div className="mt-4 text-center">
  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <p className="mt-1">$16.00</p>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
        </div>
</div>

  )
}

export default FoodCard