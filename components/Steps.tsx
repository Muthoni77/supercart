import React from "react";

function Steps() {
  return (
    <div className="w-full flex flex-col md:flex-row pl-20 pr-20 my-24">
      <div className="flex flex-col items-center space-y-6 w-full md:w-1/4">
        <img className="w-1/2" src="/steps/1.webp" alt="" />
        <span className="py-1 mt-6 px-4 rounded-full font-medium text-xs w-fit text-red-800 bg-red-100  relative">
          Step 1
        </span>
        <span className=" font-bold">Filter & Discover</span>
        <span className="text-darkish text-center text-sm w-5/6 mx-auto">
          Smart filtering and suggestions make it easy to find
        </span>
      </div>
      <div className="flex flex-col items-center space-y-6 w-full md:w-1/4">
        <img className="w-1/2" src="/steps/2.webp" alt="" />
        <span className="py-1 mt-6 px-4 rounded-full font-medium text-xs w-fit text-blue-800 bg-blue-100  relative">
          Step 2
        </span>
        <span className=" font-bold">Add to bag</span>
        <span className="text-darkish text-center text-sm w-5/6 mx-auto">
          Easily select the correct items and add them to the cart
        </span>
      </div>
      <div className="flex flex-col items-center space-y-6 w-full md:w-1/4">
        <img className="w-1/2" src="/steps/3.webp" alt="" />
        <span className="py-1 mt-6 px-4 rounded-full font-medium text-xs w-fit text-yellow-800 bg-yellow-100  relative">
          Step 3
        </span>
        <span className=" font-bold">Fast shipping</span>
        <span className="text-darkish text-center text-sm w-5/6 mx-auto">
          The carrier will confirm and ship quickly to you
        </span>
      </div>
      <div className="flex flex-col items-center space-y-6 w-full md:w-1/4">
        <img className="w-1/2" src="/steps/4.webp" alt="" />
        <span className="py-1 mt-6 px-4 rounded-full font-medium text-xs w-fit text-purple-800 bg-purple-100  relative">
          Step 4
        </span>
        <span className=" font-bold">Enjoy the product</span>
        <span className="text-darkish text-center text-sm w-5/6 mx-auto">
          Have fun and enjoy your 5-star quality products
        </span>
      </div>
    </div>
  );
}

export default Steps;
