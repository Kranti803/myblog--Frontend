import React from "react";
import Image1 from "../../assets/carousel/carousel1.png";
import Image2 from "../../assets/carousel/carouse2.png";
import Image3 from "../../assets/carousel/carousel3.png";
import Image4 from "../../assets/carousel/carousel4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselCompunent = () => {
  const carousel = [
    {
      Image: Image1,
      title: "Richird Norton photorealistic rendering as real photos",
    },
    {
      Image: Image2,
      title: "Richird Norton photorealistic rendering as real photos",
    },
    {
      Image: Image3,
      title: "Richird Norton photorealistic rendering as real photos",
    },
    {
      Image: Image4,
      title: "Richird Norton photorealistic rendering as real photos",
    },
  ];
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={2000}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {carousel.map((i) => (
          <CarouselCard key={i.title} Image={i.Image} title={i.title} />
        ))}
      </Carousel>
    </div>
  );
};

const CarouselCard = ({ Image, title }) => {
  return (
    <div className="carouselCard">
      <div className="overlay">
        <img src={Image} alt="" />
        <div>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CarouselCompunent;
