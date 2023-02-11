import { server } from "../store";
import axios from 'axios';

import { allBlogsRequest, allBlogSuccess, allBlogFail, createBlogRequest, createBlogSuccess, createBlogFail, singleBlogRequest, singleBlogSuccess, addCommentSuccess, addCommentFail, addCommentRequest, deleteCommentRequest, deleteCommentSuccess, deleteCommentFail } from '../reducers/blogSlice';



export const getAllBlogs = (search = '', category = '') => async (dispatch) => {
    try {
        dispatch(allBlogsRequest());

        const { data } = await axios.get(`${server}/blogs?search=${search}&category=${category}`);

        dispatch(allBlogSuccess(data.blogs));

    } catch (error) {

        dispatch(allBlogFail(error.response.data.message));
    }
}



export const getSingleBlog = (id) => async (dispatch) => {
    try {
        dispatch(singleBlogRequest());

        const { data } = await axios.get(`${server}/blog/${id}`);

        dispatch(singleBlogSuccess(data.blog));
        

    } catch (error) {

        dispatch(singleBlogRequest(error.response.data.message));
    }
}



export const createNewBlog = (myFormData) => async (dispatch) => {
    try {
        dispatch(createBlogRequest());

        const { data } = await axios.post(`${server}/create`, myFormData, {
            headers: {
                'Content-type': 'multipart/form-data',
            },
            withCredentials: true,
        });

        dispatch(createBlogSuccess(data.message));

    } catch (error) {

        dispatch(createBlogFail(error.response.data.message));
    }
}



export const addComments = (comment,id) => async (dispatch) => {
    try {
        dispatch(addCommentRequest());

        const { data } = await axios.post(`${server}/blogs/addcomments/${id}`, { comment }, {
            headers: {
                'Content-type': 'application/json',
            },
            withCredentials: true,
        });

        dispatch(addCommentSuccess(data.message));

    } catch (error) {

        dispatch(addCommentFail(error.response.data.message));
    }
}




export const deleteComments = (commentId,id) => async (dispatch) => {
    try {
        dispatch(deleteCommentRequest());

        const { data } = await axios.delete(`${server}/blogs/${id}/deletecomments/${commentId}`, {
           
            withCredentials: true,
        });

        dispatch(deleteCommentSuccess(data.message));

    } catch (error) {

        dispatch(deleteCommentFail(error.response.data.message));
    }
}
