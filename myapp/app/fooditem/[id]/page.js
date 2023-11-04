'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addProduct } from '@/redux/cartSlice';

const FoodItem = (ctx) => {
  const [foodDetails, setFoodDetails] = useState(null);
  const [prepStyle, setPrepStyle] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1); 
  const [size, setSize] = useState(0);
  const [prep, setPrep] = useState([]);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`http://localhost:3000/api/food/${ctx.params.id}`, { cache: 'no-store' });

        if (response.ok) {
          const food = await response.json();
          setFoodDetails(food);
          setPrice(food.prices[0]);
        } else {
          console.error(`Error fetching food: ${response.status}`);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    fetchFood();
  }, []);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  const handleSize = (sizeIndex) => {
    const selectedPrice = foodDetails.prices[sizeIndex];
    setSize(sizeIndex);
    setPrice(selectedPrice);
  };

  const handleClick = () => {
    dispatch(addProduct({...foodDetails, extras, price, quantity}));
  };
  const handleQuantityChange = (increment) => {
    if (increment) {
      setQuantity(quantity + 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="food"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={foodDetails?.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Seafood Delight</h2>
            <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
            <div className="flex items-center space-x-4 mt-4">
              <p className="leading-relaxed lg:w-3/4">{foodDetails?.desc}</p>
            </div>
            <div className="mt-4">
              {foodDetails ? (
                <>
                  <div className="mb-4">
                    <h3 className="text-gray-800 text-lg font-semibold">Select Meal Size</h3>
                    <div className="flex items-center space-x-6">
                    <button onClick={() => handleSize(0)}>1LB</button>
                    <button onClick={() => handleSize(1)}>2LB</button>
                    <button onClick={() => handleSize(2)}>3LB</button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 text-lg font-semibold">Preparation Style</h3>
                    {foodDetails.prepstyle.map((option) => (
                  <div key={option._id}>
                    <label htmlFor={option.text}>
                      <input
                        type="checkbox"
                        id={option.text}
                        name={option.text}
                        onChange={(e) => handleChange(e, option)}
                        />
                      {option.text}
                    </label>
                  </div>
                ))}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-800 text-lg font-semibold">Quantity</h3>
                    <div className="flex items-center space-x-4">
                      <button
                      onClick={() => handleQuantityChange(false)} 
                      className="bg-gray-500 text-white w-8 h-8 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(true)} 
                        className="bg-gray-500 text-white w-8 h-8 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button 
                    onClick={handleClick}
                    className="bg-gray-500 text-white px-4 py-2 hover:bg-gray-700 w-full">
                      Add to Cart
                    </button>
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodItem;
