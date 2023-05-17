"use client";
import { useState } from "react";
import ExploreTab from "./ExploreTab";
import ProductCategoryCard from "../product/ProductCategoryCard";
import { ProductCategoryCardType } from "@/Types/products";
import ViewProductModal from "../product/ViewProductModal";
import { useAppSelector } from "@/hooks";

function ExploreCover() {
  const { showProductModal } = useAppSelector((state) => state.products);
  const [categories, setCategories] = useState<ProductCategoryCardType[]>([
    {
      photo: "/products/1.webp",
      products: 155,
      manufacturer: "manufacturer",
      title: "Hoodies",
      color: "#eef2ff",
    },
    {
      photo: "/products/2.webp",
      products: 233,
      manufacturer: "manufacturer",
      title: "Backpack",
      color: "#eef2ff",
    },
    {
      photo: "/products/3.webp",
      products: 1,
      manufacturer: "manufacturer",
      title: "Caps",
      color: "#eef2ff",
    },
    {
      photo: "/products/4.webp",
      products: 155,
      manufacturer: "manufacturer",
      title: "Handbags",
      color: "#fff7ed",
    },
    {
      photo: "/products/5.webp",
      products: 155,
      manufacturer: "manufacturer",
      title: "Sweaters",
      color: "#eef2ff",
    },
    {
      photo: "/products/8.webp",
      products: 155,
      manufacturer: "manufacturer",
      title: "Sweatpants",
      color: "#fff7ed",
    },
  ]);

  return (
    <div className="w-full bg-[#f7f7f9] pt-12 md:pt-24 mt-16 pb-20">
      <h1 className="text-[#111827] mx-auto mb-10 text-2xl md:text-4xl font-bold w-fit">
        Start exploring.
      </h1>
      <ExploreTab />
      <div className="flex flex-col md:flex-row md:px-20 flex-wrap">
        {categories.map((category, index) => (
          <div className="w-full md:w-1/3 p-3" key={index}>
            <ProductCategoryCard {...category} />
          </div>
        ))}
      </div>
      {showProductModal && <ViewProductModal />}
    </div>
  );
}

export default ExploreCover;
