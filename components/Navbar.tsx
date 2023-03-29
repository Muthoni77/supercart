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
} from "react-icons/ai";

function Navbar() {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  return (
    <>
      <div
        id="navbar"
        className="navbar w-screen fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
      >
        <div className="md:container  mx-auto flex items-center justify-around md:justify-around">
          {showMobileNav ? (
            <AiOutlineClose
              onClick={() => {
                document.body.style.overflow = "visible";
                setShowMobileNav(false);
              }}
              size={30}
              className="block md:hidden ml-4 mr-4"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => {
                document.body.style.overflow = "hidden";
                setShowMobileNav(true);
              }}
              size={30}
              className="block md:hidden ml-4 mr-4"
            />
          )}
          <div
            className="flex items-center p-3  w-fit md:w-1/4 hover:cursor-pointer"
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <Image src={"/logo.PNG"} alt="logo" width={60} height={60} />
            <div className="flex flex-col pl-3">
              <span className="text-2xl font-bold">SuperCart</span>
              <span className="hidden md-block mt-0 text-sm">
                Shop smarter not harder
              </span>
            </div>
          </div>
          <div className="flex   justify-end md:justify-between w-fit  md:w-3/4">
            <div className="hidden  justify-center items-center w-fit   md:w-3/4 md:flex">
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] "
                href={"#"}
              >
                Men
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] "
                href={"#"}
              >
                Women
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] "
                href={"#"}
              >
                Beauty
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] "
                href={"#"}
              >
                Sports
              </Link>
              <Link
                className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] "
                href={"#"}
              >
                Explore
              </Link>
            </div>
            <div className="flex items-center w-fit md:w-1/4 justify-end ">
              <AiOutlineSearch
                size={40}
                color={"#334155"}
                className="hidden md:block mr-5 hover:cursor-pointer hover:bg-[#f2fff3] rounded-full p-2"
              />
              <AiOutlineUser
                size={40}
                color={"#334155"}
                className="mr-0  ml-0 md:ml-0 md:mr-5 hover:cursor-pointer hover:bg-[#f2fff3] rounded-full p-2"
              />
              <AiOutlineShoppingCart
                size={40}
                color={"#334155"}
                className="mr-0 ml-0  md:ml-0 md:mr-5 hover:cursor-pointer hover:bg-[#f2fff3] rounded-full p-2"
              />
            </div>
          </div>
        </div>
      </div>
      {showMobileNav && (
        <div
          id="mobileNav"
          className="h-screen bg-white w-full fixed z-50 top-[70px] border-t border-gray-100 animate__animated animate__fadeInLeft animate__faster"
        >
          <div className="flex  space-y-8 py-14 mt-8  flex-col items-center justify-center">
            <Link
              className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-2xl"
              href={"#"}
            >
              Men
            </Link>
            <Link
              className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-2xl"
              href={"#"}
            >
              Women
            </Link>
            <Link
              className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-2xl"
              href={"#"}
            >
              Beauty
            </Link>
            <Link
              className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-2xl"
              href={"#"}
            >
              Sports
            </Link>
            <Link
              className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-2xl"
              href={"#"}
            >
              Explore
            </Link>
            <br />
            <br />
            <div className="h-[2px] w-3/4 mx-auto bg-gray-200 mx-4"></div>
            <Link
              className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-2xl flex items-center"
              href={"#"}
              onClick={() => router.push("/auth/login")}
            >
              Login <AiOutlineLogin className="ml-2" />
            </Link>
            <Link
              className="mr-3 hover:cursor-pointer pt-2 pb-2 pl-5 pr-5 rounded-2xl hover:bg-[#f2fff3] text-2xl flex items-center"
              href={"#"}
              onClick={() => router.push("/auth/register")}
            >
              Create Account <AiOutlineUser className="ml-2" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
