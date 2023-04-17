import { useState, useEffect } from "react";
import { UserType } from "@/Types/Auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAppSelector } from "@/hooks";
import { useRouter } from "next/router";
import PersonalInformation from "@/components/accountDetails/PersonalInformation";
import Billing from "@/components/accountDetails/Billing";
import OrderHistory from "@/components/Orders/OrderHistory";
import GiftCard from "@/components/Incentives/GiftCard";

const UserAccount = () => {
  const router = useRouter();
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
            <div className="md:min-h-[50vh] md:border-r border-gray-300 w-full md:w-1/4 flex flex-col pt-4">
              <img src="/avatar.png" className="rounded-full h-20 w-20" />
              <span className="font-bold text-dark text-base mt-2">
                {user.username}
              </span>
              <span className=" text-gray-600 text-xs">{user.email}</span>
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
        <Footer />
      </div>
    </>
  );
};

export default UserAccount;
