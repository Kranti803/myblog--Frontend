import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const NotFound = () => {
  return (
    <section className="notfound">
      <div>
        <h1>404</h1>
        <p>The page you are looking for does not exist!</p>
        <button>
          <Link to={"/"}>
            <BiArrowBack size={25} />
            Back to homepage
          </Link>
        </button>
      </div>
    </section>
  );
};

export default NotFound;
