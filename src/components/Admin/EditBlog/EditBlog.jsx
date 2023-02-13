import React, { useState, useEffect } from "react";
import { Sidebar } from "../Dashboard/Dashboard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../../../redux/actions/adminActions";
import { getSingleBlog } from "../../../redux/actions/blogActions";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/adminSlice";

const EditBlog = () => {
  const categories = ["Adventure", "Travel", "Fashion", "Technology"];
  const [openSidebar, setOpenSidebar] = useState(false);

  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const { blog } = useSelector((state) => state.blogs);
  const { message, error } = useSelector((state) => state.admin);

  const { id } = useParams();
  const dispatch = useDispatch();

  const selectImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const myFormData = new FormData();

    myFormData.append("title", title);
    myFormData.append("content", content);
    myFormData.append("category", category);
    myFormData.append("file", image);

    dispatch(updateBlog(myFormData, id));
  };

  useEffect(() => {
    dispatch(getSingleBlog(id));
    setTitle(blog?.title);
    setContent(blog?.content);

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, id, error, message, blog?.title, blog?.content]);

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
          <h1>Update Blog</h1>
          <div>
            <form onSubmit={submitHandler}>
              <div className="title">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Write Title..."
                  value={title || ''}
                />
              </div>
              <div className="category">
                <h4>Select Category</h4>
                <select
                  name=""
                  id=""
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Select Category</option>
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
                  value={content || ''}
                ></textarea>
              </div>
              <button type="submit"> Update Post</button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EditBlog;
