import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const AddToCartBtn = () => {
  const [num, setNum] = useState(1);
  const handleSetNum = (isAdding: boolean) => {
    switch (isAdding) {
      case true:
        setNum(num + 1);
        break;
      case false:
        num > 1 && setNum(num - 1);
        break;
      default:
        break;
    }
  };
  return (
    <div className="my-12 flex items-center justify-between ml-4">
      <div className="flex items-center justify-between w-1/4">
        <div
          className={`border rounded-full p-2 border-1 cursor-pointer hover:border-gray-700 border-[${
            num > 1 ? "#9ca3af" : "#c8cdd5"
          }]`}
          onClick={() => {
            handleSetNum(false);
          }}
        >
          <AiOutlineMinus color={`${num > 1 ? "black" : "#838891"}`} />
        </div>
        <span className="">{num}</span>
        <div
          className={`border  rounded-full p-2 border-1 border-[#9ca3af] cursor-pointer hover:border-gray-700`}
          onClick={() => {
            handleSetNum(true);
          }}
        >
          <AiOutlinePlus />
        </div>
      </div>
      <div className="w-3/4 pl-8">
        <div className="flex items-center justify-center rounded-3xl p-4  font-bold w-full bg-[#0f172a] text-white hover:cursor-pointer hoverDownEffect">
          <HiOutlineShoppingBag size={20} className="mr-2" /> Add to cart
        </div>
      </div>
    </div>
  );
};

export default AddToCartBtn;
