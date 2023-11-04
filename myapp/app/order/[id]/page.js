'use client'

import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return "done";
    if (index - status === 1) return "inProgress";
    if (index - status > 1) return "undone";
  };

  return (
    <div className="container flex p-5">
      <div className="w-2/3 p-5">
        <div className="row">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td>
                  <span className="id">129837819237</span>
                </td>
                <td>
                  <span className="name">John Doe</span>
                </td>
                <td>
                  <span className="address">Elton st. 212-33 LA</span>
                </td>
                <td>
                  <span className="total">$79.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className={`flex ${statusClass(0)}`}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="checkedIcon hidden">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={`flex ${statusClass(1)}`}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className="checkedIcon hidden">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20} height={20}
                alt=""
              />
            </div>
          </div>
          <div className={`flex ${statusClass(2)}`}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className="checkedIcon hidden">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={`flex ${statusClass(3)}`}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className="checkedIcon hidden">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 p-5">
        <div className="wrapper">
          <h2 className="text-white text-xl font-semibold">CART TOTAL</h2>
          <div className="totalText text-white text-sm">
            <b className="totalTextTitle">Subtotal:</b> $79.60
          </div>
          <div className="totalText text-white text-sm">
            <b className="totalTextTitle">Discount:</b> $0.00
          </div>
          <div className="totalText text-white text-sm">
            <b className="totalTextTitle">Total:</b> $79.60
          </div>
          <button disabled className="button bg-white text-teal-500 font-bold py-2 mt-4 cursor-not-allowed">
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
