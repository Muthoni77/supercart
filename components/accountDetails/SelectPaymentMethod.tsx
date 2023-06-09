import { useAppSelector } from "@/hooks";
import { BsCreditCard } from "react-icons/bs";

interface PropTypes {
  setSelectedPaymentMethod: (type: string) => void;
  handleHideChangeForm: () => void;
}
const SelectPaymentMethod = ({
  handleHideChangeForm,
  setSelectedPaymentMethod,
}: PropTypes) => {
    const { method } = useAppSelector((state) => state.payment);
  return (
    <div className=" border-b border-l border-r p-3 flex flex-col space-y-7 p-6 rounded-b-xl">
      <div onClick={() => setSelectedPaymentMethod("mpesa")}>
        <label
          htmlFor="mpesa"
          className="flex items-center space-x-5 cursor-pointer"
        >
          <input
            id="mpesa"
            type="radio"
            name="payment_method"
            defaultChecked={method === "mpesa"}
            value={"mpesa"}
            checked
            style={{ width: "28px", height: "28px" }}
          />

          <div className="flex space-x-6 items-center">
            <div className="border border-gray-600 border-2 overflow-hidden  rounded-xl p-2 w-[15%]">
              <img
                src="/pics/payment/mpesa2.png"
                className="w-full scale-125"
              />
            </div>
            <span> Mpesa</span>
          </div>
        </label>
      </div>
      <div onClick={() => setSelectedPaymentMethod("card")}>
        <label
          htmlFor="card"
          className="flex items-center space-x-5 cursor-pointer"
        >
          <input
            id="card"
            type="radio"
            name="payment_method"
            defaultChecked={method === "card"}
            value={"card"}
            style={{ width: "28px", height: "28px" }}
          />
          <div className="flex space-x-6 items-center">
            <div className="border border-gray-600 border-2  rounded-xl p-2">
              <BsCreditCard size={30} />
            </div>
            <span> Debit / Credit Card</span>
          </div>
        </label>
      </div>
      <div className="flex items-center space-x-3 pt-8">
        <button
          onClick={() => {
            handleHideChangeForm();
          }}
          className=" py-4 px-16 border hover:cursor-pointer bg-[#0f172a] text-white hoverDownEffect  rounded-3xl"
        >
          Confirm Order
        </button>

        <button
          onClick={handleHideChangeForm}
          className=" p-[14px] hover:bg-[#f0f4f9] px-8 hover:cursor-pointer bg-white hoverDownEffect  rounded-3xl"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
