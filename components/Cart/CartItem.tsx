import { useState } from "react";
import { CartItem } from "@/Types/products";
import { removeProduct, setProductQuantity } from "@/features/slices/CartSlice";
import { useAppDispatch } from "@/hooks";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface PropTypes {
  product: CartItem;
}

const CartItem = ({ product }: PropTypes) => {
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeProduct(product.title));
  };
  const [num, setNum] = useState<number>(1);

  const handleSetNum = (isAdding: boolean) => {
    switch (isAdding) {
      case true:
        setNum(num + 1);
        dispatch(
          setProductQuantity({ title: product.title, action: isAdding })
        );
        break;
      case false:
        if (num > 1) {
          setNum(num - 1);
          dispatch(
            setProductQuantity({ title: product.title, action: isAdding })
          );
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className={`flex mt-3 border-b border-gray-100 py-4`}>
      <div className="bg-[#f1f5f9] rounded-xl flex items-center justify-center w-1/5">
        <img src={product.photo} className="w-full" />
      </div>
      <div className="w-4/5 flex justify-between px-4">
        <div className="flex flex-col justify-between space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-[#334155]">{product.title}</span>
            <span className="flex items-center text-gray-500 text-sm">
              {product.color}
              <span className="border-l border-gray-300 ml-2 pl-2">
                {product.size}
              </span>
            </span>
          </div>
          <span className="flex items-center text-gray-500 text-sm mt-3">
            Qty <span className="ml-1">{product.quantity}</span>
          </span>
        </div>
        <div className="">
          <div className="flex items-center space-x-5 justify-between p-3 rounded-3xl">
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
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-[#26c661] border-[#26c661] border-2 rounded-lg text-sm w-[60px] font-bold p-[2px] flex items-center justify-center">
            ${"84"}
          </span>
          <span
            onClick={handleRemove}
            className="text-[#0ea5e9] text-sm hover:cursor-pointer hover:underline hover:text-[#0c89be]"
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
