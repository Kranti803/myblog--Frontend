import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePassword } from "../../../redux/actions/profileActions";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/profileSlice";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewpassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, error } = useSelector((state) => state.profile);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(changePassword(oldPassword, newPassword));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      navigate('/profile')
    }
  }, [error, message, dispatch,navigate]);

  return (
    <section className="changepassword">
      <h2>Change Password</h2>
      <div>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            value={oldPassword}
            placeholder="Enter Old Password"
            required
          />
          <input
            onChange={(e) => setNewpassword(e.target.value)}
            type="password"
            value={newPassword}
            placeholder="Enter New Password"
            required
          />
          <button type="submit">Change Password</button>
          <Link to={"/profile"}>
            <button type="submit">Cancel</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
