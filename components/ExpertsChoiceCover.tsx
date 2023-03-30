import { useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import { ProductCardPhotoType } from "@/Types/products";
import ProductCardPhotos from "./product/ProductCartPhotos";

function ExpertsChoiceCover() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [activeBtn, setActiveBtn] = useState<string>("right");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const [products, setProducts] = useState<ProductCardPhotoType[]>([
    {
      title: "Long sleeved sweater",
      productColor: "Green",
      photo: "/products/5.webp",
      price: 30,
      rating: 650,
      reviews: 23,
    },
    {
      title: "Classy umbrella",
      productColor: "Black",
      photo: "/products/6.webp",
      price: 30,
      rating: 590,
      reviews: 123,
    },
    {
      title: "Sling bag",
      productColor: "Black",
      photo: "/products/7.webp",
      price: 300,
      rating: 99,
      reviews: 84,
    },
    {
      title: "Sweat shorts",
      productColor: "Grey",
      photo: "/products/8.webp",
      price: 780,
      rating: 98,
      reviews: 37,
    },
  ]);

  return (
    <div className="w-full p-4 min-h-[300px] pt-8 md:pt-14  pb-10  md:pl-20 ">
      <div className=" flex flex-col items-end  md:flex-row md:items-center md:justify-between mb-6 md:mb-14">
        <div className=" w-full flex justify-start">
          <span className="text-[#111827] text-2xl md:text-3xl font-bold mr-2">
            Chosen by our experts
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
            slidesPerView: 3,
          },
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
        className=" md:p-5 w-full   md:pb-16 "
      >
        {products &&
          products.map((product, index) => (
            <SwiperSlide key={index} className="pt-1 pb-3 px-0 md:px-3">
              <ProductCardPhotos {...product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ExpertsChoiceCover;
