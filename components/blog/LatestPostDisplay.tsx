import React from "react";

const LatestPostDisplay = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f7f7f9] p-6 md:px-20 md:py-16">
      <div className="w-full ">
        <span className="font-bold text-[20px] md:text-3xl">
          The latest news.
        </span>
        <span className="font-bold text-[20px] md:text-3xl ml-2 text-[#6b7280]">
          From Supercart blog
        </span>
      </div>
    </div>
  );
};

export default LatestPostDisplay;
