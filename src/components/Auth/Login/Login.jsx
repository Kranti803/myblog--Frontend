import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  login } from "./../../../redux/actions/userActions";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      navigate("/");
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, message, navigate]);

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
