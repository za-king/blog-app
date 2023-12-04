import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetBlog } from "../hooks/useGetBlog";

import { Layout } from "../components/Layout";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import MostPopular from "../components/MostPopular";
import { useState } from "react";
import { useAddBlog } from "../hooks/useAddBlog";

import useGetUserInfo from "../hooks/useGetUserInfo";

function BlogById() {
  const { getBlogById, blogById } = useGetBlog();

  const { id } = useParams();

  const [comment, setComments] = useState("");
  const { addCommentBlog } = useAddBlog();

  const { name, profilePhoto, userEmail, userID, isAuth } = useGetUserInfo();

  const commentInfo = {
    comment,
    name,
    profilePhoto,
    userEmail,
    userID,
  };

  const handleSubmit = () => {
    addCommentBlog({ id: id, comments: commentInfo });
    getBlogById(id);
  };

  useEffect(() => {
    getBlogById(id);
  }, []);

  

  return (
    <Layout>
      <div className="md:container min-h-screen py-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="text-3xl lg:text-7xl font-bold">
              {blogById?.title}
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm font-bold py-8">
              <img
                src={blogById?.user?.profilePhoto}
                alt="profile"
                className="rounded-full w-12"
              />
              <div>
                <div>{blogById?.user?.name}</div>
                <div>{blogById?.createdAt?.toDate().toDateString()}</div>
              </div>
            </div>
          </div>
          <div>
            <img src={blogById?.img} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
          <div className="col-span-2">
            <div className="text-justify font-semibold prose" dangerouslySetInnerHTML={{__html: blogById?.desc}} />
            <div className="text-3xl font-bold mt-12">Comments</div>

            {isAuth ? (
              <AddComment
                id={id}
                setComments={setComments}
                handleSubmit={handleSubmit}
              />
            ) : (
              <a className="mt-12 underline hover:text-green-600 cursor-pointer" href="/login">
                Login to a write a comment
              </a>
            )}

            <Comment comments={blogById?.comments} />
          </div>

          <div>
            <MostPopular />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogById;
