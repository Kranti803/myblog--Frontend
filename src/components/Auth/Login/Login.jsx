import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../../redux/actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message } = useSelector((state) => state.user);

  const submitHandler = async (e) => {
    e.preventDefault();

    await dispatch(login(email, password));

    if (message) {
      navigate("/");
    }
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Your Email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Your Password"
              id="password"
            />
          </div>

          <div>
            <aside>
              <Link to={"/forgotpassword"}>Forgot Password ?</Link>
            </aside>
            <button type="submit">Login</button>
            <aside>
              <span>Haven't Signed Up Yet ? </span>
              <Link to={"/signup"}> SignUp Here.</Link>
            </aside>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
