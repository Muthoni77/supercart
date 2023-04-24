import { UserType } from "@/Types/Auth";
import { useAppSelector } from "@/hooks";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";

function Billing() {
  const user: UserType = useAppSelector((state) => {
    if (typeof state.auth.user !== "string") {
      return state.auth.user;
    }
  })!;
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
  return (
    <div className="w-full  pt-4">
      <div className="flex flex-col md:pl-2 space-y-3">
        <span className="text-xl  font-bold text-[#0f172a] flex items-center ">
          Billing and Payments
          <MdEdit
            className="ml-2 hover:cursor-pointer text-[#fec242] hover:text-[#d18d01] hover:scale-105"
            size={20}
            onClick={() => setShowUpdateForm(true)}
          />
        </span>
        <span className=" text-dark text-sm mt-2">
          At our online store, we believe that payment should be as easy and
          effortless as shopping. That`&apos;s why we&apos;ve created a seamless
          checkout and billing process that lets you focus on what really
          matters – finding the perfect products for you.
        </span>
      </div>
    </div>
  );
}

export default Billing;
