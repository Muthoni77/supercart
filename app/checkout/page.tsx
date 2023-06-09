"use client";
import { UserType } from "@/Types/Auth";
import CartItem from "@/components/Cart/CartItem";
import OrderSummary from "@/components/Cart/OrderSummary";
import CheckoutProfile from "@/components/accountDetails/CheckoutProfile";
import PaymentLoader from "@/components/screenLoaders/PaymentLoader";
import { useAppSelector, useAppDispatch } from "@/hooks";
import AxiosWrapper from "@/utils/axios/axiosWrapper";
import React, { useState } from "react";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const user: UserType = useAppSelector((state) => {
    if (typeof state.auth.user !== "string") {
      return state.auth.user;
    }
  })!;
  const { products, subtotal } = useAppSelector((state) => state.cart);
  const { method } = useAppSelector((state) => state.payment);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaderMessage, setLoaderMessage] = useState<string>(
    "Processing payment, please wait..."
  );

  const handleCheckout = async () => {
    setLoading(true);
    window.document.body.style.overflow = "hidden";
    const data = {
      Amount: subtotal,
      PhoneNumber: user.phone,
    };
    const response: any = await AxiosWrapper({
      method: "post",
      url: "payments/mpesa/checkout",
      data,
    });

    console.log("payment response");
    console.log(response.data);
  };
  return (
    <>
      <div className="p-4 container mx-auto py-20 px-8">
        <span className="font-bold text-3xl w-full">Checkout</span>
        <hr className="mt-8 mb-6" />
        <div className="w-full flex relative">
          <div className="w-[60%] border-r pr-8">
            <CheckoutProfile />
          </div>
          <div className="w-[40%] sticky top-0 ">
            <span className="font-bold text-base mb-3 px-4">Order Summary</span>
            <div
              className="w-full  px-4 flex flex-col max-h-[50vh] no-scrollbarss"
              style={{ overflowY: "auto" }}
            >
              {products?.map((product: any, index: number) => (
                <CartItem key={index} product={product} isPreview={false} />
              ))}
            </div>

            <div className="w-full sticky top-40 ">
              <OrderSummary handleCheckout={handleCheckout} />
            </div>
          </div>
        </div>
      </div>
      {loading && <PaymentLoader message={loaderMessage} />}
    </>
  );
};

export default Checkout;
