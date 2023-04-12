import { useState, useEffect } from "react";
import { ResponseDataType } from "@/Types/Requests";
import LoadingOverlay from "@/components/Spinners/LoadingOverlay";
import SpinnerOnly from "@/components/Spinners/SpinnerOnly";
import publicAxiosWrapper from "@/utils/axios/publicAxiosWrapper";
import { useRouter } from "next/router";
import { totalmem } from "os";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { BiHide, BiShow } from "react-icons/bi";
import axios from "axios";
import { BACKEND_URL } from "@/features/slices/GlobalSlice";

const ResetPassword = () => {
  const router = useRouter();
  const { accessToken } = router.query;

  const [oldPassword, setOldPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  //Toggle passwords visibility state
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  //loading
  const [loading, setLoading] = useState<boolean>(false);

  const [isSent, setIsSent] = useState<boolean>(false);

  const handleResend = async () => {
    if (!password) {
      toast.warning("Please enter your new password");
    } else if (password.length < 6) {
      toast.warning("Password is too short");
    } else if (!password2) {
      toast.warning("Please confirm your new password");
    } else if (password !== password2) {
      toast.warning("The two passwords don't match");
    } else {
      setLoading(true);
      try {
        const response: any = await axios({
          method: "post",
          url: BACKEND_URL + "/auth/reset-password",
          data: { oldPassword, newPassword: password },
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });

        const responseData: ResponseDataType = response.data!;

        if (!responseData?.success) {
          setLoading(false);
          toast.error(responseData.message);
        } else {
          toast.success(responseData.message);
          router.push("/auth/login");
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
                  Create a new Password
                </span>
              </center>

              <div className="w-full relative">
                <input
                  className="border w-full  py-3 px-4  rounded-3xl mt-2 text-xs placeholder-gray md:mt-3 bg-[#f4fff5]  outline-none"
                  placeholder="New Password"
                  type={`${showPassword ? "text" : "password"}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <BiHide
                    className="absolute right-4 top-[50%] cursor-pointer hover:scale-105 text-dark"
                    size={18}
                    onClick={() => {
                      setShowPassword(false);
                    }}
                  />
                ) : (
                  <BiShow
                    className="absolute right-4 top-[50%] cursor-pointer hover:scale-105 text-dark"
                    size={18}
                    onClick={() => {
                      setShowPassword(true);
                    }}
                  />
                )}
              </div>
              <div className="w-full relative">
                <input
                  className="border w-full  py-3 px-4  rounded-3xl mt-2 text-xs placeholder-gray md:mt-3 bg-[#f4fff5]  outline-none"
                  placeholder="Confirm New Password"
                  type={`${showPassword2 ? "text" : "password"}`}
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                {showPassword2 ? (
                  <BiHide
                    className="absolute right-4 top-[50%] cursor-pointer hover:scale-105 text-dark"
                    size={18}
                    onClick={() => {
                      setShowPassword2(false);
                    }}
                  />
                ) : (
                  <BiShow
                    className="absolute right-4 top-[50%] cursor-pointer hover:scale-105 text-dark"
                    size={18}
                    onClick={() => {
                      setShowPassword2(true);
                    }}
                  />
                )}
              </div>

              <button
                className="w-fit px-8 bg-[#0f172a] text-sm md:text-base rounded-3xl py-2 px-4 mb-2 text-white hover:cursor-pointer hover:shadow-xl   flex items-center justify-center"
                onClick={handleResend}
              >
                {!loading ? "Reset Password" : "Please wait"}
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
            </span>
          )}
        </div>
      </div>
      {loading && <LoadingOverlay />}
    </div>
  );
};

export default ResetPassword;
