import Category from "../components/Category";
import Hero from "../components/Hero";
import { Layout } from "../components/Layout";
import MostPopular from "../components/MostPopular";
import RecentPost from "../components/RecentPost";

export const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen ">
        <div className="container py-12">
          <div className="text-8xl  text-justify">
            <b>Hey Zaking Here!</b> Discover my stories and creative idea
          </div>
          <br />
          <Hero />
          <br />
          <Category />
          <br />
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <RecentPost />
            </div>
            <div>
              <MostPopular />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
