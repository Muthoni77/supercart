"use client";
import React from "react";

function KidsBanner() {
  return (
    <div className="relative w-100 flex flex-col md:flex-row items-center mx-2 md:mx-20 bg-[#fefce8] pt-10 pb-12 md:pb-2 my-10 md:my-24 rounded-3xl">
      <div className="w-full md:w-1/2">
        <img
          src="/banner/kidsbanner.webp"
          alt=""
          className="w-full -mt-10  md:-mt-28"
        />
      </div>
      <div className="w-full md:w-1/2 flex mt-20 md:mt-2 flex-col space-y-8 pl-4 md:pl-8">
        <div className="flex items-center">
          <img src="/logo.png" className="w-[70px] " />
          <span className="text-2xl font-bold ml-2">SuperCart</span>
        </div>
        <h1 className="text-[#111827] text-4xl md:text-5xl font-bold">
          Special Offer in kids products
        </h1>
        <div className="text-darkish">Dress them up, watch them shine</div>
        <button className="shadow-2xl w-fit py-3 mt-8 px-6 rounded-3xl text-white hover:cursor-pointer hover:scale-95 duration-75 bg-[#111827] ">
          Discover more
        </button>
        <div className=" w-[20px] h-[20px] scale-50 md:scale-100 bg-[#43b97f] rounded-full absolute right-10 top-2 md:right-40 md:top-24"></div>
        <div className=" w-[20px] h-[20px] scale-50 md:scale-100 bg-[#ff6650] rounded-full absolute left-4 top-60 md:left-24 md:bottom-24"></div>
        <div className=" w-[20px] h-[20px] scale-50 md:scale-100 bg-[#ffb951] rounded-full absolute right-4 top-72 md:right-24 md:top-3/4"></div>
      </div>
    </div>
  );
}

export default KidsBanner;
