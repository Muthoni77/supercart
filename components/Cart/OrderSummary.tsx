import { useState } from "react";
import { useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const { subtotal } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const [shipping, setShipping] = useState<number>(15.0);
  const [tax, setTax] = useState<number>(4.0);
  return (
    <div className="w-full px-6 pb-4 pt-6 rounded-bl-3xl rounded-br-3xl z-50">
      <div className="flex flex-col space-y-8">
        <span className="font-bold text-base">Order Summary</span>
        <div className="flex  items-center justify-between border-b pb-3 text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-semibold">${subtotal}</span>
        </div>
        <div className="flex  items-center justify-between border-b text-sm pb-3">
          <span className="text-gray-500">Shipping estimate</span>
          <span className="font-semibold">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex  items-center justify-between border-b text-sm pb-3">
          <span className="text-gray-500">Tax estimate</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        <div className="flex  items-center justify-between border-b text-base pb-3 font-bold">
          <span>Order total</span>
          <span className="font-semi-bold">
            ${(Number(subtotal) + tax + shipping).toFixed(2)}
          </span>
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
