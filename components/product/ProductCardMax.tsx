import React from "react";
import { ProductCardType } from "@/Types/products";
import { AiFillStar } from "react-icons/ai";

function ProductCardMax({ bg, title, body, photo }: ProductCardType) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`flex flex-col rounded-lg  relative h-fit hover:shadow `}
    >
      <img src={photo} alt="" className="w-full -mt-5  mx-auto" />
      <div className=" flex flex-col space-y-1 p-3 bg-white">
        <span className="text-[#0f172a] font-bold">{body}</span>
        <span className="text-[#556377]">{title}</span>
        <div className="flex justify-between items-center pt-3">
          <span className="text-[#22c55e] border-2 border-[#22c55e] pl-1 pr-1 rounded-lg">
            $30
          </span>
          <span className="text-[#556377] text-sm flex items-center">
            <AiFillStar size={20} color="#fbbf24" className="mr-1" />
            4.9 (98 reviews)
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCardMax;
