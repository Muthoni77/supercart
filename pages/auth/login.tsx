import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
function Login() {
  const router = useRouter();
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
        <div className="w-full md:w-1/2 flex flex-col items-center py-20 md:py-12">
          <BsArrowLeft
            size={30}
            className="absolute hover:cursor-pointer hover:scale-105 top-4 left-5"
            onClick={() => router.push("/")}
          />
          <h1 className="text-3xl font-bold mt-16 md:mt-2 ">SuperCart Login</h1>
          <img src={"/logo.png"} alt="logo" className=" w-1/2 md:w-1/4 mt-4" />

          <div className="text-dark text-sm mt-2 text-center">
            Welcome back! Log in to access your account and continue shopping.
          </div>
          <div className="mt-4 w-full md:w-4/6 px-4">
            <input
              className="border w-full  py-2 px-4  rounded-3xl mt-8 bg-[#e3ffe6] outline-none"
              placeholder="Email"
              type="text"
            />
            <input
              className="border w-full  py-2 px-4  rounded-3xl mt-6 bg-[#e3ffe6] outline-none"
              placeholder="Password"
              type="text"
            />

            <button className="w-full bg-[#0f172a] rounded-3xl py-2 px-4 text-white hover:cursor-pointer hover:shadow-xl mt-12">
              Login
            </button>
          </div>
          <div className="flex flex-col items-center mx-auto w-fit text-sm text-dark mt-8">
            <span>You dont have an account? </span>
            <span
              className="font-bold mt-2 hover:cursor-pointer hover:text-black"
              onClick={() => router.push("/auth/register")}
            >
              Sign up{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
