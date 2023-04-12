import React from "react";
import SpinnerOnly from "./SpinnerOnly";

function DarkOverlaySpinner() {
  return (
    <>
      <div
        className="fixed z-50 top-0 bottom-0 left-0 right-0 "
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="bg-white w-fit mx-auto mt-8 p-6 rounded-2xl animate__animated animate__slideInDown animate__faster">
          <SpinnerOnly color="" size={25} spinnerClassName="text-dark" />
        </div>
      </div>
    </>
  );
}

export default DarkOverlaySpinner;
