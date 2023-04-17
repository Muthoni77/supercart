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
          Manage your personal information including contacts, email address,
          where you can be contacted.
        </span>
      </div>
      <div className="flex flex-wrap w-full mt-4 justify-between ">
        <div className="relative rounded-2xl w-[45%] md:w-[45%] mr-2 mt-2 mb-2 md:ml-2 bg-white p-5 flex flex-col space-y-2 shadow-sm text-darkish">
          <span className="font-bold text-base text-dark text-sm">
            Username
          </span>
          <span className="text-sm">{user.username}</span>
        </div>
        <div className="relative rounded-2xl w-[45%] md:w-[45%] mr-2 mt-2 mb-2 md:ml-2 bg-white p-5 flex flex-col space-y-2 shadow-sm text-darkish">
          <span className="font-bold text-base text-dark text-sm">
            Date of birth
          </span>
          <span className="text-sm">{user.dob ? user.dob : "N/A"}</span>
        </div>
        <div className="relative rounded-2xl w-[45%] md:w-[45%] mr-2 mt-2 mb-2 md:ml-2 bg-white p-5 flex flex-col space-y-2 shadow-sm text-darkish">
          <span className="font-bold text-base text-dark text-sm">Country</span>
          <span className="text-sm">{user.country ? user.country : "N/A"}</span>
        </div>
        <div className="relative rounded-2xl w-[45%] md:w-[45%] mr-2 mt-2 mb-2 md:ml-2 bg-white p-5 flex flex-col space-y-2 shadow-sm text-darkish">
          <span className="font-bold text-base text-dark text-sm">
            Language
          </span>
          <span className="text-sm">
            {user.language ? user.language : "N/A"}
          </span>
        </div>
        <div className="relative rounded-2xl w-[70%] md:w-[45%] mr-2 mt-2 mb-2 md:ml-2 bg-white p-5 flex flex-col space-y-2 shadow-sm text-darkish">
          <span className="font-bold text-base text-dark text-sm">
            Contactable at
          </span>
          <span className="text-sm">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Billing;
