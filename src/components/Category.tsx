
import { useGetCategories } from "../hooks/useGetCategories";

const Category = () => {
  const { categoryList } = useGetCategories();

  const handleColor = (name : string) => {
      if(name  === "fashion"){
         return 'bg-blue-200'
      }else if(name  === "coding"){
        return 'bg-red-200'
      }else if(name  === "style"){
        return 'bg-yellow-200'
      }else if(name  === "culture"){
        return 'bg-green-200'
      }else if(name  === "travel"){
        return 'bg-teal-200'
      }else if(name  === "food"){
        return 'bg-indigo-200'
      }
  }

  return (
    <div>
      <div className="text-3xl font-bold">Popular Categories</div>
      <div className="grid grid-cols-1 md:grid-cols-6 mx-4 justify-between justify-items-center gap-2 my-12">
        {categoryList.map((item: any) => {
          return (
            <div className={`${handleColor(item.name)} w-full h-12 rounded  grid justify-center items-center text-xs font-bold cursor-pointer`}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
