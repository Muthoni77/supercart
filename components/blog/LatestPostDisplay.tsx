"use client";
import React from "react";
import BlogItemCard from "./BlogItemCard";
import { useState, useEffect } from "react";
import { BlogItemCardType } from "@/Types/Blog";
import moment from "moment";

const LatestPostDisplay = () => {
  const [blogs, setBlogs] = useState<BlogItemCardType[]>([
    {
      photo: "./blog/1.png",
      heading:
        "Aliqua qui voluptate ad consequat veniam eiusmod cillum aute elit.",
      description:
        "Proident veniam irure mollit consequat ea nisi qui eiusmod occaecat enim commodo Lorem.",
      date: String(moment(Date.now()).format("ll")),
      author: {
        firstName: "Jonathan",
        lastName: "Baraza",
        photo: "./avatar.png",
      },
    },
    {
      photo: "./blog/2.png",
      heading:
        "Aliqua qui voluptate ad consequat veniam eiusmod cillum aute elit.",
      description:
        "Proident veniam irure mollit consequat ea nisi qui eiusmod occaecat enim commodo Lorem.",
      date: String(moment(Date.now()).format("ll")),
      author: {
        firstName: "Jonathan",
        lastName: "Baraza",
        photo: "./avatar.png",
      },
    },
    {
      photo: "./blog/3.png",
      heading:
        "Aliqua qui voluptate ad consequat veniam eiusmod cillum aute elit.",
      description:
        "Proident veniam irure mollit consequat ea nisi qui eiusmod occaecat enim commodo Lorem.",
      date: String(moment(Date.now()).format("ll")),
      author: {
        firstName: "Jonathan",
        lastName: "Baraza",
        photo: "./avatar.png",
      },
    },
    {
      photo: "./blog/4.png",
      heading:
        "Aliqua qui voluptate ad consequat veniam eiusmod cillum aute elit.",
      description:
        "Proident veniam irure mollit consequat ea nisi qui eiusmod occaecat enim commodo Lorem.",
      date: String(moment(Date.now()).format("ll")),
      author: {
        firstName: "Jonathan",
        lastName: "Baraza",
        photo: "./avatar.png",
      },
    },
  ]);
  return (
    <div className="w-screen min-h-screen bg-[#f7f7f9] p-6 px-0 md:px-20 md:py-16">
      <div className="w-full mt-6 mb-6 px-4">
        <span className="font-bold text-[20px] md:text-3xl">
          The latest news.
        </span>
        <span className="font-bold text-[20px] md:text-3xl ml-2 text-[#6b7280]">
          From Supercart blog
        </span>
      </div>
      <div className="w-full my-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 ">
          <BlogItemCard isLarge={true} blog={blogs[0]} />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          {blogs &&
            blogs.map((blog, index) => (
              <>
                {index !== 0 && (
                  <BlogItemCard
                    key={index}
                    isLarge={index === 0 ? true : false}
                    blog={blog}
                  />
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPostDisplay;
