import { useState } from "react";
import { Layout } from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { CiCirclePlus, CiImageOn, CiVideoOn } from "react-icons/ci";
import { PiUploadSimpleLight } from "react-icons/pi";
import { useAddBlog } from "../hooks/useAddBlog";

function AddBlog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const {addBlog } = useAddBlog()

  const onSubmitButton = () =>{
    addBlog({title :"title1" , desc : "desc1" , view : 0 , img : "https://via.placeholder.com/600/771796"})
  }
   return (
    <Layout>
      <div className="container min-h-screen py-12 bg-slate-500">
        <input type="text" placeholder="title" />
        <div className="flex border relative">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <CiCirclePlus size={40} className="cursor-pointer" />
          </button>

          {open && (
            <div className="flex gap-1 absolute z-50    bg-slate-600 left-10 items-center">
              <button>
                <CiImageOn
                  size={34}
                  className=" border-black rounded-full border-2 p-1 cursor-pointer"
                />
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
            className="w-[100%]"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="tell your story...."
          />

          
        </div>
        <button onClick={onSubmitButton}>submit</button>
      </div>
    </Layout>
  );
}

export default AddBlog;
