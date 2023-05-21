import React from "react";

const PriceDetails = () => {
  return (
    <div className="bg-red-300 w-full">
      <div>
        <div>
          <span>Subtotal</span>
          <span>$200</span>
        </div>
        <span>Shipping and taxes will be calculated at checkout</span>
      </div>
    </div>
  );
};

export default PriceDetails;
