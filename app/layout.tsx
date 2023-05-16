"use client";
import { useEffect, useState } from "react";
import "animate.css";
import "@/styles/globals.css";
import AOS from "aos";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Provider } from "react-redux";
import { store } from "@/features/store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
          <ToastContainer autoClose={2000} pauseOnHover={true} />
        </Provider>
      </body>
    </html>
  );
}
