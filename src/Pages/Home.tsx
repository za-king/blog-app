import Category from "../components/Category";
import Hero from "../components/Hero";
import { Layout } from "../components/Layout";

export const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen ">
        <div className="container py-12">
          <div className="text-8xl  text-justify">
          <b>Hey Zaking Here!</b> Discover my stories and creative idea
          </div>
          <br />
          <Hero/>
          <br />
          <Category/>
        </div>
      </div>
    </Layout>
  );
};
