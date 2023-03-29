import { useState } from "react";
import { ProductCardType } from "@/Types/products";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { ProductCardPhotoType } from "@/Types/products";

function ProductCardPhotos({
  title,
  productColor,
  photo,
  price,
  rating,
  reviews,
}: ProductCardPhotoType) {
  return (
    <>
      <div
        className={`flex flex-col rounded-3xl  relative h-fit hover:cursor-pointer `}
      >
        <div className="p-[6px]">
          <div className="bg-[#f3f4f6]  rounded-2xl h-[230px] w-full mx-auto">
            <img src={photo} alt="" className="w-[230px] mx-auto" />
          </div>
        </div>
        <div className="flex">
          <div className="1/3 p-[6px] ">
            <div className=" bg-[#f3f4f6] rounded-2xl w-full flex items-center justify-center">
              <img src={photo} alt="" className="w-full" />
            </div>
          </div>
          <div className="1/3 p-[6px] ">
            <div className=" bg-[#f3f4f6] rounded-2xl w-full flex items-center justify-center">
              <img src={photo} alt="" className="w-full" />
            </div>
          </div>
          <div className="1/3 p-[6px] ">
            <div className=" bg-[#f3f4f6] rounded-2xl w-full flex items-center justify-center">
              <img src={photo} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col space-y-1 p-3 bg-white">
        <div className="flex items-center justify-between">
          <span className="text-[#0f172a] font-bold  text-xl">{title}</span>
          <span className="text-[#22c55e] border-2 text-sm border-[#22c55e] pl-1 pr-1 rounded-lg">
            Ksh {price}
          </span>
        </div>
        <div className="flex justify-start items-center pt-1">
          <span className="text-[#556377] mr-2">{productColor} |</span>
          <span className="text-[#556377] text-sm flex items-center">
            <AiFillStar size={20} color="#fbbf24" className="mr-1" />
            {rating} ({reviews} review{reviews !== 1 && "s"})
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductCardPhotos;
