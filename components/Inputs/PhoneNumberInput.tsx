import { PhoneInputDataType } from "@/Types/Auth";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneNumberInput({ phone, setPhone }: PhoneInputDataType) {
  const inputStyle: any = {
    padding: "0px 10px",
    margin: "0px",
    width: "100%",
    backgroundColor: "#f4fff5",
    borderRadius: "5px",
    boxSizing: "border-box",
    border: "none",

    fontSize: "12px",
  };
  const buttonStyle: any = {
    border: "none",
    background: "transparent",
    position: "relative",
  };
  return (
    <PhoneInput
      country={"ke"}
      placeholder="Enter phone number"
      value={phone}
      onChange={(phoneNum) => setPhone(phoneNum)}
      inputStyle={inputStyle}
      buttonStyle={buttonStyle}
      buttonClass="active:bg-none hover:bg-none"
      containerClass="border w-full flex flex-row-reverse justify-start  px-3 py-1   rounded-3xl mt-2 text-xs placeholder-gray md:mt-3 bg-[#f4fff5]  outline-none"
    />
  );
}

export default PhoneNumberInput;
