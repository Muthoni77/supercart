import { CheckoutProfileCardType } from "@/Types/Cart";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  MdDone,
  MdOutlineCreditCard,
  MdOutlineLocalShipping,
} from "react-icons/md";

const CheckoutProfileCard = ({
  icon,
  title,
  details: { one, two },
  changeable,
  handleShowChangeForm,
}: CheckoutProfileCardType) => {
  return (
    <>
      <div className={`flex justify-between items-start p-6 border rounded-t-xl`}>
        <div className=" flex space-x-8">
          {icon}
          <div>
            <div className="flex items-center space-x-3">
              <span>{title}</span>
              <MdDone />
            </div>
            <div className="flex items-center mt-2 font-bold text-sm space-x-3">
              <span>{one}</span>
              <span>{two}</span>
            </div>
          </div>
        </div>
        {changeable && (
          <button
            onClick={handleShowChangeForm}
            className="py-2 rounded-lg bg-[#f8fafc] hover:bg-[#f0f4f9]  px-6"
          >
            change
          </button>
        )}
      </div>
    </>
  );
};

export default CheckoutProfileCard;
