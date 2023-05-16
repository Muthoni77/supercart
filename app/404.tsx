import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center w-full">
        <img src={"/404.gif"} className="mx-auto" />
        <span className="text-xl font-bold md:-mt-24 ">PAGE NOT FOUND</span>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
