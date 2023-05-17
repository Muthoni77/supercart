import React from "react";
import { BlogItemCardType } from "@/Types/Blog";
import { BsDot } from "react-icons/bs";

interface PropTypes {
  isLarge: boolean;
  blog: BlogItemCardType;
}

const BlogItemCard = ({ isLarge, blog }: PropTypes) => {
  return (
    <div className="w-full p-2 h-fit">
      <div className={`p-2 flex ${isLarge ? "flex-col" : "flex-row-reverse"}`}>
        <img
          className={`rounded-3xl ${
            isLarge
              ? "w-full h-[450px] object-cover mb-2"
              : "w-1/3 ml-2 h-[140px] md:h-[200px]"
          }`}
          alt="blog pic"
          src={blog.photo}
        />
        <div
          className={`flex flex-col justify-between py-2 ${
            !isLarge && "w-2/3 mr-2"
          }`}
        >
          <div className="flex flex-col w-full">
            <span className={`font-bold mb-4 ${isLarge && "my-3 text-2xl"}`}>
              {blog.heading}
            </span>
            <span className="text-[#6b7280] hidden md:block">
              {blog.description}
            </span>
          </div>
          <div
            className={`flex items-center space-x-1 mt-${!isLarge ? "6" : "2"}`}
          >
            <img
              className={`w-[30px] rounded-full object-cover ${
                !isLarge && " hidden md:block"
              }`}
              alt="author"
              src={blog.author.photo}
            />
            <div
              className={`text-[#4b5563] font-bold ${
                !isLarge && " hidden md:block "
              }`}
            >
              <span className="ml-1 text-sm">{blog.author.firstName}</span>
              <span className="ml-2 text-sm">{blog.author.lastName}</span>
            </div>
            <span>
              <BsDot
                color="#717785"
                className={`${!isLarge && " hidden md:block"}`}
              />
            </span>
            <span className="text-sm text-[#717785]">{blog.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItemCard;
