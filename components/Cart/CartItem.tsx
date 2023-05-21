import React from "react";

const CartItem = () => {
  return (
    <div className={`flex mt-3 border-b border-gray-100 py-4`}>
      <div className="bg-[#f1f5f9] rounded-xl flex items-center justify-center w-1/5">
        <img src={"./products/1.webp"} className="w-full" />
      </div>
      <div className="w-4/5 flex justify-between px-4">
        <div className="flex flex-col justify-between space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-[#334155]">Rey Nylon Backpack</span>
            <span className="flex items-center text-gray-500 text-sm">
              Natural{" "}
              <span className="border-l border-gray-300 ml-2 pl-2">XL</span>
            </span>
          </div>
          <span className="flex items-center text-gray-500 text-sm mt-3">
            Qty <span className="ml-1">1</span>
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-[#26c661] border-[#26c661] border-2 rounded-lg text-sm w-[60px] font-bold p-[2px] flex items-center justify-center">
            ${"84"}
          </span>
          <span className="text-[#0ea5e9] text-sm hover:cursor-pointer hover:underline hover:text-[#0c89be]">
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
