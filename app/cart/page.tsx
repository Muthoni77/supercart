"use client";
import CartItem from "@/components/Cart/CartItem";
import OrderSummary from "@/components/Cart/OrderSummary";
import { useAppSelector } from "@/hooks";
import React from "react";

const Cart = () => {
  const { products } = useAppSelector((state) => state.cart);
  return (
    <div className="p-4 container mx-auto py-20 px-8">
      <span className="font-bold text-3xl w-full">Shopping Cart</span>
      <hr className="mt-8 mb-3" />
      <div className="w-full flex relative">
        <div className="w-[60%] border-r pr-8">
          {products?.map((product: any, index: number) => (
            <CartItem key={index} product={product} />
          ))}
        </div>
        <div className="w-[40%] sticky top-0">
          <div className="w-full sticky top-40">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
