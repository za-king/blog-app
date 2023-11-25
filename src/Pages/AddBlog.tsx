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
  const [imageUpload, setImageUpload] = useState<File | null>();

  const { addBlog } = useAddBlog();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    setImageUpload(target.files[0]);
  };

  const onSubmitButton = () => {
    addBlog({
      title: "Simple Way to Inspire Your Inner Innovator",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      view: 100,
      img: imageUpload,
    });
  };
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
              <input type="file" id="image" onChange={handleImageUpload} />
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
