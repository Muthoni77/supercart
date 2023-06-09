import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks";
const PaymentLoader = ({ message }: { message: string }) => {
  const { products, subtotal } = useAppSelector((state) => state.cart);
  const { method } = useAppSelector((state) => state.payment);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="rounded-xl bg-white p-4 w-full md:w-1/2 min-h-[60vh] flex flex-col items-center justify-center">
        <span className="text-xl font-bold">Paying ksh {subtotal}/=</span>
        <img src="./pics/payment/mpesa2.png" className=" max-w-full " />
        <span className="">{message}</span>
        <img src="./loading2.gif" className="w-[80px] " />
      </div>
    </div>
  );
};

export default PaymentLoader;
