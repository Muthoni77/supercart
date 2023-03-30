import { useState } from "react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { MdOutlineChildFriendly, MdOutlineDiamond } from "react-icons/md";
import { CiDumbbell } from "react-icons/ci";
import { AiOutlineCrown } from "react-icons/ai";

function ExploreTab() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div
        id="exploreTab"
        className="flex w-full  md:w-fit overflow-x-auto  mx-auto shadow-xl rounded-3xl my-8 md:my-12 p-1 bg-white"
      >
        <span
          onClick={() => setActiveTab(0)}
          className={` ${
            activeTab === 0
              ? "bg-[#0f172a] text-white"
              : " text-[#475569] bg-transparent hover:text-black"
          } flex items-center  hover:cursor-pointer py-2 md:py-3 px-4 md:px-7 mr-1 rounded-3xl text-xs md:text-base justify-center`}
        >
          <BsGenderFemale size={18} className="mr-1 md:mr-2" />
          Women
        </span>
        <span
          onClick={() => setActiveTab(1)}
          className={` ${
            activeTab === 1
              ? "bg-[#0f172a] text-white"
              : " text-[#475569] bg-transparent hover:text-black"
          } flex items-center  hover:cursor-pointer py-2 md:py-3 px-4 md:px-7 mr-1 rounded-3xl text-xs md:text-base justify-center`}
        >
          <BsGenderMale size={18} className="mr-1 md:mr-2" />
          Men
        </span>
        <span
          onClick={() => setActiveTab(2)}
          className={` ${
            activeTab === 2
              ? "bg-[#0f172a] text-white"
              : " text-[#475569] bg-transparent hover:text-black"
          } flex items-center  hover:cursor-pointer py-2 md:py-3 px-4 md:px-7 mr-1 rounded-3xl text-xs md:text-base justify-center`}
        >
          <MdOutlineChildFriendly size={18} className="mr-1 md:mr-2" />
          Kids
        </span>
        <span
          onClick={() => setActiveTab(3)}
          className={` ${
            activeTab === 3
              ? "bg-[#0f172a] text-white"
              : " text-[#475569] bg-transparent hover:text-black"
          } flex items-center  hover:cursor-pointer py-2 md:py-3 px-4 md:px-7 mr-1 rounded-3xl text-xs md:text-base justify-center`}
        >
          <CiDumbbell size={18} className="mr-1 md:mr-2" />
          Sports
        </span>
        <span
          onClick={() => setActiveTab(4)}
          className={` ${
            activeTab === 4
              ? "bg-[#0f172a] text-white"
              : " text-[#475569] bg-transparent hover:text-black"
          } flex items-center  hover:cursor-pointer py-2 md:py-3 px-4 md:px-7 mr-1 rounded-3xl text-xs md:text-base justify-center`}
        >
          <AiOutlineCrown size={18} className="mr-1 md:mr-2" />
          Beauty
        </span>
        <span
          onClick={() => setActiveTab(5)}
          className={` ${
            activeTab === 5
              ? "bg-[#0f172a] text-white"
              : " text-[#475569] bg-transparent hover:text-black"
          } flex items-center  hover:cursor-pointer py-2 md:py-3 px-4 md:px-7 mr-1 rounded-3xl text-xs md:text-base justify-center`}
        >
          <MdOutlineDiamond size={18} className="mr-1 md:mr-2" />
          Jewellery
        </span>
      </div>
    </div>
  );
}

export default ExploreTab;
