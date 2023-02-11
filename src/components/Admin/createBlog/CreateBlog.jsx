import React, { useEffect, useState } from "react";
import { Sidebar } from "../Dashboard/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/blogSlice";
import { createNewBlog } from "../../../redux/actions/blogActions";

const CreateBlog = () => {
  const categories = ["Select Category","Adventure", "Travel", "Fashion", "Technology"];

  const [openSidebar, setOpenSidebar] = useState(false);

  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const selectImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(file);
    };
  };

  const { error, message } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const myFormData = new FormData();

    myFormData.append("title", title);
    myFormData.append("content", content);
    myFormData.append("file", image);
    myFormData.append("category", category);

    dispatch(createNewBlog(myFormData));
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
    <section className="dashboard">
      <div className="sidebar">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </div>
      <div
        className={`dashboard_details ${
          openSidebar ? "dashboard_details_expanded" : "dashboard_details"
        }`}
      >
        <section className="createblog">
          <h1>Create New Blog</h1>
          <div>
            <form onSubmit={submitHandler}>
              <div className="title">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Write Title..."
                />
              </div>
              <div className="category">
                <h4>Select Category</h4>
                <select
                  name=""
                  id=""
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  {categories.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="poster">
                <input onChange={selectImageHandler} type="file" />
              </div>
              <div className="content">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write Content here..."
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <button  type="submit">Post</button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CreateBlog;
