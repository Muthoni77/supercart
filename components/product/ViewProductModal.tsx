import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { MdClose, MdStar } from "react-icons/md";
import { toggleShowModal } from "@/features/slices/ProductSlice";
import { BsStars } from "react-icons/bs";

const ViewProductModal = () => {
  const dispatch = useAppDispatch();
  const { currentProduct } = useAppSelector((state) => state.products);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1000 }}
    >
      <div className="bg-white rounded-3xl p-6 relative w-full md:w-3/4 min-h-[70vh]">
        <MdClose
          size={25}
          color="gray"
          className="absolute right-4 top-4 hoverUpEffect"
          onClick={() => {
            dispatch(toggleShowModal(false));
          }}
        />
        <div className="w-full h-full flex p-6">
          <div className="w-full md:w-1/2 bg-[#f2f4f5] rounded-2xl flex justify-center">
            <img className="w-full" src={currentProduct?.photo} />
          </div>
          <div className="w-full md:w-1/2  px-6">
            <span className="font-extrabold text-3xl">
              {currentProduct?.title}
            </span>

            <div className="flex items-center my-4 space-x-4">
              <span className="text-[#26c661] border-[#26c661] border-2 rounded-xl text-base w-[60px] font-bold p-[3px] flex items-center justify-center">
                ${currentProduct?.price || "84"}
              </span>
              <span className="w-[1px] h-[25px] bg-slate-300"></span>
              <span className="flex items-center">
                <MdStar color="#facc15" className="mr-2" />{" "}
                {currentProduct?.reviews || "135"} reviews
              </span>
              <span>{currentProduct?.rating || "4.9"}</span>
              <span className="flex items-center">
                <BsStars /> New in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductModal;
