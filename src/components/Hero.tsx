import { useNavigate } from "react-router-dom";
import { useGetBlog } from "../hooks/useGetBlog";
const Hero = () => {

  const { allBlogList } = useGetBlog();

  const navigate = useNavigate()

  const handleClickById = (event: string) => {
    navigate(`/blog/${event}`);
  };

  const heroBlog = allBlogList[1];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      
      <img src={heroBlog?.img} alt="" />
      <div className="">
        <h1 className="text-4xl font-bold">{heroBlog?.title}</h1>
        <p className="text-xl mt-4 truncate">{heroBlog?.desc}</p>
        <button onClick={() => {
              handleClickById(heroBlog?.id);
            }} className="bg-gray-200 p-2 mt-4 rounded text-xs font-bold">Read More</button>
      </div>
    </div>
  );
};

export default Hero;
