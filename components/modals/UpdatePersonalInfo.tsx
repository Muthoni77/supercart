import { useState, useEffect } from "react";
import { UserType } from "@/Types/Auth";
import { useAppSelector } from "@/hooks";
import { MdClose } from "react-icons/md";
import SpinnerOnly from "../Spinners/SpinnerOnly";
import { toast } from "react-toastify";
import LoadingOverlay from "../Spinners/LoadingOverlay";

const UpdatePersonalInfo = ({ closeModal }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const user: UserType = useAppSelector((state) => {
    if (typeof state.auth.user !== "string") {
      return state.auth.user;
    }
  })!;

  //formdata
  const [username, setUsername] = useState<string>(user.username);
  const [dob, setDob] = useState<string | undefined>(user.dob);
  const [country, setCountry] = useState<string | undefined>(user.country);
  const [language, setLanguage] = useState<string | undefined>(user.language);
  const handleValidate = () => {
    if (!username) {
      toast.warning("You must enter a username");
    } else if (!dob) {
      toast.warning("You must select your date of birth");
    } else if (!country) {
      toast.warning("You must select your country");
    } else if (!language) {
      toast.warning("You must select your language");
    } else {
      handleUpdate();
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    toast.success("updated!");
  };
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="w-full md:w-1/2 bg-white rounded-2xl shadow p-12 m-3 min-h-[40vh] relative animate__animated animate__fadeIn animate__faster">
        <div>
          <span className="font-bold "> Update your Personal Information</span>
          <MdClose
            onClick={closeModal}
            size={25}
            className="text-[#e79c01] absolute right-5 top-5 hover:cursor-pointer hover:text-[#d18d01] hover:scale-105"
          />
        </div>
        <div className="mt-6 flex flex-wrap w-full justify-between ">
          <div className="flex flex-col w-[48%] mt-6">
            <label htmlFor="username" className="text-sm ">
              Username
            </label>
            <input
              className="border rounded-3xl p-2 px-3 outline-none border-gray-300 text-sm mt-2"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
          </div>
          <div className="flex flex-col w-[48%] mt-6">
            <label htmlFor="dob" className="text-sm ">
              Date of birth
            </label>
            <input
              className="border rounded-3xl p-2 px-3 outline-none border-gray-300 text-sm mt-2"
              type="date"
              name="dob"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />{" "}
          </div>
          <div className="flex flex-col w-[48%] mt-6">
            <label htmlFor="username" className="text-sm ">
              Country
            </label>
            <input
              className="border rounded-3xl p-2 px-3 outline-none border-gray-300 text-sm mt-2"
              type="text"
              name="country"
              id="username"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />{" "}
          </div>
          <div className="flex flex-col w-[48%] mt-6">
            <label htmlFor="dob" className="text-sm ">
              Language
            </label>
            <input
              className="border rounded-3xl p-2 px-3 outline-none border-gray-300 text-sm mt-2"
              type="text"
              name="language"
              id="dob"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />{" "}
          </div>
          <button
            className="w-fit ml-auto  bg-[#0f172a] text-sm rounded-3xl py-2 px-14 text-white hover:cursor-pointer hover:shadow-xl mt-8 flex items-center justify-center"
            onClick={handleValidate}
          >
            {!loading ? "Update" : "Please wait"}
            {loading && (
              <SpinnerOnly spinnerClassName="ml-2" color={"white"} size={18} />
            )}
          </button>
        </div>
        {loading && <LoadingOverlay />}
      </div>
    </div>
  );
};

export default UpdatePersonalInfo;
