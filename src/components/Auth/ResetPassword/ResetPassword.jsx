import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../../redux/actions/userActions";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/userSlice";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const { token } = useParams();
  console.log(token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, message } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(resetPassword(password, token));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      navigate("/login");
    }
  }, [dispatch, error, message, navigate]);

  return (
    <section className="resetpassword">
      <h2>Reset Password</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Enter New Password"
            />
          </div>

          <div>
            <button type="submit">Reset Password</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
