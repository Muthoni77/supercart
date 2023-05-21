import React from "react";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";

const CartPreview = () => {
  //TODO
  //disable border bottom on last item and when item is only one
  return (
    <div className="w-1/3 bg-white fixed top-[65px]  rounded-3xl  right-12 shadow z-[50]">
      <div className="w-full flex flex-col space-y-3 p-6">
        <span
          className="text-lg font-bold text-[#334155] "
          // style={{ marginBottom: "10px" }}
        >
          Shopping Cart
        </span>
        <div
          className="w-full max-h-[50vh] no-scrollbar"
          style={{ overflowY: "auto" }}
        >
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <PriceDetails />
    </div>
  );
};

export default CartPreview;
