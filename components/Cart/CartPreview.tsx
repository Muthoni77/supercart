import React from "react";
import CartItem from "./CartItem";
import PriceDetails from "./priceDetails";

const CartPreview = () => {
  return (
    <div className="w-1/3 bg-white fixed top-[65px] p-6 rounded-3xl  right-12 shadow z-[50]">
      <div className="w-full flex flex-col space-y-3">
        <span
          className="text-lg font-bold text-[#334155] "
          style={{ marginBottom: "10px" }}
        >
          Shopping Cart
        </span>
        <CartItem />
      </div>
      <PriceDetails />
    </div>
  );
};

export default CartPreview;
