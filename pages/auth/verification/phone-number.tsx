import { useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { UserType } from "@/Types/Auth";
import SpinnerOnly from "@/components/Spinners/SpinnerOnly";
import { fancyTimeFormatter } from "@/utils";
import { toast } from "react-toastify";
import axiosWrapper from "@/utils/axios/axiosWrapper";
import { ResponseDataType } from "@/Types/Requests";
import LoadingOverlay from "@/components/Spinners/LoadingOverlay";
import { NextRouter, useRouter } from "next/router";

const PhoneVerification = () => {
  const router: NextRouter = useRouter();
  const [otp, setOtp] = useState("");
  const user: UserType = useAppSelector((state) => {
    if (typeof state.auth.user !== "string") {
      return state.auth.user;
    }
  })!;

  //counter
  const [counter, setCounter] = useState<number>(119);

  //loading
  const [loading, setLoading] = useState<boolean>(false);
  const [resendLoading, setResendLoading] = useState<boolean>(false);

  const [showResendBtn, setShowResendBtn] = useState<boolean>(false);

  const handleVerify = async () => {
    if (!otp) {
      return toast.warning("Please enter the OTP");
    }
    setLoading(true);
    try {
      const response: any = await axiosWrapper({
        method: "post",
        url: "/auth/verify-otp",
        data: { otp },
      });

      const responseData: ResponseDataType = response.data!;

      setLoading(false);
      if (!responseData?.success) {
        toast.error(responseData.message);
      } else {
        toast.success(responseData.message);
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const inputStyle: any = {
    width: "60px",
    height: "60px",
    marginRight: "10px",
    textAlign: "center",
    border: "1px solid #ccc",
    outline: "none",
    padding: "2px",
    margin: "10px",
    borderRadius: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  useEffect(() => {
    if (!user.phoneVerified) {
      toast.success("Check your phone for an OTP sent.");
    }
  }, []);

  useEffect(() => {
    // let num = 118;
    let num = 5;
    if (!showResendBtn) {
      const counterInterval = setInterval(() => {
        if (num === 0) {
          clearInterval(counterInterval);
          setShowResendBtn(true);
        }
        setCounter(num--);
      }, 1000);
    }
  }, [showResendBtn]);

  const handleResendOTP = async () => {
    setResendLoading(true);
    try {
      const response: any = await axiosWrapper({
        method: "get",
        url: "/auth/resend-otp",
        data: {},
      });

      const responseData: ResponseDataType = response.data!;

      setLoading(false);
      if (!responseData?.success) {
        toast.error(responseData.message);
      } else {
        setResendLoading(false);
        setShowResendBtn(false);
        setOtp("");
        toast.success(responseData.message);
        toast.success("Check your phone for an OTP sent.");
      }
    } catch (error) {
      setResendLoading(false);
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (user.phoneVerified) {
      toast.info("Phone number is already verified");
      router.push("/");
    }
  }, [user.phoneVerified]);

  return (
    <div className="h-screen flex items-center justify-center bg-[#e3ffe6] w-full p-4">
      <div className="bg-white p-4 md:py-8 md:px-16 rounded-3xl shadow-lg w-full md:w-fit ">
        <div className=" flex flex-col  items-center justify-center">
          <div className="w-1/3">
            <img
              alt=""
              src="/logo.png"
              className="w-full animate__animated animate__fadeIn animate__faster mb-2"
            />
          </div>
          <center>
            <span className="font-bold text-xl  ">OTP Verification</span>
          </center>
          <center>
            <span className="mt-4 text-sm text-dark ">
              Enter the OTP sent to
              <span className="font-bold">+{user.phone}</span>
            </span>
          </center>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputType="tel"
            inputStyle={inputStyle}
            containerStyle={"my-6"}
          />

          {showResendBtn ? (
            <div className="text-darkish text-sm mb-4 font-bold flex">
              You didn&apos;t receive the OTP ?{" "}
              <span
                onClick={handleResendOTP}
                className="ml-2 text-[#007acc]  hover:text-[#006bb3] hover:cursor-pointer"
              >
                {!resendLoading ? (
                  "Resend OTP"
                ) : (
                  <>
                    <span className="flex items-center flex-row">
                      Resending{" "}
                      <SpinnerOnly
                        spinnerClassName="ml-1"
                        color={"#007acc"}
                        size={14}
                      />
                    </span>{" "}
                  </>
                )}
              </span>
            </div>
          ) : (
            <div className="text-darkish text-sm mb-4 font-bold">
              You can resend in
              <span className="ml-1 text-darkish font-bold">
                {fancyTimeFormatter(counter)}
              </span>
            </div>
          )}

          <button
            className="w-full bg-[#0f172a] text-sm md:text-base rounded-3xl py-2 px-4 mb-2 text-white hover:cursor-pointer hover:shadow-xl hover:scale-95  flex items-center justify-center"
            onClick={handleVerify}
          >
            Verify OTP
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

export default PhoneVerification;
