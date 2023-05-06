import { useState, useEffect, useRef } from "react";
import { UserType } from "@/Types/Auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAppSelector } from "@/hooks";
import { useRouter } from "next/router";
import PersonalInformation from "@/components/accountDetails/PersonalInformation";
import Billing from "@/components/accountDetails/Billing";
import OrderHistory from "@/components/Orders/OrderHistory";
import GiftCard from "@/components/Incentives/GiftCard";
import { MdEdit } from "react-icons/md";
import ImageCropper from "@/utils/ImageCropper";

const UserAccount = () => {
  const photoUpdateRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [photoChange, setPhotoChange] = useState("");
  const [showCropper, setShowCropper] = useState<boolean>(true);

  const [activeTab, setActiveTab] = useState<string>("0");
  const user: UserType = useAppSelector((state) => {
    if (typeof state.auth.user !== "string") {
      return state.auth.user;
    }
  })!;

  const setView = () => {
    switch (activeTab) {
      case "0":
        return <PersonalInformation />;
      case "1":
        return <Billing />;
      case "2":
        return <OrderHistory />;
      case "3":
        return <GiftCard />;
    }
  };

  useEffect(() => {
    setView();
  }, [activeTab]);

  return (
    <>
      <div className="p-0 m-0 bg-[#f6f5f8]">
        <Navbar />
        <div className="min-h-screen pt-20 md:pt-24 relative pb-24">
          <div className="flex flex-col md:flex-row w-full md:w-5/6 mx-auto pt-6 px-6 md:px-20 ">
            <div className="md:min-h-[50vh] relative md:border-r border-gray-300 w-full md:w-1/4 flex flex-col pt-4">
              <span className="flex">
                <img src="/avatar.png" className="rounded-full h-20 w-20" />
                <MdEdit
                  className="ml-2 hover:cursor-pointer text-[#fec242] hover:text-[#d18d01] hover:scale-105"
                  size={20}
                  onClick={() => {
                    photoUpdateRef?.current?.click();
                  }}
                />
                <input type="file" ref={photoUpdateRef} className="hidden" />
              </span>
              <span className="font-bold text-dark text-base mt-2">
                {user?.username}
              </span>
              <span className=" text-gray-600 text-xs">{user?.email}</span>
              <div className="nav-tabs flex flex-col space-y-4 mt-10">
                <span
                  className={`nav-tab-link hover:cursor-pointer hover:font-bold duration-200  ${
                    activeTab === "0"
                      ? "font-bold text-[#e79c01]"
                      : "text-darkish"
                  }`}
                  onClick={() => {
                    setActiveTab("0");
                  }}
                >
                  Personal Information
                </span>
                <span
                  className={`nav-tab-link hover:cursor-pointer hover:font-bold duration-200  ${
                    activeTab === "1"
                      ? "font-bold text-[#e79c01]"
                      : "text-darkish"
                  }`}
                  onClick={() => {
                    setActiveTab("1");
                  }}
                >
                  Billing and payments
                </span>
                <span
                  className={`nav-tab-link hover:cursor-pointer hover:font-bold duration-200  ${
                    activeTab === "2"
                      ? "font-bold text-[#e79c01]"
                      : "text-darkish"
                  }`}
                  onClick={() => {
                    setActiveTab("2");
                  }}
                >
                  Order History
                </span>
                <span
                  className={`nav-tab-link hover:cursor-pointer hover:font-bold duration-200  ${
                    activeTab === "3"
                      ? "font-bold text-[#e79c01]"
                      : "text-darkish"
                  }`}
                  onClick={() => {
                    setActiveTab("3");
                  }}
                >
                  Gift Cards
                </span>

                <button></button>
              </div>
            </div>
            <div className="min-h-[50vh] w-full md:w-3/4 md:pl-12 pt-4 ">
              {setView()}
            </div>
          </div>
        </div>
            {showCropper && <ImageCropper />}
        <Footer />
      </div>
    </>
  );
};

export default UserAccount;
