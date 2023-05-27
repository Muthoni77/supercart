import React from "react";
import { useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const { subtotal } = useAppSelector((state) => state.cart);
  const router = useRouter();
  return (
    <div className="bg-[#f9fafb] w-full px-6 pb-4 pt-6 rounded-bl-3xl rounded-br-3xl z-50">
      <div>
        <span className="font-bold">Order Summary</span>
        <div className="flex  items-center justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex  items-center justify-between">
          <span>Shipping estimate</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex  items-center justify-between">
          <span>Tax estimate</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex  items-center justify-between font-bold">
          <span>Order total</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-3/4 mx-auto">
            <button className="w-full p-[14px] border hover:cursor-pointer bg-[#0f172a] text-white hoverDownEffect  rounded-3xl">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
