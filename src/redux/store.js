import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/reducers/userSlice'
import profileReducer from '../redux/reducers/profileSlice'
import blogReducer from '../redux/reducers/blogSlice'
import adminReducer from '../redux/reducers/adminSlice'

export const server = 'https://mern-blog-website-9x1m.onrender.com/api/v1';

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        blogs: blogReducer,
        admin: adminReducer

    }
})

export default store;