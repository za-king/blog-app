import { useState } from "react";
import { Layout } from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { CiCirclePlus, CiImageOn, CiVideoOn } from "react-icons/ci";
import { PiUploadSimpleLight } from "react-icons/pi";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { useAddBlog } from "../hooks/useAddBlog";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBlog() {
  const [open, setOpen] = useState(false);

  const [imageUpload, setImageUpload] = useState<File | null>();

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const { userID, userEmail, profilePhoto, name } = useGetUserInfo();

  const { addBlog } = useAddBlog();
  const navigate = useNavigate()
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    setImageUpload(target.files[0]);
  };

  const onOptionChange = (e: any) => {
    setCategory(e.target.value);
  };


  const notifySucc = () =>{
    toast.success('🦄 blog upload', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const notifyWarn = () =>{
    toast.warn('🦄 blog field still empty', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const onSubmitButton = () => {

    if(title !== "" && value !== "" && imageUpload !== null && category !== ""){
      addBlog({
        title: title,
        desc: value,
        view: 0,
        img: imageUpload,
        comments: [],
        user: { userID, profilePhoto, userEmail, name },
        category: category,
      })
      notifySucc()
      navigate("/dashboard")
      
    }else{
      notifyWarn()
    }
      
    
      
    
    
  };

  

  
  return (
    <Layout>
      <div className="container min-h-screen py-12 ">
        <input
          type="text"
          placeholder="title"
          className="p-4 text-6xl border-none outline-none bg-transparent w-full"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="flex  relative">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <CiCirclePlus size={40} className="cursor-pointer" />
          </button>

          {open && (
            <div className="flex gap-1 absolute z-50   left-10 h-full ">
              <input
                type="file"
                id="image"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <button>
                <label htmlFor="image">
                  <CiImageOn
                    size={34}
                    className=" border-black rounded-full border-2 p-1 cursor-pointer"
                  />
                </label>
              </button>
              <button>
                <PiUploadSimpleLight
                  size={34}
                  className=" border-black rounded-full border-2 p-1 cursor-pointer"
                />
              </button>
              <button>
                <CiVideoOn
                  size={34}
                  className=" border-black rounded-full border-2 p-1 cursor-pointer"
                />
              </button>
            </div>
          )}
          <ReactQuill
            className="w-full "
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="tell your story...."
          />
        </div>
        <div className="bg-gray-300 rounded my-12 ">
          <form
            action=""
            className="flex w-full justify-between justify-items-center items-center font-bold"
          >
            <div className=" w-full h-10 flex justify-center items-center gap-2 ">
              <input
                type="radio"
                name="category"
                id="fashion"
                value={"fashion"}
                checked={category === "fashion"}
                onChange={onOptionChange}
              />
              <label htmlFor="fashion">fashion</label>
            </div>

            <div className=" w-full h-10 flex justify-center items-center gap-2 ">
              <input
                type="radio"
                name="category"
                id="coding"
                value={"coding"}
                checked={category === "coding"}
                onChange={onOptionChange}
              />
              <label htmlFor="coding">coding</label>
            </div>
            <div className=" w-full h-10 flex justify-center items-center gap-2 ">
              <input type="radio" name="category" id="style" value={"style"} checked={category === "style"}
                onChange={onOptionChange} />
              <label htmlFor="style">style</label>
            </div>
            <div className=" w-full h-10 flex justify-center items-center gap-2 ">
              <input
                type="radio"
                name="category"
                id="culture"
                value={"culture"}
                checked={category === "culture"}
                onChange={onOptionChange}
              />
              <label htmlFor="culture">culture</label>
            </div>
            <div className=" w-full h-10 flex justify-center items-center gap-2 ">
              <input
                type="radio"
                name="category"
                id="travel"
                value={"travel"}
                checked={category === "travel"}
                onChange={onOptionChange}
              />
              <label htmlFor="travel">travel</label>
            </div>
            <div className=" w-full h-10 flex justify-center items-center gap-2 ">
              <input type="radio" name="category" id="food" value={"food"} checked={category === "food"}
                onChange={onOptionChange}/>
              <label htmlFor="food">food</label>
            </div>
          </form>
        </div>
        <button
          onClick={onSubmitButton}
          className="px-6 py-2 m-10 bg-green-200 font-bold rounded hover:bg-green-400"
        >
          submit
        </button>
        <ToastContainer />
      </div>
    </Layout>
  );
}

export default AddBlog;
