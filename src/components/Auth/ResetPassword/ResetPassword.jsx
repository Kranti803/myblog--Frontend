import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../../redux/actions/userActions";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitHandler = async(e) => {
    e.preventDefault();

    await dispatch(resetPassword(password, token));
    navigate('/login')
  };


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
