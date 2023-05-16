"use client";
import LoadingOverlay from "@/components/Spinners/LoadingOverlay";
import SpinnerOnly from "@/components/Spinners/SpinnerOnly";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EmailVerified = () => {
  const router = useRouter();
  //loading
  const [loading, setLoading] = useState<boolean>(false);

  const handleRedirect = () => {
    setLoading(true);
    router.push("/");
  };
  return (
    <div className="h-screen flex items-center justify-center bg-[#e3ffe6] w-full p-4">
      <div className="bg-white p-4 md:py-12 md:px-16 rounded-3xl shadow-lg w-full md:w-fit ">
        <div className=" flex flex-col  space-y-4 items-center justify-center">
          <div className="w-1/3">
            <img
              alt=""
              src="/logo.png"
              className="w-full animate__animated animate__fadeIn animate__faster mb-2"
            />
          </div>
          <center>
            <span className="font-bold text-dark text-xl ">
              Your email was verified successfully!
            </span>
          </center>

          <button
            className="w-fit px-8 bg-[#0f172a] text-sm md:text-base rounded-3xl py-2 px-4 mb-2 text-white hover:cursor-pointer hover:shadow-xl   flex items-center justify-center"
            onClick={handleRedirect}
          >
            Proceed to our homepage
            {loading && (
              <SpinnerOnly spinnerClassName="ml-2" color={"white"} size={18} />
            )}
          </button>
        </div>
      </div>
      {loading && <LoadingOverlay />}
    </div>
  );
};

export default EmailVerified;
