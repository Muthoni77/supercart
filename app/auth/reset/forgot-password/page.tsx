"use client";

import { ResponseDataType } from "@/Types/Requests";
import LoadingOverlay from "@/components/Spinners/LoadingOverlay";
import SpinnerOnly from "@/components/Spinners/SpinnerOnly";
import publicAxiosWrapper from "@/utils/axios/publicAxiosWrapper";
import { useRouter } from "next/navigation";
import { totalmem } from "os";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");

  //Email regex
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  //loading
  const [loading, setLoading] = useState<boolean>(false);

  const [isSent, setIsSent] = useState<boolean>(false);

  const handleResend = async () => {
    if (!email) {
      toast.warning("Please enter your email");
    } else if (!regex.test(email)) {
      toast.warning("Please enter a valid email address");
    } else {
      setLoading(true);
      try {
        const response: any = await publicAxiosWrapper({
          method: "post",
          url: "/auth/request-reset-password",
          data: { email },
        });

        const responseData: ResponseDataType = response.data!;

        if (!responseData?.success) {
          setLoading(false);
          toast.error(responseData.message);
        } else {
          setIsSent(true);
          setLoading(false);
          toast.success(responseData.message);
          //   router.push("/");
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
      //   router.push("/");
    }
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
          {!isSent ? (
            <>
              <center>
                <span className="font-bold text-dark text-xl ">
                  Let us send you the password reset link.
                </span>
              </center>
              <center>
                <span className="font-bold text-darkish text-sm">
                  Kindly enter the email address registered to your account.
                </span>
              </center>
              <input
                className="border w-full md:w-3/4 py-3 px-4 text-center rounded-3xl mt-2 text-xs placeholder-gray md:mt-3 bg-[#f4fff5]  outline-none"
                placeholder="Your email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="w-fit px-8 bg-[#0f172a] text-sm md:text-base rounded-3xl py-2 px-4 mb-2 text-white hover:cursor-pointer hover:shadow-xl   flex items-center justify-center"
                onClick={handleResend}
              >
                {!loading ? "Send reset link" : "Please wait"}
                {loading && (
                  <SpinnerOnly
                    spinnerClassName="ml-2"
                    color={"white"}
                    size={18}
                  />
                )}
              </button>
            </>
          ) : (
            <span className="text-center font-bold text-xl flex flex-col items-center ">
              A new link has been sent to your email{" "}
              <AiFillCheckCircle size={35} className="mt-4" color={"#198754"} />
              <button
                className="w-fit px-8 bg-[#0f172a] mt-4 text-sm md:text-base rounded-3xl py-2 px-4 mb-2 text-white hover:cursor-pointer hover:shadow-xl   flex items-center justify-center"
                onClick={() => {
                  router.push("/");
                }}
              >
                Proceed to our homepage
              </button>
            </span>
          )}
        </div>
      </div>
      {loading && <LoadingOverlay />}
    </div>
  );
};

export default ForgotPassword;
