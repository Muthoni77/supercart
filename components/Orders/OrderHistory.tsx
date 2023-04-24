import React from "react";
import { MdEdit } from "react-icons/md";

function OrderHistory() {
  return (
    <div className="w-full  pt-4">
      <div className="flex flex-col md:pl-2 space-y-3">
        <span className="text-xl  font-bold text-[#0f172a] flex items-center ">
          Order History
          <MdEdit
            className="ml-2 hover:cursor-pointer text-[#fec242] hover:text-[#d18d01] hover:scale-105"
            size={20}
          />
        </span>
        <span className=" text-dark text-sm mt-2">
          With our order history feature, you can review past orders, track
          shipments, and easily reorder products you love.
        </span>
      </div>
    </div>
  );
}

export default OrderHistory;
