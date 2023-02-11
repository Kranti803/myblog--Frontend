import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { updateProfile } from "../../../redux/actions/profileActions";
import { toast } from "react-hot-toast";
import { clearMessage } from "../../../redux/reducers/profileSlice";
import { loadUser } from "../../../redux/actions/userActions";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const { error, message } = useSelector((state => state.profile));

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(name, email));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      navigate('/profile')
      dispatch(loadUser())
    }
  }, [dispatch, navigate, error, message]);

  return (
    <section className="updateprofile">
      <h2>Update Profile</h2>
      <div>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Enter New Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Enter New Email"
          />
          <button type="submit">Update Profile</button>
          <Link to={"/profile"}>
            <button type="submit">Cancel</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;
