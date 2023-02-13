import React, { useState, useEffect } from "react";
import userPic from '../../assets/user.png'
import { useDispatch, useSelector } from "react-redux";
import {
  addComments,
  deleteComments,
  getSingleBlog,
} from "../../redux/actions/blogActions";
import { useParams } from "react-router-dom";
import { loadUser } from "./../../redux/actions/userActions";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/blogSlice";

const ArticleDetails = () => {
  const [comment, setComment] = useState("");
  const params = useParams();
  const { id } = params;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addComments(comment, id));
  };

  const dispatch = useDispatch();
  const { blog, error, message } = useSelector((state) => state.blogs);
  const { user } = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(getSingleBlog(id));
    dispatch(loadUser());

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      dispatch(getSingleBlog(id));
    }
  }, [dispatch, id, error, message]);

  const deleteCommentHandler = (commentId) => {
    dispatch(deleteComments(commentId, id));
  };

  return (
    <section className="article_details">
      <div className="top">
        <span>{blog?.category}</span>
        <h2>{blog?.title}</h2>
        <aside>
          <img src={blog?.author?.avtarUrl} alt="" />
          <span>{blog?.author?.name}</span>
          <span>{blog?.createdAt.split('T')[0]}</span>
        </aside>
      </div>
      <div className="middle">
        <img src={blog?.poster?.url} alt="" />
        <aside>{blog?.content}</aside>
      </div>
      <div className="bottom">
        <h4>Comments</h4>
        <form onSubmit={submitHandler}>
          <img src={user?.avtar?.url || userPic} alt="" />
          <div>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Start the discussion..."
            ></textarea>
            <button type="submit">Post</button>
          </div>
        </form>
        <div className="comments_container">
          {blog?.comments?.map((item) => (
            <div key={item._id}>
              <aside>
                <img src={item.avtarUrl} alt="" />
                <span>{item.name}</span>
                <span>
                  {user?.role === "admin" || user?._id === item.user ? (
                    <button  onClick={() => deleteCommentHandler(item._id)}>
                      Delete
                    </button>
                  ) : (
                    ""
                  )}
                </span>
              </aside>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;
