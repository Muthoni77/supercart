import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  MdDone,
  MdOutlineCreditCard,
  MdOutlineLocalShipping,
} from "react-icons/md";
import CheckoutProfileCard from "./CheckoutProfileCard";

const CheckoutProfile = () => {
  return (
    <>
      <div className="w-full flex flex-col space-y-7">
        {/* Contact Info */}
        <CheckoutProfileCard
          icon={<HiOutlineUserCircle size={30} className="text-gray-800" />}
          title="CONTACT INFO"
          details={{ one: "Jonathan Baraza", two: "254704783187" }}
          changeable={false}
        />

        {/* Shippping Address */}
        <CheckoutProfileCard
          icon={<MdOutlineLocalShipping size={30} className="text-gray-800" />}
          title="SHIPPING ADDRESS"
          details={{
            one: "St. Paul's Road, Norris, SD 57560, Dakota, USA",
            two: "",
          }}
          changeable={false}
        />

        {/* Payment method*/}
        <CheckoutProfileCard
          icon={<MdOutlineCreditCard size={30} className="text-gray-800" />}
          title="PAYMENT METHOD"
          details={{
            one: "GOOGLE/APP WALET",
            two: "XXX-XXX-XXX-187",
          }}
          changeable={true}
        />
      </div>
    </>
  );
};

export default CheckoutProfile;
