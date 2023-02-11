import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/app.scss'
import Header from "./components/Layouts/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import Footer from './components/Layouts/Footer/Footer';
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import NotFound from "./components/Layouts/NotFound/NotFound";
import ResetPassword from './components/Auth/ResetPassword/ResetPassword';
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword';
import Profile from './components/Profile/Profile';
import ChangePhoto from "./components/Profile/ChangePhoto/ChangePhoto";
import ChangePassword from './components/Profile/ChangePassword/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile/UpdateProfile';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import CreateBlog from './components/Admin/createBlog/CreateBlog';
import GetUsers from './components/Admin/GetUsers/GetUsers';
import GetBlogs from './components/Admin/GetBlogs/GetBlogs';
import EditBlog from './components/Admin/EditBlog/EditBlog';
import toast, { Toaster } from 'react-hot-toast'
import { loadUser } from "./redux/actions/userActions";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from 'protected-route-react';
import { clearError, clearMessage } from "./redux/reducers/userSlice";


function App() {

  const { isAuthenticated, user, error, message } = useSelector(state => state.user)

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
    if (message) {
      toast.success(message)
      dispatch(clearMessage())
    }
  }, [dispatch, error, message])

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <Router>

      <Header isAuthenticated={isAuthenticated} />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/' >
            <Login />
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path="/signup" element={
          <ProtectedRoute isAuthenticated={!isAuthenticated}  >
            <SignUp />
          </ProtectedRoute>
        } />

        <Route path="/changephoto" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ChangePhoto />
          </ProtectedRoute>
        } />

        <Route path="/changepassword" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ChangePassword />
          </ProtectedRoute>
        } />

        <Route path="/updateprofile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <UpdateProfile />
          </ProtectedRoute>
        } />


        {/* //admin routes  */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user?.role === 'admin'} >
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/create" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user?.role === 'admin'}>
            <CreateBlog />
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={

          <ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user?.role === 'admin'}>
            <GetUsers />
          </ProtectedRoute>
        } />
        <Route path="/admin/getblogs" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user?.role === 'admin'}>
            <GetBlogs />
          </ProtectedRoute>
        } />
        <Route path="/admin/edit/:id" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user?.role === 'admin'}>
            <EditBlog />
          </ProtectedRoute>
        } />

      </Routes>
      <Footer />
      <Toaster />

    </Router>
  );
}

export default App;
