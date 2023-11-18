import { Layout } from "../components/Layout";
import  useGetUserInfo from "../hooks/useGetUserInfo";
function Dashboard() {
  const { name, profilePhoto } = useGetUserInfo();
  return (
    <Layout>
      <div className="h-screen">
        <div className="container grid grid-cols-4">
          <div className="border  ">
            <img src={profilePhoto} alt="" className="rounded-full" />
            {name}


          </div>
          <div className="border  col-span-3">right</div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
