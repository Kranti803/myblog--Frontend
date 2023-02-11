import React, { useState, useEffect } from "react";
import { Sidebar } from "../Dashboard/Dashboard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlogPost } from "../../../redux/actions/adminActions";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/adminSlice";
import { getAllBlogs } from "../../../redux/actions/blogActions";
import { updateBlogFeatured } from './../../../redux/actions/adminActions';

const GetBlogs = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  const { error, message } = useSelector((state) => state.admin);

  const deletePostHandler = (id) => {
    dispatch(deleteBlogPost(id));
  };
  
  const updateFeaturedHandler = (id) => {
    dispatch(updateBlogFeatured(id));
  };

  useEffect(() => {

    dispatch(getAllBlogs());


    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      dispatch(getAllBlogs());
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
        <section className="getallblogs">
          <h1>All Blogs</h1>
          <div className="blogs_container">
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>POSTER</th>
                  <th>FEATURED</th>
                  <th>ACTION</th>
                </tr>
                {blogs?.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>
                      <img src={item.poster.url} alt="" />
                    </td>
                    <td>
                      <button>
                        <Link to={`/admin/edit/${item._id}`}>Update Post</Link>
                      </button>
                      <button onClick={() => updateFeaturedHandler(item._id)}>
                        Update Featured
                      </button>
                      <button onClick={() => deletePostHandler(item._id)}>
                        Delete Post
                      </button>
                    </td>
                    <td>{item.featured ? "True" : "False"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GetBlogs;
