'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FoodCard = ({food: { _id, title, img }}) => {
  return (
    <div className="p-4 w-full">
      <Link href={`/fooditem/${_id}`} className="block relative h-96 rounded overflow-hidden">
        <Image alt="ecommerce" className="object-cover object-center w-full h-full block" width={100} height={100} src={img} />
      </Link>
      <div className="mt-4 text-center">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
      </div>
    </div>
  );
};

export default FoodCard;
