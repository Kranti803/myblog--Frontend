import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Dashboard = () => {
  
  const [openSidebar, setOpenSidebar] = useState(false);
  const {user} = useSelector(state=>state.user)

  

  return (
    <section className="dashboard">
      <div className="sidebar">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </div>
      <div
        className='dashboard_details'>
        <h1>Dashboard</h1>
        <h1>Welcome Back, {user.name} </h1>
        <Link to={'/admin/create'}><button>Back To HomePage</button></Link>
      </div>
    </section>
  );
};

export default Dashboard;

export const Sidebar = ({ openSidebar, setOpenSidebar }) => {

  return (
    <div className="sidebar_content">
      <button onClick={() => setOpenSidebar(!openSidebar)}>
        <HiOutlineMenuAlt2 />
      </button>
      <div
        className={`sidebar_links ${
          openSidebar ? "sidebar_links_open" : "sidebar_links"
        }`}
      >
        <ul>
          <li>
            <Link to={"/admin/dashboard"}>
              Dashboard
              <MdDashboard />
            </Link>
          </li>
          <li>
            <Link to={"/admin/create"}>
              Create Blog
              <IoIosCreate />
            </Link>
          </li>
          <li>
            <Link to={"/admin/users"}>
              Users
              <FaUserAlt />
            </Link>
          </li>
          <li>
            <Link to={"/admin/getblogs"}>
              All Blogs
              <SiBloglovin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
