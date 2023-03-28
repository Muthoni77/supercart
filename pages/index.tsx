import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ProductsSliderCover from "@/components/sliders/ProductsSliderCoverMin";
import ProductsSliderCoverMax from "@/components/sliders/ProductSliderCoverMax";

export default function Home() {
  return (
    <>
      <Head>
        <title>SuperCart | Home</title>
        <meta
          name="description"
          content="Supercart is your one-stop destination for all your shopping needs. We offer a wide range of high-quality products at affordable prices, including fashion apparel, accessories, home goods, electronics, and much more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <main className="">
        <Navbar />
        <Banner />
        <ProductsSliderCover />
        <ProductsSliderCoverMax />
      </main>
    </>
  );
}
