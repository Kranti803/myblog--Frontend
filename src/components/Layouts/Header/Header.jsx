import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsSearch,
  BsFillPersonFill,
} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userActions";
import { getAllBlogs } from "../../../redux/actions/blogActions";

const Header = ({ isAuthenticated }) => {
  const [input, setInput] = useState(false);
  const [search, setSearch] = useState("");
  const [nav, setNav] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 98.02) {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs(search));
  }, [dispatch, search]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <h2>BLOG</h2>
      <button onClick={() => setNav(!nav)}>
        <RxHamburgerMenu size={30} />
      </button>
      <ul>
        <div>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Articles</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </div>
        <div>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
        <div>
          <input
            className={`input ${input ? "show_input" : "input"}`}
            type="text"
            placeholder="Search Articles..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch onClick={() => setInput(!input)} />
        </div>
        <aside>
          {isAuthenticated ? (
            <>
              <button className="logout" onClick={logoutHandler}>
                Logout
              </button>
              <Link to={"/profile"}>
                <BsFillPersonFill size={25} />
              </Link>
            </>
          ) : (
            <button>
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </aside>
      </ul>

      {/* mobile navbar... */}

      <div className={`mobile_nav ${nav ? "mobile_nav_opens" : "mobile_nav"}`}>
        <div>
          <h2>BLOG</h2>
          <button onClick={() => setNav(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <ul>
          <li onClick={() => setNav(false)}>
            <Link to={"/"}>Home</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link to={"/about"}>About</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <a href="#articles">Articles</a>
          </li>
          <li onClick={() => setNav(false)}>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <div>
          {isAuthenticated ? (
            <>
              <button className="logout" onClick={logoutHandler}>
                Logout
              </button>
              <Link to={"/profile"} onClick={() => setNav(false)}>
                <BsFillPersonFill />
                Profile
              </Link>
            </>
          ) : (
            <button onClick={() => setNav(false)}>
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
