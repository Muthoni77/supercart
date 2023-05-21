import React from "react";

const PriceDetails = () => {
  return (
    <div className="bg-[#f9fafb] w-full px-6 pb-4 pt-6 rounded-bl-3xl rounded-br-3xl z-50">
      <div>
        <div className="flex  items-center justify-between font-bold">
          <span>Subtotal</span>
          <span>$299.00</span>
        </div>
        <span className="text-gray-500 text-sm mt-2">
          Shipping and taxes will be calculated at checkout
        </span>
        <div className="flex items-center justify-between mt-6">
          <div className="w-1/2 pr-1">
            <button className="w-full p-[14px] border hover:cursor-pointer bg-white hoverDownEffect  rounded-3xl">
              View Cart
            </button>
          </div>

          <div className="w-1/2 pl-1">
            <button className="w-full p-[14px] border hover:cursor-pointer bg-[#0f172a] text-white hoverDownEffect  rounded-3xl">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
