import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { toggleShowModal } from "@/features/slices/ProductSlice";

const ViewProductModal = () => {
  const dispatch = useAppDispatch();
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
        ViewProductModal
      </div>
    </div>
  );
};

export default ViewProductModal;
