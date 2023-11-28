import React from "react";
import { useGetCategories } from "../hooks/useGetCategories";

const Category = () => {
  const { categoryList } = useGetCategories();

  return (
    <div>
      <div className="text-3xl font-bold">Popular Categories</div>
      <div className="flex justify-between my-12">
        {categoryList.map((item: any) => {
          return (
            <div className="bg-blue-200 w-36 h-12 rounded grid justify-center items-center text-xs font-bold">
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
