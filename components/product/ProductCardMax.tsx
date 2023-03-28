import { useState } from "react";
import { ProductCardType } from "@/Types/products";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";

function ProductCardMax({ bg, title, body, photo }: ProductCardType) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <>
      <div
        style={{ backgroundColor: bg }}
        className={`flex flex-col rounded-3xl  relative h-fit hover:shadow `}
      >
        {!isLiked ? (
          <AiOutlineHeart
            size={40}
            className="absolute text-darkish cursor-pointer right-2 top-2 bg-white rounded-full p-2 hover:scale-105"
            onClick={() => {
              setIsLiked(true);
            }}
          />
        ) : (
          <AiFillHeart
            size={40}
            className="absolute text-red-500 cursor-pointer right-2 top-2 bg-white rounded-full p-2 hover:scale-105"
            onClick={() => {
              setIsLiked(false);
            }}
          />
        )}
        <img src={photo} alt="" className="w-full  -mt-5  mx-auto" />
      </div>
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
    </>
  );
}

export default ProductCardMax;
