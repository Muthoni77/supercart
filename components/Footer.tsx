import React from "react";
import { BsFacebook, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div
      id="footer"
      className="bg-[#f9fff9] flex  flex-wrap items-center border-t border-gray-100 w-full py-20 mt-12 px-5 md:px-20"
    >
      <div className=" flex flex-row items-center w-full md:flex-col md:items-start  space-y-2 md:space-y-1 md:w-1/5 text-[#4b5563]">
        <div className="w-1/2 flex items-center -ml-1 my-3">
          <img src="/logo.png" className="w-[50px] " />
          <span className="text-xl font-bold ml-2 text-black">SuperCart</span>
        </div>
        <div className="flex w-1/2 md:w-full flex-row items-center md:items-start md:flex-col md:space-y-2 ps-4 md:ps-0">
          <div className="flex items-center text-neutral-600 text-base ">
            <BsFacebook color={"#4676ed"} size={20} className="mr-2" />
            <span className="hidden md:block">Facebook</span>
          </div>
          <div className="flex items-center text-neutral-600 text-base ">
            <BsYoutube color={"#da0000"} size={20} className="mr-2" />
            <span className="hidden md:block">Youtube</span>
          </div>
          <div className="flex items-center text-neutral-600 text-base">
            <BsTelegram color={"#31a8de"} size={20} className="mr-2" />
            <span className="hidden md:block">Telegram</span>
          </div>
          <div className="flex items-center text-neutral-600 text-base">
            <BsTwitter color={"#5a99ec"} size={20} className="mr-2" />
            <span className="hidden md:block">Twitter</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 w-1/2 mt-8 md:w-1/5 text-[#4b5563] text-base ">
        <span className="font-bold text-dark mb-2">Getting started</span>
        <span>Release Notes</span>
        <span>Upgrade Guide </span>
        <span>Browser Support</span>
        <span>Dark Mode</span>
      </div>
      <div className="flex flex-col space-y-2 w-1/2 mt-8 md:w-1/5 text-[#4b5563] text-base ps-4 md:ps-0">
        <span className="font-bold text-dark mb-2">Explore</span>
        <span>Prototyping</span>
        <span>Design systems</span>
        <span>Pricing</span>
        <span>Security</span>
      </div>
      <div className="flex flex-col space-y-2 w-1/2 mt-8 md:w-1/5 text-[#4b5563] text-base">
        <span className="font-bold text-dark mb-2">Resources</span>
        <span>Best practices</span>
        <span>Support </span>
        <span>Developers</span>
        <span>Learn design</span>
      </div>

      <div className="flex flex-col space-y-2 w-1/2 mt-8 md:w-1/5 text-[#4b5563] text-base ps-4 md:ps-0">
        <span className="font-bold text-dark mb-2">Community</span>
        <span>Discussion Forums</span>
        <span> Code of Conduct</span>
        <span>Contributing </span>
        <span>API Reference</span>
      </div>
    </div>
  );
}

export default Footer;
