
import { useGetBlog } from "../hooks/useGetBlog";
import { useNavigate } from "react-router-dom";


const RecentPost = () => {
  const { allBlogList } = useGetBlog();
  const navigate= useNavigate()

  const handleClickById = (event : string ) =>{

    navigate(`/blog/${event}`)
    
    
  }

  


  return (
    <>
      {allBlogList?.map((blog) => {
        return (
          <div className="mb-2 flex gap-2  h-80">
            <img src={blog.img} width={300} alt="" />

            <div className="flex flex-col justify-around items-start ">
                <p>{blog.createdAt?.toDate().toDateString()}</p>
                <p className="text-3xl font-bold">{blog.title}</p>
                <div className=" text-ellipsis overflow-hidden">{blog.desc}</div>
                <button className="" onClick={() =>{handleClickById(blog.id)}}>Read More...</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecentPost;
