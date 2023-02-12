import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../redux/actions/userActions";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(email));
  };



  return (
    <section className="forgotpassword">
      <h2>Forgot Password</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="abc@gmail.com"
            />
          </div>

          <div>
            <button type="submit">Send Reset Link</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
