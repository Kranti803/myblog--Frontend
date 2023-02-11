import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Profile = () => {



  const {user} = useSelector(state=>state.user)



  return (
    <section className="profile">
      <h2>Profile</h2>
      <div className="profile_info">
        <div>
          <img src={user.avtar.url} alt="" />
          <button>
            <Link to={"/changephoto"}>Change Photo</Link>
          </button>
          {user && user.role === "admin" && (
            <button>
              <Link to={"/admin/dashboard"}>Dashboard</Link>
            </button>
          )}
        </div>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Created At: {user.createdAt}</p>
          <aside>
            <button>
              <Link to={"/updateprofile"}>Update Profile</Link>
            </button>
            <button>
              <Link to={"/changepassword"}>Change Password</Link>
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Profile;
