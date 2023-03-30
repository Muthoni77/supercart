import { useState } from "react";
import { ProductDepartmentType } from "@/Types/products";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";

function DepartmentCard({
  bg,
  photo,
  title,
  categories,
}: ProductDepartmentType) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <>
      <div
        style={{ backgroundColor: bg }}
        className={`flex flex-col rounded-3xl  relative h-fit hover:shadow `}
      >
        <img src={photo} alt="" className="w-3/4 md:w-full  -mt-5  mx-auto" />
      </div>
      <div className=" flex flex-col space-y-1 p-3 bg-white items-center">
        <span className="text-[#0f172a] font-bold text-lg mt-4">{title}</span>
        <span className="text-[#556377] text-sm">{categories}+ categories</span>
      </div>
    </>
  );
}

export default DepartmentCard;
