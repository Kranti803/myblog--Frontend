import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>Contact the Publisher</h4>
        <p>mike@runo.com</p>
        <p>+944 450 904 505</p>
      </div>
      <div>
        <h4>Explorate</h4>
        <p>About</p>
        <p>Job Opportunities</p>
        <p>Partners</p>
        <p>Advertise</p>
        <p>Membership</p>
      </div>
      <div>
        <h4>Membership</h4>
        <p>191 Middleville Road, NY 1001, Sydney Australia</p>
      </div>
      <div>
        <h4>Connections</h4>
        <div>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
