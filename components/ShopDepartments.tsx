import { useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import { ProductDepartmentType } from "@/Types/products";

import DepartmentCard from "./product/DepartmentCard";

function ShopDepartments() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [activeBtn, setActiveBtn] = useState<string>("right");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const [products, setProducts] = useState<ProductDepartmentType[]>([
    {
      bg: "#e0e7ff",
      photo: "/products/5.webp",
      title: "Travelling kits",
      categories: 20,
    },
    {
      bg: "#f1f5f9",
      photo: "/products/2.webp",
      title: "Digital gift cards",
      categories: 30,
    },
    {
      bg: "#e0f2fe",
      photo: "/products/7.webp",
      title: "Beauty products",
      categories: 28,
    },
    {
      bg: "#ffedd5",
      photo: "/products/8.webp",
      title: "New in the market",
      categories: 14,
    },
    {
      bg: "#f1f5f9",
      photo: "/products/8.webp",
      title: "Trendy vibes",
      categories: 1,
    },
    {
      bg: "#e0e7ff",
      photo: "/products/3.webp",
      title: "Other gift cards",
      categories: 17,
    },
  ]);

  return (
    <div className="w-full p-4 min-h-[300px] pt-8 md:pt-14  pb-10  md:pl-20 ">
      <div className=" flex flex-col items-end  md:items-end  md:flex-row md:items-center md:justify-between mb-14">
        <div className=" w-full flex justify-start">
          <span className="text-[#111827] text-3xl font-bold mr-2">
            Shop by department
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
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
        className="p-5 w-full   md:pb-16 "
      >
        {products &&
          products.map((product, index) => (
            <SwiperSlide key={index} className="pt-1 pb-3 px-3">
              <DepartmentCard {...product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ShopDepartments;
