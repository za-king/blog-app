import React from "react";
import { useGetBlog } from "../hooks/useGetBlog";
const Hero = () => {
  const { allBlogList } = useGetBlog();

  const heroBlog = allBlogList[1];
  return (
    <div className="grid grid-cols-2 gap-6 items-center">
      
      <img src={heroBlog?.img} alt="" />
      <div>
        <h1 className="text-4xl font-bold">{heroBlog?.title}</h1>
        <p className="text-xl mt-4">{heroBlog?.desc}</p>
        <button className="bg-gray-200 p-2 mt-4 rounded text-xs font-bold">Read More</button>
      </div>
    </div>
  );
};

export default Hero;
