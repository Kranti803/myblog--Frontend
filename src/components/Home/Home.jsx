import React from "react";
import Carousel from "../Carousel/Carousel";
import SecondCarousel from "../Carousel/SecondCarousel";
import FeaturedArticles from "../GetAllArticles/FeaturedArticles";
import GetAllArticles from "../GetAllArticles/GetAllArticles";

const Home = () => {
  return (
    <>
      <div className="home" id="#home">
        <Carousel />
        <GetAllArticles/>
        <SecondCarousel/>
        <FeaturedArticles/>
      </div>
    </>
  );
};

export default Home;
