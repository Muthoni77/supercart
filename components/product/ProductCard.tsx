import React from "react";
import { ProductCardType } from "@/Types/products";

function ProductCard({ bg, title, body, photo }: ProductCardType) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`flex rounded-lg p-6  md:p-8 relative h-52 md:h-64 hover:shadow `}
    >
      <div className=" flex flex-col space-y-4">
        <span className="text-[#556377]">{title}</span>
        <span className="text-[#0f172a] font-bold text-xl md:text-2xl  w-2/3">
          {body}
        </span>
        <button className="text-sm md:text-base absolute bottom-6 md:bottom-10 hover:cursor-pointer rounded-2xl hover:shadow-lg text-[#556377] text-md bg-white pt-2 pb-2 pl-5 pr-5 w-fit">
          show me all
        </button>
      </div>

      <img
        src={photo}
        alt=""
        className="absolute -top-4 -right-10"
        style={{ width: "70%" }}
      />
    </div>
  );
}

export default ProductCard;
