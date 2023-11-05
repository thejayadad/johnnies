'use client'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js'



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const calculateTotal = () => {
    return cart.products.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const handleCheckout = async () => {
    const lineItems = cart.products.map((item) => {
      return {

      }
    })
  }
  return (
    <div className="container mx-auto p-5 flex">
      <div className="flex-2 w-full md:w-2/3 p-5 h-[600px]">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((item) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="w-20">
                  <div className="w-20 h-20 relative">
                    <Image src={item.image} layout="fill" objectFit="cover" alt={item.name} />
                  </div>
                </td>
                <td>
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </td>
                <td>
                  <span className="text-gray-700">{item.extras.join(', ')}</span>
                </td>
                <td>
                  <span className="text-gray-700">${item.price.toFixed(2)}</span>
                </td>
                <td>
                  <span className="text-gray-700">{item.quantity}</span>
                </td>
                <td>
                  <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 w-full md:w-1/3 p-5">
        <div className="w-full max-h-72 bg-gray-700 p-5 flex flex-col justify-between text-white">
          <h2 className="text-xl font-semibold">CART TOTAL</h2>
          <div className="text-sm">
            <b>Subtotal:</b> ${calculateTotal().toFixed(2)}
          </div>
          <div className="text-sm">
            <b>Discount:</b> $0.00
          </div>
          <div className="text-sm">
            <b>Total:</b> ${calculateTotal().toFixed(2)}
          </div>
          <button 
          
          className="w-full bg-red-500 text-white font-bold py-2 mt-4">
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
