"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import publicAxiosWrapper from "@/utils/axios/publicAxiosWrapper";
import { AuthPayloadType, LoginType, UserType } from "@/Types/Auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateUserDetails } from "@/features/slices/AuthSlice";
import SpinnerOnly from "@/components/Spinners/SpinnerOnly";
import LoadingOverlay from "@/components/Spinners/LoadingOverlay";
import { BiHide, BiShow } from "react-icons/bi";
function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Toggle password visibility state
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //Email regex
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  //Loading state
  const [loading, setLoading] = useState<boolean>(false);

  const handleValidate = () => {
    if (!email) {
      toast.warning("Please enter your email");
    } else if (!password) {
      toast.warning("Please enter your password");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      setLoading(true);
      const data: LoginType = {
        email,
        password,
      };

      const response: any = await publicAxiosWrapper({
        method: "post",
        url: "/auth/login",
        data,
      });

      setLoading(false);
      if (response && response.data) {
        // const data: ResponseDataType = response?.data!;
        if (response.data.success) {
          toast.success(response.data.message);
          // console.log("data.data");
          // console.log(response.data.data);
          const userData: AuthPayloadType = {
            user: response.data.data,
            accessToken: response.data.accessToken!,
            refreshToken: response.data.refreshToken!,
          };
          dispatch(updateUserDetails(userData));
          clearInputs();
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isAuthenticated) {
      // toast.success("Authentication was successfull");
      const userData = user as UserType;
      if (userData.phoneVerified) {
        router.push("/");
      } else {
        router.push("/auth/verification/phone-number");
      }
    }
  }, [isAuthenticated]);

  return (
    <>
      <Head>
        <title>SuperCart | Login</title>
        <meta name="description" content="Supercart Login." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <div className="w-full h-screen flex">
        <div className="hidden md:block w-1/2 bg-[#e3ffe6]">
          <img
            alt=""
            src="/banner/bannerPic2.webp"
            className="w-full animate__animated animate__fadeIn animate__faster"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center py-8 md:py-16 md:py-12">
          <BsArrowLeft
            size={30}
            className="absolute hover:cursor-pointer hover:scale-105 top-4 left-5"
            onClick={() => router.push("/")}
          />
          <h1 className="text-xl md:text-3xl font-bold mt-16 md:mt-2 ">
            SuperCart Login
          </h1>
          <img src={"/logo.png"} alt="logo" className=" w-1/3 md:w-1/4 my-4" />

          <div className="w-3/4 text-dark text-sm mt-2 text-center">
            Welcome back! Log in to access your account and continue shopping.
          </div>
          <div className="mt-4 w-full md:w-4/6 px-4">
            <input
              id="email"
              className="border w-full  py-3 px-4  rounded-3xl mt-2 text-xs placeholder-gray md:mt-4 bg-[#f4fff5]  outline-none"
              placeholder="Email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="w-full relative">
              <input
                id="password"
                className="border w-full  py-3 px-4  rounded-3xl mt-2 text-xs placeholder-gray md:mt-4 bg-[#f4fff5]  outline-none"
                placeholder="Password"
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

            <button
              data-testid="btnLogin"
              role="button"
              className="w-full bg-[#0f172a] text-sm md:text-base rounded-3xl py-2 px-4 text-white hover:cursor-pointer hover:shadow-xl mt-8 flex items-center justify-center"
              onClick={handleValidate}
            >
              {!loading ? "Login" : "Please wait"}
              {loading && (
                <SpinnerOnly
                  spinnerClassName="ml-2"
                  color={"white"}
                  size={18}
                />
              )}
            </button>
          </div>
          <div className="flex flex-row items-center mx-auto w-fit text-sm md:text-sm text-dark mt-8">
            <span>You dont have an account? </span>
            <span
              className="font-bold  ml-2 hover:cursor-pointer hover:text-black"
              onClick={() => router.push("/auth/register")}
            >
              Sign up
            </span>
          </div>

          <span
            onClick={() => router.push("/auth/reset/forgot-password")}
            className="text-xs font-bold mt-4 text-[#007acc]  hover:cursor-pointer"
          >
            Forgot password
          </span>
        </div>
      </div>
      {loading && <LoadingOverlay />}
    </>
  );
}

export default Login;
