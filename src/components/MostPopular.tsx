
import { useGetBlog } from "../hooks/useGetBlog";
import { useNavigate } from "react-router-dom";
const MostPopular = () => {
  const { allBlogListByView } = useGetBlog();

  const navigate = useNavigate()

  const handleClickById = (event: string) => {
    navigate(`/blog/${event}`);
  };

  const handleColor = (name: string) => {
    if (name === "fashion") {
      return "bg-blue-200";
    } else if (name === "coding") {
      return "bg-red-200";
    } else if (name === "style") {
      return "bg-yellow-200";
    } else if (name === "culture") {
      return "bg-green-200";
    } else if (name === "travel") {
      return "bg-teal-200";
    } else if (name === "food") {
      return "bg-indigo-200";
    }
  };

  return (
    <div>
      <div className="text-gray-400">what hot's</div>
      <div className="text-2xl font-bold">MostPopular</div>

      <div >
        {allBlogListByView?.map((blog, index) => {
          return (
            <div key={index} className="py-2 my-2 cursor-pointer" onClick={() => {
              handleClickById(blog.id);
            }}>
              <div
                className={`${handleColor(
                  blog.category
                )} text-xs p-2 font-semibold  w-16 rounded-r-full text-center`}
              >
                {blog.category}
              </div>
              <div>{blog.title}</div>
              <div className="flex gap-2 items-center font-bold">
                <div className="text-xs ">{blog.user?.name} </div>
                <div className="text-xs text-gray-600">
                  {blog.createdAt?.toDate().toDateString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MostPopular;
