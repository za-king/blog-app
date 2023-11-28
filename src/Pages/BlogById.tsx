import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetBlog } from "../hooks/useGetBlog";
import { Layout } from "../components/Layout";
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import MostPopular from "../components/MostPopular";

function BlogById() {
  const { getBlogById, blogById } = useGetBlog();

  const { id } = useParams();

  useEffect(() => {
    getBlogById(id);
  }, []);

  console.log(blogById);
  return (
    <Layout>
      <div className="container min-h-screen py-12">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="text-7xl font-bold">{blogById?.title}</div>
            <div className="flex gap-2 text-sm font-bold py-8">
              <img src={blogById?.user?.profilePhoto} alt="profile" className="rounded-full w-12"/>
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

        <div className="grid grid-cols-3 gap-12 py-12">
          <div className="col-span-2">
            <div className="text-justify font-semibold">{blogById?.desc}</div>
            <AddComment />

            <Comment comments={blogById?.comments}/>
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
