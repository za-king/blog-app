import { useDeleteBlog } from "../hooks/useDeleteBlog";
import { useNavigate } from "react-router-dom";
type CardProp = {
  datas: any;
};
const Card: React.FC<CardProp> = ({ datas }) => {
  const navigate = useNavigate()
  const { deleteBlog } = useDeleteBlog();
  const handleDeleteBlog = (id: any) => {
    deleteBlog({ id });
  };

  return (
    <div className="max-w-sm  max-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="das">
        <img
          className="rounded-t-lg h-[50%] w-[100%] "
          src={datas.img}
          alt=""
        />
      </a>
      <div className="p-5 ">
        <a href="das">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {datas.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
          {datas.desc}
        </p>
        <div className="flex flex-col ">
        <a
          href={`/blog/${datas.id}`}
          className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <button
        className="bg-red-600 p-2 rounded-lg font-semibold mt-2"
          onClick={() => {
            handleDeleteBlog(datas.id);
          }}
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
