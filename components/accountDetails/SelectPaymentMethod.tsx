import React from "react";
import { BsCreditCard } from "react-icons/bs";

const SelectPaymentMethod = () => {
  return (
    <div className=" border p-3 flex flex-col space-y-6 pt-6">
      <div>
        <label
          htmlFor="card"
          className="flex items-center space-x-5 cursor-pointer"
        >
          <input
            id="card"
            type="radio"
            name="payment_method"
            value={"card"}
            style={{ width: "22px", height: "22px" }}
          />
          <div className="flex space-x-6 items-center">
            <div className="border border-gray-600 border-2  rounded-xl p-2">
              <BsCreditCard size={30} />
            </div>
            <span> Debit / Credit Card</span>
          </div>
        </label>
      </div>
      <div>
        <label
          htmlFor="mpesa"
          className="flex items-center space-x-5 cursor-pointer"
        >
          <input
            id="mpesa"
            type="radio"
            name="payment_method"
            value={"mpesa"}
            style={{ width: "22px", height: "22px" }}
          />

          <div className="flex space-x-6 items-center">
            <div className="border border-gray-600 border-2 overflow-hidden  rounded-xl p-2 w-[15%]">
              <img
                src="/pics/payment/mpesa2.png"
                className="w-full scale-125"
              />
            </div>
            <span> Mpesa</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
