import { useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import { ProductCardType } from "@/Types/products";
import ProductCardMax from "../product/ProductCardMax";

function ProductsSliderCoverMax() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [activeBtn, setActiveBtn] = useState<string>("right");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const [products, setProducts] = useState<ProductCardType[]>([
    {
      bg: "#fefce8",
      title: "Explore new arrivals",
      body: "Products from top brands",
      photo: "/products/5.webp",
    },
    {
      bg: "#fef2f2",
      title: "Digital gift cards",
      body: "Give the gift of choice",
      photo: "/products/2.webp",
    },
    {
      bg: "#e8eff8",
      title: "Hurry! Hurry!",
      body: "New stock\nIn the market",
      photo: "/products/7.webp",
    },
    {
      bg: "#f0fdf4",
      title: "Explore new arrivals",
      body: "Up to\n80% off retail",
      photo: "/products/8.webp",
    },
    {
      bg: "#f0fdf4",
      title: "Explore new arrivals",
      body: "Up to\n80% off retail",
      photo: "/products/6.webp",
    },
  ]);

  return (
    <div className="w-full p-5 min-h-[300px] pt-14  pb-12 pl-20">
      <div className="w-full  flex items-center justify-between mb-14">
        <div className="flex">
          <span className="text-[#111827] text-3xl font-bold mr-2">
            New Arrivals.
          </span>
          <span className="text-[#6b7280] text-3xl font-bold">
            AMAZING backpacks & bags
          </span>
        </div>
        <div className="flex w-fit">
          <span ref={prevRef}>
            <BsArrowLeft
              size={48}
              onClick={() => setActiveBtn("left")}
              className={` ${
                activeBtn === "left" ? "border" : ""
              } text-[#6b7280] mr-8 hover:cursor-pointer hover:border p-3 rounded-full border-[#a7acb6]`}
            />
          </span>
          <span ref={nextRef}>
            <BsArrowRight
              size={48}
              onClick={() => setActiveBtn("right")}
              className={` ${
                activeBtn === "right" ? "border" : ""
              } text-[#6b7280] mr-8 hover:cursor-pointer hover:border p-3 rounded-full border-[#a7acb6]`}
            />
          </span>
        </div>
      </div>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Navigation]}
        pagination={{ clickable: true }}
        slidesPerView={4}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
        className="p-5 w-full pb-16 "
      >
        {products &&
          products.map((product, index) => (
            <SwiperSlide key={index} className="pt-3 pb-3 pr-3">
              <ProductCardMax {...product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductsSliderCoverMax;
