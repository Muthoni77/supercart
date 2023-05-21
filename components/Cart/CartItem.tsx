import React from "react";

const CartItem = () => {
  return (
    <div className="flex w">
      <div className="bg-[#f1f5f9] rounded-xl flex items-center justify-center w-1/5">
        <img src={"./products/1.webp"} className="w-full" />
      </div>
      <div className="w-4/5 flex justify-between">
        <div className="flex flex-col">
          <span className="font-bold color-[#334155]">Rey Nylon Backpack</span>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default CartItem;
