import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogin,
  AiOutlineHeart,
} from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { MdClose, MdLogin, MdOutlineAccountCircle } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { UserType } from "@/Types/Auth";
import { toast } from "react-toastify";
import axiosWrapper from "@/utils/axios/axiosWrapper";
import { logout } from "@/features/slices/AuthSlice";
import DarkOverlaySpinner from "./Spinners/DarkOverlaySpinner";

function Navbar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [showProfileDropdown, setShowProfileDropdown] =
    useState<boolean>(false);

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user: UserType = useAppSelector((state) => {
    if (typeof state.auth.user !== "string") {
      return state.auth.user;
    }
  })!;

  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    try {
      setShowProfileDropdown(false);
      setLoading(true);
      const response: any = await axiosWrapper({
        method: "get",
        url: "/auth/logout",
        data: {},
      });

      setLoading(false);
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(logout());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <div
        id="navbar"
        className="navbar w-screen fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
      >
        <div className="md:container  mx-auto flex items-center justify-around md:justify-around z-[100]">
          {showMobileNav ? (
            <AiOutlineClose
              onClick={() => {
                document.body.style.overflow = "visible";
                const mobileNav = document.getElementById("mobileNav");
                mobileNav?.classList?.replace(
                  "animate__fadeInLeft",
                  "animate__fadeOutLeft"
                );
                setTimeout(() => {
                  setShowProfileDropdown(false);
                  setShowMobileNav(false);
                }, 200);
              }}
              size={24}
              className="block md:hidden ml-4 mr-4"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => {
                document.body.style.overflow = "hidden";
                setShowProfileDropdown(false);
                setShowMobileNav(true);
              }}
              size={24}
              className="block md:hidden ml-4 mr-4"
            />
          )}
          <div
            className="flex items-end md:items-center p-3  w-fit md:w-1/4 hover:cursor-pointer"
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img
              src={"/logo.PNG"}
              alt="logo"
              className="w-[40px] md:w-[60px] "
            />
            <div className="flex flex-col pl-1 md:pl-3 ">
              <span className="text-lg md:text-2xl font-bold">SuperCart</span>
              <span className="hidden md-block mt-0 text-sm">
                Shop smarter not harder
              </span>
            </div>
          </div>
          <div className="flex   justify-end md:justify-between w-fit  md:w-3/4">
            <div className="hidden  justify-center items-center w-fit   md:w-3/4 md:flex">
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f1f5f9] "
                href={"#"}
              >
                Men
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f1f5f9] "
                href={"#"}
              >
                Women
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f1f5f9] "
                href={"#"}
              >
                Beauty
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f1f5f9] "
                href={"#"}
              >
                Sports
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f1f5f9] "
                href={"#"}
              >
                Explore
              </Link>
            </div>
            <div className="flex items-center w-fit md:w-1/4 justify-end ">
              <AiOutlineSearch
                size={40}
                color={"#334155"}
                className="hidden md:block mr-5 hover:cursor-pointer hover:bg-[#f1f5f9] rounded-full p-2"
              />
              <AiOutlineUser
                onClick={() => {
                  const dropCont =
                    document.getElementsByClassName("profile-dropdown")[0];

                  if (window.innerWidth > 700) {
                    dropCont?.classList.add("animate__slideInUp");
                  } else {
                    dropCont?.classList.add("animate__fadeInLeft");
                  }
                  setShowMobileNav(false);
                  setShowProfileDropdown(!showProfileDropdown);
                  // setTimeout(() => {
                  // }, 200);
                }}
                size={40}
                color={"#334155"}
                className=" mr-0  ml-0 md:ml-0 md:mr-5 hover:cursor-pointer hover:bg-[#f1f5f9] rounded-full p-2"
              />
              <AiOutlineShoppingCart
                size={40}
                color={"#334155"}
                className=" mr-0 ml-0  md:ml-0 md:mr-5 hover:cursor-pointer hover:bg-[#f1f5f9] rounded-full p-2"
              />
            </div>
          </div>
        </div>
      </div>

      {showProfileDropdown && (
        <div className="profile-dropdown bg-white h-full md:h-fit rounded-none md:rounded-3xl shadow pt-12 md:pt-6 pb-2 w-full md:w-[19%] fixed  top-[7.5%] md:top-[9.8%] z-[100] min-h-1/8 p-6 md:p-3 right-0 md:right-[7%] animate__animated   animate__faster">
          <MdClose
            className="block md:hidden absolute right-6 top-6 hover:scale-110"
            size={22}
            onClick={() => {
              const dropCont =
                document.getElementsByClassName("profile-dropdown")[0];
              dropCont.classList.remove(
                "animate__fadeOutUp",
                "animate__fadeInLeft"
              );
              if (window.innerWidth > 700) {
                dropCont.classList.add("animate__fadeOutUp");
              } else {
                dropCont.classList.add("animate__fadeOutLeft");
              }

              setTimeout(() => {
                setShowProfileDropdown(false);
              }, 200);
            }}
          />
          {isAuthenticated && user && (
            <div className="flex items-center border-b pb-4 mb-4 px-4">
              <img
                src="/avatar.png"
                className="w-[40px]  rounded-full mr-3"
                alt=""
              />
              <div className="flex flex-col ">
                <span className="font-bold text-base ">{user?.username}</span>
                <span className="text-xs text-darkish">{user?.email}</span>
              </div>
            </div>
          )}
          <span className="text-darkish text-base hover:bg-gray-100 hover:cursor-pointer py-3 flex items-center  rounded-xl pl-2">
            <RiUserSettingsLine size={20} className="mr-3" /> My Account
          </span>
          <span className="text-darkish text-base hover:bg-gray-100 hover:cursor-pointer py-3 flex items-center  rounded-xl pl-2">
            <HiOutlineClipboardList size={20} className="mr-3" /> My Orders
          </span>
          <span className="text-darkish text-base hover:bg-gray-100 hover:cursor-pointer py-3 flex items-center rounded-xl pl-2 ">
            <AiOutlineHeart size={20} className="mr-3" /> Wishlist
          </span>
          <span className="text-darkish text-base hover:bg-gray-100 hover:cursor-pointer py-3 flex items-center rounded-xl pl-2 ">
            <IoHelpBuoyOutline size={20} className="mr-3" /> Help
          </span>
          <hr className="w-full mx-2 my-2" />
          {!isAuthenticated ? (
            <>
              <span
                onClick={() => {
                  router.push("/auth/login");
                }}
                className="text-darkish text-base rounded-xl hover:bg-gray-100 hover:cursor-pointer py-3 flex items-center   pl-2 "
              >
                <MdLogin size={20} className="mr-3" /> Login
              </span>{" "}
              <span
                onClick={() => {
                  router.push("/auth/register");
                }}
                className="text-darkish text-base rounded-xl hover:bg-gray-100 hover:cursor-pointer py-3 flex items-center   pl-2 "
              >
                <MdOutlineAccountCircle size={20} className="mr-3" /> Register
              </span>{" "}
            </>
          ) : (
            <span
              onClick={handleLogout}
              className="text-darkish text-base rounded-xl hover:bg-gray-100 hover:cursor-pointer py-3 flex items-center   pl-2 "
            >
              <CiLogout size={20} className="mr-3" /> Logout
            </span>
          )}
        </div>
      )}

      {showMobileNav && (
        <div
          id="mobileNav"
          className="h-screen pt-12 bg-white w-full fixed z-40 top-0 border-t border-gray-100 animate__animated animate__fadeInLeft animate__faster"
        >
          <div className="flex  space-y-2 py-8  pt-20  flex-col items-center justify-center">
            <div className=" flex flex-col items-center pb-2">
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-lg"
                href={"#"}
              >
                Men
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-lg"
                href={"#"}
              >
                Women
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-lg"
                href={"#"}
              >
                Beauty
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-lg"
                href={"#"}
              >
                Sports
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 mb-4 rounded-2xl hover:bg-[#f2fff3] text-lg"
                href={"#"}
              >
                Explore
              </Link>
            </div>
            <div className="h-[2px] w-3/4 mx-auto  bg-gray-200 mx-4"></div>
            <div className=" flex flex-col items-center pt-2">
              <Link
                className="mr-3 mt-4 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-lg flex items-center"
                href={"#"}
                onClick={() => router.push("/auth/login")}
              >
                Login <AiOutlineLogin className="ml-2" />
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-lg flex items-center"
                href={"#"}
                onClick={() => router.push("/auth/register")}
              >
                Create Account <AiOutlineUser className="ml-2" />
              </Link>{" "}
            </div>
          </div>
        </div>
      )}
      {loading && <DarkOverlaySpinner />}
    </>
  );
}

export default Navbar;
