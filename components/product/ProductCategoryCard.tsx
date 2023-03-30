import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ProductCategoryCardType } from "@/Types/products";

function ProductCategoryCard({
  photo,
  products,
  manufacturer,
  title,
  color,
}: ProductCategoryCardType) {
  return (
    <div className="bg-white px-6 py-4 md:py-8  flex flex-col  hover:shadow-xl hover:cursor-pointer rounded-3xl">
      <div className="flex justify-between items-center">
        <div
          className={`w-[80px] rounded-full`}
          style={{ backgroundColor: color }}
        >
          <img src={photo} alt="" className="w-full" />
        </div>
        <span className="text-[#111827] text-xs font-semibold">
          {products} product{products !== 1 && "s"}
        </span>
      </div>
      <span className="text-darkish text-sm md:text-base mt-6 md:mt-12">
        {manufacturer}
      </span>
      <span className="text-[#111827] text-2xl md:text-3xl font-bold mt-1 md:mt-3">
        {title}
      </span>
      <span className="text-[#111827] hover:text-blue-500 flex items-center mt-6 md:mt-10 text-sm ">
        see collection <BsArrowRight className="ml-2" />
      </span>
    </div>
  );
}

export default ProductCategoryCard;
