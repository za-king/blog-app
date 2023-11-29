import React from "react";
import { useGetBlog } from "../hooks/useGetBlog";
const MostPopular = () => {
  const { allBlogListByView } = useGetBlog();

  return (
    <div>
      <div className="text-gray-400">what hot's</div>
      <div className="text-2xl font-bold">MostPopular</div>

      <div>
        {allBlogListByView?.map((blog, index) => {
          return (
            <div key={index} className="py-2">
              <div className="text-xs p-2 font-semibold bg-red-600 w-16 rounded-r-full text-center">coding</div>
              <div>{blog.title}</div>
              <div className="flex gap-2 items-center font-bold">
                <div className="text-xs ">{blog.user?.name} </div>
                <div className="text-xs text-gray-600">{blog.createdAt?.toDate().toDateString()}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MostPopular;
