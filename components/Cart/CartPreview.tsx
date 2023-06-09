import { forwardRef } from "react";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import { useAppSelector } from "@/hooks";

const CartPreview = forwardRef(function ({}: any, ref: any) {
  const { products } = useAppSelector((state) => state.cart);
  //TODO
  //disable border bottom on last item and when item is only one
  return (
    <div
      className={`${
        products.length > 0 ? "w-1/3" : "w-1/4"
      } bg-white fixed top-[65px]  rounded-3xl  right-12 shadow z-[50]`}
    >
      <div className="w-full flex flex-col space-y-3 p-6" ref={ref}>
        <span className="text-lg font-bold text-[#334155] ">Shopping Cart</span>
        {products.length > 0 ? (
          <>
            <div
              className="w-full max-h-[50vh] no-scrollbar"
              style={{ overflowY: "auto" }}
            >
              {products.map((product: any, index: number) => (
                <CartItem key={index} product={product} isPreview={true} />
              ))}
            </div>
          </>
        ) : (
          <div className="px-3 py-6">
            <img
              alt="Oops! You have no items in the cart"
              src="./cartEmpty.gif"
              className="w-3/4 mx-auto"
            />
            <div className="mx-auto text-[#4b4b4b] text-sm text-center">
              You currently don't have any items in your cart.
            </div>
          </div>
        )}
      </div>
      {products.length > 0 && <PriceDetails />}
    </div>
  );
});

export default CartPreview;
