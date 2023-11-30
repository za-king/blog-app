import { Layout } from "../components/Layout";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { useGetBlog } from "../hooks/useGetBlog";
import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { GoSignOut } from "react-icons/go";
import { MdOutlineAddBox } from "react-icons/md";

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
      <div className=" min-h-screen max-h-full py-12">
        <div className="md:container grid grid-cols-1 md:grid-cols-4  justify-items-center">
          <div className="  ">
            <img src={profilePhoto} alt="" className="rounded-full" />
            {name}

            <div>
              <button
                className="bg-green-600 flex items-center p-2 rounded-lg my-2"
                onClick={() => {
                  navigate("/addblog");
                }}
              >
                <MdOutlineAddBox /> add blog
              </button>
              <button
                className="bg-red-600 flex items-center p-2 rounded-lg my-2"
                onClick={signOutWithGoogle}
              >
                <GoSignOut /> sign Out
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
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
