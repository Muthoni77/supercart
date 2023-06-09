import { useState, useEffect, useRef } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  MdDone,
  MdOutlineCreditCard,
  MdOutlineLocalShipping,
} from "react-icons/md";
import CheckoutProfileCard from "./CheckoutProfileCard";
import SelectPaymentMethod from "./SelectPaymentMethod";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setMethod } from "@/features/slices/PaymentSlice";

const CheckoutProfile = () => {
  const dispatch = useAppDispatch();
  const { method } = useAppSelector((state) => state.payment);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>(method);
  const [showSelectPaymentMethod, setShowSelectPaymentMethod] =
    useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSetSelectedPaymentMethod = (selectedMethod: string) => {
    dispatch(setMethod(selectedMethod));
  };

  useEffect(() => {
    if (showSelectPaymentMethod) {
      containerRef.current?.scrollIntoView();
    }
  }, [showSelectPaymentMethod]);
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
        <div ref={containerRef}>
          <CheckoutProfileCard
            icon={<MdOutlineCreditCard size={30} className="text-gray-800" />}
            title="PAYMENT METHOD"
            details={{
              one: selectedPaymentMethod,
              two: "XXX-XXX-XXX-187",
            }}
            changeable={true}
            openStatus={showSelectPaymentMethod}
            handleShowChangeForm={() => {
              setShowSelectPaymentMethod(true);
            }}
          />
          {showSelectPaymentMethod && (
            <SelectPaymentMethod
              setSelectedPaymentMethod={handleSetSelectedPaymentMethod}
              handleHideChangeForm={() => {
                setShowSelectPaymentMethod(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutProfile;
