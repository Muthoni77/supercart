import React from "react";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import { useAppSelector } from "@/hooks";

const CartPreview = () => {
  const { products } = useAppSelector((state) => state.cart);
  //TODO
  //disable border bottom on last item and when item is only one
  return (
    <div className="w-1/3 bg-white fixed top-[65px]  rounded-3xl  right-12 shadow z-[50]">
      <div className="w-full flex flex-col space-y-3 p-6">
        <span className="text-lg font-bold text-[#334155] ">Shopping Cart</span>
        {products.length > 0 ? (
          <>
            <div
              className="w-full max-h-[50vh] no-scrollbar"
              style={{ overflowY: "auto" }}
            >
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </>
        ) : (
          <div className="border border-[#ffc107] font-light text-[#ffc107] text-sm bg-[#fffae8] rounded-lg p-3 my-4 flex items-center justify-center">
            You don't have any items in your cart.
          </div>
        )}
      </div>
      {products.length > 0 && <PriceDetails />}
    </div>
  );
};

export default CartPreview;
