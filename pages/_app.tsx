import { useEffect, useState } from "react";
import "animate.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Provider } from "react-redux";
import { store } from "@/features/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  useEffect(() => {
    AOS.init();
    setIsRendered(true);
  }, []);

  if (!isRendered) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} pauseOnHover={true} />
      </Provider>
    </>
  );
}
