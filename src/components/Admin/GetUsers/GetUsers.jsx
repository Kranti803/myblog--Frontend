import React, { useEffect, useState } from "react";
import { changerUserRole, deleteUser, getAllUsers } from "../../../redux/actions/adminActions";
import { Sidebar } from "../Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../../redux/reducers/adminSlice";

const GetUsers = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { users, error, message } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const updateUserHandler =  (userId) => {
     dispatch(changerUserRole(userId));
  };

  const deleteUserHandler = (userId) => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {

    dispatch(getAllUsers());
    
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
        <section className="getalluser">
          <h1>All Users</h1>
          <div className="user_container">
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>

                {users?.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>
                      <button onClick={() => updateUserHandler(item._id)}>
                        Change Role
                      </button>
                      <button onClick={() => deleteUserHandler(item._id)}>
                        Delete User
                      </button>
                    </td>
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

export default GetUsers;
