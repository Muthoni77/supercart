import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ProductsSliderCover from "@/components/sliders/ProductsSliderCoverMin";
import ProductsSliderCoverMax from "@/components/sliders/ProductSliderCoverMax";
import Steps from "@/components/Steps";
import ExploreCover from "@/components/Explore/ExploreCover";
import KidsBanner from "@/components/KidsBanner";
import ExpertsChoiceCover from "@/components/ExpertsChoiceCover";
import ShopDepartments from "@/components/ShopDepartments";
import Footer from "@/components/Footer";
import LatestPostDisplay from "@/components/blog/LatestPostDisplay";

export const metadata = {
  title: "SuperCart | Home",
  description:
    "Supercart is your one-stop destination for all your shopping needs. We offer a wide range of high-quality products at affordable prices, including fashion apparel, accessories, home goods, electronics, and much more.",
  icons: {
    icon: "./logo.png",
  },
};

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <ProductsSliderCover />
      <ProductsSliderCoverMax
        title1={"New Arrivals."}
        title2={"We have AMAZING backpacks and bags"}
      />
      <hr className="m-4 md:mx-20 md:my-12" />
      <Steps />
      <ExploreCover />
      <ProductsSliderCoverMax
        title1={"Best Sellers."}
        title2={"Best sellings of the month"}
      />
      <KidsBanner />
      <ExpertsChoiceCover />
      <ShopDepartments />
      <LatestPostDisplay />
      <Footer />
    </main>
  );
}
