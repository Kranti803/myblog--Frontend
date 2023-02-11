import React from "react";
import secondCarousel1 from "../../assets/carousel/secondCarousel1.png";
import secondCarousel2 from "../../assets/carousel/secondCarousel2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SecondCarousel = () => {
  const secondCarousel = [
    {
      poster: secondCarousel1,
      title: "Richird Norton photorealistic rendering as real photos",
      text: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
    {
      poster: secondCarousel2,
      title: "Richird Norton photorealistic rendering as real photos",
      text: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
  ];
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={2000}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {secondCarousel.map((item, index) => (
          <section key={index} className="second_carousel_component">
            <div>
              <img src={item.poster} alt="" />
            </div>
            <div>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <p></p>
            </div>
          </section>
        ))}
      </Carousel>
    </div>
  );
};

export default SecondCarousel;
