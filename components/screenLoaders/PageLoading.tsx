"use client";
import React, { useState } from "react";

function PageLoading() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <img
          className="w-1/3 md:w-1/6 animate__animated animate__pulse animate__slower animate__infinite"
          src={"./logo.png"}
        />
        <img className="" src={"./loading2.gif"} />
      </div>
    </>
  );
}

export default PageLoading;
