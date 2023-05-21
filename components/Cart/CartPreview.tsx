import React from "react";
import CartItem from "./CartItem";

const CartPreview = () => {
  return (
    <div className="w-1/3 bg-white fixed top-[65px] p-6 rounded-3xl  right-12 shadow z-[50]">
      <div className="w-full">
        <span className="text-lg font-bold text-[#334155]">Shopping Cart</span>
        <CartItem />
      </div>
    </div>
  );
};

export default CartPreview;
