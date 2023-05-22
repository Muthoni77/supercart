import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const AddToCartBtn = ({ addToCart, setQuantity }: any) => {
  const [num, setNum] = useState<number>(1);

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
    <div className="pt-2 pb-7 flex items-center justify-between border-b-1 border-b-gray-200 border-b">
      <div className="flex items-center justify-between w-1/3 bg-[#f5f8fb] p-3 rounded-3xl">
        <div
          className={`border rounded-full p-2 border-1 ${
            num > 1 && "cursor-pointer hover:border-gray-700"
          } border-[${num > 1 ? "#9ca3af" : "#c8cdd5"}]`}
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
      <div className="w-2/3 pl-4 ">
        <div
          onClick={() => {
            addToCart(num);
          }}
          className="flex items-center justify-center rounded-3xl p-4  font-bold w-full bg-[#0f172a] text-white hover:cursor-pointer hoverDownEffect shadow-xl"
        >
          <HiOutlineShoppingBag size={20} className="mr-2" /> Add to cart
        </div>
      </div>
    </div>
  );
};

export default AddToCartBtn;
