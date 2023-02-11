import React, { useState, useEffect } from "react";
import avtar from "../../../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeprofilePic } from "../../../redux/actions/profileActions";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/profileSlice";
import { loadUser } from "./../../../redux/actions/userActions";

const ChangePhoto = () => {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(avtar);

  const changeImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, message } = useSelector((state) => state.profile);

  const submitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("file", image);

    dispatch(changeprofilePic(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      dispatch(loadUser());
      navigate("/profile");
    }
  }, [dispatch, navigate, message, error]);

  return (
    <section className="changephoto">
      <h2>Change Photo</h2>
      <div>
        <img src={imagePrev} alt="" />
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input onChange={changeImage} type="file" />
          <button type="submit">Change Photo</button>
          <Link to={"/profile"}>
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ChangePhoto;
