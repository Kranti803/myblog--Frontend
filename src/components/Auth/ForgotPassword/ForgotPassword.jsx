import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/userSlice";
import { forgotPassword } from "../../../redux/actions/userActions";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { error, message } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

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
