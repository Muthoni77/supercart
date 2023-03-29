import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
function Register() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>SuperCart | Registration</title>
        <meta name="description" content="Supercart Registration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <div className="w-full h-screen flex">
        <div className="hidden md:block w-1/2 bg-[#e3ffe6]">
          <img
            alt=""
            src="/banner/bannerPic1.webp"
            className="w-full animate__animated animate__fadeIn animate__faster"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center py-12 md:py-12">
          <BsArrowLeft
            size={30}
            className="absolute hover:cursor-pointer hover:scale-105 top-4 left-5"
            onClick={() => router.push("/")}
          />
          <h1 className="text-3xl font-bold mt-16 md:mt-0">
            SuperCart Registration
          </h1>
          <img src={"/logo.png"} alt="logo" className="w-1/2 my-4 md:w-1/5" />

          <div className="text-dark text-sm mt-2 text-center">
            Sign up now and enjoy hassle-free shopping at your fingertips.
          </div>
          <div className="mt-3 w-full px-4 md:w-4/6">
            <input
              className="border w-full  py-2 px-4  rounded-3xl mt-5 md:mt-4 bg-[#e3ffe6] outline-none"
              placeholder="Username"
              type="text"
            />
            <input
              className="border w-full  py-2 px-4  rounded-3xl mt-5 md:mt-4 bg-[#e3ffe6] outline-none"
              placeholder="Email"
              type="text"
            />
            <input
              className="border w-full  py-2 px-4  rounded-3xl mt-5 md:mt-4 bg-[#e3ffe6] outline-none"
              placeholder="Password"
              type="text"
            />
            <input
              className="border w-full  py-2 px-4  rounded-3xl mt-5 md:mt-4 bg-[#e3ffe6] outline-none"
              placeholder="Confirm Password"
              type="text"
            />

            <button className="w-full bg-[#0f172a] rounded-3xl py-2 px-4 text-white hover:cursor-pointer hover:shadow-xl mt-8">
              Register
            </button>
          </div>
          <div className="flex  items-center mx-auto w-fit text-sm text-dark mt-4 ">
            <span>Already have an account? </span>
            <span
              className="font-bold ml-2 hover:cursor-pointer hover:text-black"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
