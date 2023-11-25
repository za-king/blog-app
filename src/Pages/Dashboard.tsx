import { Layout } from "../components/Layout";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { useGetBlog } from "../hooks/useGetBlog";
import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Card from "../components/Card";

function Dashboard() {
  const { name, profilePhoto } = useGetUserInfo();
  const { blogList } = useGetBlog();

  console.log(blogList);
  const navigate = useNavigate();
  const signOutWithGoogle = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("auth");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen max-h-full py-12">
        <div className="container grid grid-cols-4">
          <div className="border  ">
            <img src={profilePhoto} alt="" className="rounded-full" />
            {name}

            <button className="bg-red-300" onClick={signOutWithGoogle}>
              sign Out
            </button>

            <button
              onClick={() => {
                navigate("/addblog");
              }}
            >
              add blog
            </button>
          </div>
          <div className="border  col-span-3">
            <div className="grid grid-cols-2 gap-2">
              {blogList?.map((item) => {
                return <Card datas={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
