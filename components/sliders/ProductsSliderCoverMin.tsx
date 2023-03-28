import { useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import ProductCard from "../product/ProductCard";
import { ProductCardType } from "@/Types/products";

function ProductsSliderCoverMin() {
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
      photo: "/products/1.webp",
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
      photo: "/products/3.webp",
    },
    {
      bg: "#f0fdf4",
      title: "Explore new arrivals",
      body: "Up to\n80% off retail",
      photo: "/products/4.webp",
    },
  ]);

  return (
    <div className="w-full p-4 min-h-[300px] pt-20 md:pt-24   md:pb-10  md:pl-20 ">
      <div className=" flex flex-col items-end  md:flex-row md:items-center md:justify-between mb-14">
        <div className="">
          <span className="text-[#111827] text-3xl font-bold mr-2">
            Discover more.
          </span>
          <span className="text-[#6b7280] text-3xl font-bold">
            Good things are waiting for you
          </span>
        </div>
        <div className="flex">
          <span ref={prevRef}>
            <BsArrowLeft
              size={48}
              onClick={() => setActiveBtn("left")}
              className={` ${
                activeBtn === "left" ? "border" : ""
              } text-[#6b7280] mt-2 md:mt-0 mr-4 md:mr-8 hover:cursor-pointer hover:border p-3 rounded-full border-[#a7acb6]`}
            />
          </span>
          <span ref={nextRef}>
            <BsArrowRight
              size={48}
              onClick={() => setActiveBtn("right")}
              className={` ${
                activeBtn === "right" ? "border" : ""
              } text-[#6b7280] mt-2 md:mt-0 mr-2 md:mr-8 hover:cursor-pointer hover:border p-3 rounded-full border-[#a7acb6]`}
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
        slidesPerView={1}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
        className=" w-full m-0 md:pb-16  "
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {products &&
          products.map((product, index) => (
            <SwiperSlide key={index} className="md:pt-3 pb-3  px-3">
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductsSliderCoverMin;
