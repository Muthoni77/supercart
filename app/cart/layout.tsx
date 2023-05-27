import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[80vh] pt-[10vh]">{children}</div>
      <Footer />
    </>
  );
};

export default CartLayout;
