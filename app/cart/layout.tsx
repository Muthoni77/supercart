import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[80vh] pt-[10vh]">{children}</div>
      <Footer />
    </>
  );
};

export default CheckoutLayout;
