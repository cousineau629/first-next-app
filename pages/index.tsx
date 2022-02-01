import type { NextPage } from "next";
import { CarouselSlide } from "../components/carousel";
import { NavBar } from "../components/nav-bar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <CarouselSlide />
    </div>
  );
};

export default Home;
