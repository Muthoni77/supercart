import { useState, useEffect } from "react";
import PhoneNumberInput from "@/components/Inputs/PhoneNumberInput";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import { AuthPayloadType, RegisterType } from "@/Types/Auth";
import publicAxiosWrapper from "@/utils/axios/publicAxiosWrapper";
import SpinnerOnly from "@/components/Spinners/SpinnerOnly";
import LoadingOverlay from "@/components/Spinners/LoadingOverlay";
import { ResponseDataType } from "@/Types/Requests";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateUserDetails } from "@/features/slices/AuthSlice";
function Register() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  //Email regex
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  //Loading state
  const [loading, setLoading] = useState<boolean>(false);

  const handleValidate = () => {
    if (!username) {
      toast.warning("Please enter your username");
    } else if (!email) {
      toast.warning("Please enter your email");
    } else if (!regex.test(email)) {
      toast.warning("Please enter a valid email address");
    } else if (!phone) {
      toast.warning("Please your phone number");
    } else if (!password) {
      toast.warning("Please enter your password");
    } else if (password.length < 6) {
      toast.warning("Password is too short");
    } else if (!password2) {
      toast.warning("Please confirm your password");
    } else if (password !== password2) {
      toast.warning("The two passwords don't match");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      setLoading(true);
      const data: RegisterType = {
        username,
        email,
        phone,
        password,
      };

      const response: any = await publicAxiosWrapper({
        method: "post",
        url: "/auth/register",
        data,
      });

      console.log(response);

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
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
    setPassword2("");
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Authentication was successfull");
      router.push("/auth/verification/phone-number");
    }
  }, [isAuthenticated]);

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
        <div className="w-full md:w-1/2 flex flex-col items-center py-0 md:py-12">
          <BsArrowLeft
            size={30}
            className="absolute hover:cursor-pointer hover:scale-105 top-4 left-5"
            onClick={() => router.push("/")}
          />
          <h1 className=" text-xl md:text-3xl font-bold mt-16 md:mt-0">
            SuperCart Registration
          </h1>
          <img src={"/logo.png"} alt="logo" className="w-1/3 md:w-1/5 my-4 " />

          <div className="w-3/4 text-dark text-sm mt-2 text-center">
            Sign up now and enjoy hassle-free shopping at your fingertips.
          </div>
          <div className="mt-3 w-full px-4 md:w-4/6">
            <input
              className="border w-full  py-3 px-4  rounded-3xl mt-2 text-xs placeholder-gray md:mt-3 bg-[#f4fff5]  outline-none"
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="border w-full  py-3 px-4  rounded-3xl mt-2 text-xs placeholder-gray md:mt-3 bg-[#f4fff5]  outline-none"
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PhoneNumberInput phone={phone} setPhone={setPhone} />
            <input
              className="border w-full  py-3 px-4  rounded-3xl mt-2 text-xs placeholder-gray md:mt-3 bg-[#f4fff5]  outline-none"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="border w-full  py-3 px-4  rounded-3xl mt-2 text-xs placeholder-gray md:mt-3 bg-[#f4fff5]  outline-none"
              placeholder="Confirm Password"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />

            <button
              className="w-full bg-[#0f172a] text-sm md:text-base rounded-3xl py-2 px-4 text-white hover:cursor-pointer hover:shadow-xl mt-8 flex items-center justify-center"
              onClick={handleValidate}
            >
              Register
              {loading && (
                <SpinnerOnly
                  spinnerClassName="ml-2"
                  color={"white"}
                  size={18}
                />
              )}
            </button>
          </div>
          <div className="flex  items-center mx-auto w-fit text-sm md:text-sm text-dark mt-6 ">
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
      {loading && <LoadingOverlay />}
    </>
  );
}

export default Register;
