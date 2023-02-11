import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";


const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div>
        <img
          src="https://images.unsplash.com/photo-1675055621614-145f5e549106?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <div>
          <p>
            "About Me ? I am a computer science student with a passion for
            technology and its limitless possibilities. Driven by a desire to
            learn and grow, I started this blog as a platform to share my
            knowledge and thoughts on the latest developments in the field of
            computer science. From programming languages to software
            development, I aim to provide insightful and informative content to
            my readers. With a strong foundation in computer science and a
            curious mind, I hope to make a difference in the tech world and
            inspire others to do the same. Welcome to my journey in the exciting
            world of technology!"
          </p>
          <div>
            <h4>My Social Links</h4>
            <aside>
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
              <BsYoutube />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
