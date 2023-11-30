import { useGetBlog } from "../hooks/useGetBlog";
import { useNavigate } from "react-router-dom";

const RecentPost = () => {
  const { allBlogList } = useGetBlog();
  const navigate = useNavigate();

  const handleClickById = (event: string) => {
    navigate(`/blog/${event}`);
  };

  const handleColor = (name: string) => {
    if (name === "fashion") {
      return "text-blue-600";
    } else if (name === "coding") {
      return "text-red-600";
    } else if (name === "style") {
      return "text-yellow-600";
    } else if (name === "culture") {
      return "text-green-600";
    } else if (name === "travel") {
      return "text-teal-600";
    } else if (name === "food") {
      return "text-indigo-600";
    }
  };

  return (
    <>
      {allBlogList?.map((blog) => {
        return (
          <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4  min-h-80 max-h-full ">
            <img src={blog.img} alt="" />

            <div className="flex flex-col justify-around items-start ">
              <p className="text-xs font-bold text-gray-600">{blog.createdAt?.toDate().toDateString()} <span className={`${handleColor(blog.category)} text-base font-bold`}>{blog.category}</span></p>
              <p className="text-3xl font-bold">{blog.title}</p>
              <div className=" w-60 max-h-32 truncate text-gray-600">
                {blog.desc}
              </div>
              <button
                className="p-1 border-b-2 border-red-600 hover:border-green-600"
                onClick={() => {
                  handleClickById(blog.id);
                }}
              >
                Read More...
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecentPost;
