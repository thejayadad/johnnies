'use client'
import { FaCheck, FaCreditCard, FaBreadSlice, FaBiking, FaTruck } from 'react-icons/fa';

const Order = () => {
  const status = 0;

  const statusIcon = (index) => {
    if (index - status < 1) return <FaCreditCard />;
    if (index - status === 1) return <FaBreadSlice />;
    if (index - status === 2) return <FaBiking />;
    if (index - status === 3) return <FaTruck />;
  };

  const statusClass = (index) => {
    if (index - status < 1) return "done";
    if (index - status === 1) return "inProgress";
    if (index - status > 1) return "undone";
  };

  return (
    <div className="flex p-5 max-w-screen-xl mx-auto">
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
        <div className="flex flex-row justify-between mt-8">
          <div className={`flex ${statusClass(0)} flex-col items-center`}>
            {statusIcon(0)}
            <span>Payment</span>
            <div className="checkedIcon hidden">
              <FaCheck />
            </div>
          </div>
          <div className={`flex ${statusClass(1)} flex-col items-center`}>
            {statusIcon(1)}
            <span>Preparing</span>
            <div className="checkedIcon hidden">
              <FaCheck />
            </div>
          </div> 
          <div className={`flex ${statusClass(2)} flex-col items-center`}>
            {statusIcon(2)}
            <span>On the way</span>
            <div className="checkedIcon hidden">
              <FaCheck />
            </div>
          </div>
          <div className={`flex ${statusClass(3)} flex-col items-center`}>
            {statusIcon(3)}
            <span>Delivered</span>
            <div className="checkedIcon hidden">
              <FaCheck />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 p-5">
        <div className="wrapper bg-gray-700 p-6">
          <h2 className="text-gray-600 text-xl font-semibold">CART TOTAL</h2>
          <div className="totalText text-gray-600 text-sm">
            <b className="totalTextTitle">Subtotal:</b> $79.60
          </div>
          <div className="totalText text-gray-600 text-sm">
            <b className="totalTextTitle">Discount:</b> $0.00
          </div>
          <div className="totalText text-gray-600 text-sm">
            <b className="totalTextTitle text-gray-600">Total:</b> $79.60
          </div>
          <button disabled className="button w-full bg-red-500 text-white font-bold py-2 mt-4">
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
