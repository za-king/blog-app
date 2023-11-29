import { useState } from "react";
import { Layout } from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { CiCirclePlus, CiImageOn, CiVideoOn } from "react-icons/ci";
import { PiUploadSimpleLight } from "react-icons/pi";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { useAddBlog } from "../hooks/useAddBlog";

function AddBlog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [imageUpload, setImageUpload] = useState<File | null>();

  const { userID, userEmail, profilePhoto, name } = useGetUserInfo();

  const { addBlog } = useAddBlog();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };
    setImageUpload(target.files[0]);
  };

  const onSubmitButton = () => {
    addBlog({
      title: "5 Simple Way to Inspire Your Inner Innovator",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      view: 0,
      img: imageUpload,
      comments: [
        {
          userID,
          profilePhoto,
          name,
          userEmail,
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
          userID,
          profilePhoto,
          name,
          userEmail,
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
          userID,
          profilePhoto,
          name,
          userEmail,
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
      ],
      user: { userID, profilePhoto, userEmail, name },
    });
  };
  return (
    <Layout>
      <div className="container min-h-screen py-12 ">
        <input type="text" placeholder="title" className="p-4 text-6xl border-none outline-none bg-transparent"/>
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
              <input type="file" id="image" onChange={handleImageUpload} style={{display : "none"}} />
              <button>
                <label htmlFor="image"><CiImageOn
                  size={34}
                  className=" border-black rounded-full border-2 p-1 cursor-pointer"
                /></label>
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
            className="w-full border"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="tell your story...."
          />
        </div>
        <button onClick={onSubmitButton} className="px-6 py-2 m-10 bg-green-200 rounded">submit</button>
      </div>
    </Layout>
  );
}

export default AddBlog;
