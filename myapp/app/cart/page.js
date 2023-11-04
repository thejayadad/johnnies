'use client'

import Image from 'next/image';

const Cart = () => {
  return (
    <div className="container mx-auto p-5 flex">
      <div className="flex-2 w-full md:w-2/3 p-5 h-[900px]">
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
            <tr className="border-b border-gray-300">
              <td className="w-20">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className="text-gray-700 font-medium">CORALZO</span>
              </td>
              <td>
                <span className="text-gray-700">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className="text-gray-700">$19.90</span>
              </td>
              <td>
                <span className="text-gray-700">2</span>
              </td>
              <td>
                <span className="text-gray-700">$39.80</span>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="w-20">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className="text-gray-700 font-medium">CORALZO</span>
              </td>
              <td>
                <span className="text-gray-700">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className="text-gray-700">$19.90</span>
              </td>
              <td>
                <span className="text-gray-700">2</span>
              </td>
              <td>
                <span className="text-gray-700">$39.80</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1 w-full md:w-1/3 p-5">
        <div className="w-full max-h-72 bg-gray-700 p-5 flex flex-col justify-between text-white">
          <h2 className="text-xl font-semibold">CART TOTAL</h2>
          <div className="text-sm">
            <b>Subtotal:</b> $79.60
          </div>
          <div className="text-sm">
            <b>Discount:</b> $0.00
          </div>
          <div className="text-sm">
            <b>Total:</b> $79.60
          </div>
          <button className="w-full bg-red-500 text-white font-bold py-2 mt-4">
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
