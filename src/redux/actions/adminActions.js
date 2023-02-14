import { server } from "../store";
import axios from 'axios';
import { changeBlogFeaturedFail, changeBlogFeaturedRequest, changeBlogFeaturedSuccess, changeRoleFail, changeRoleRequest, changeRoleSuccess, contactUsFail, contactUsRequest, contactUsSuccess, deleteBlogPostFail, deleteBlogPostRequest, deleteBlogPostSuccess, deleteUserFail, deleteUserRequest, deleteUserSuccess, getAllUserFail, getAllUserRequest, getAllUserSuccess, updateBlogFail, updateBlogRequest, updateBlogSuccess } from "../reducers/adminSlice";


export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch(getAllUserRequest());

        const { data } = await axios.get(`${server}/admin/users`, {
            withCredentials: true
        })
        dispatch(getAllUserSuccess(data.users))

    } catch (error) {
        dispatch(getAllUserFail(error.response.data.message));
    }
}



export const deleteUser = (userId) => async (dispatch) => {

    try {
        dispatch(deleteUserRequest());

        const { data } = await axios.delete(`${server}/admin/deleteUser?id=${userId}`, {
            withCredentials: true
        })
        dispatch(deleteUserSuccess(data.message))

    } catch (error) {
        dispatch(deleteUserFail(error.response.data.message));
    }
}




export const changerUserRole = (userId) => async (dispatch) => {

    try {
        dispatch(changeRoleRequest())

        const { data } = await axios.put(`${server}/admin/changerole/${userId}`, {}, {
            withCredentials: true
        })
        dispatch(changeRoleSuccess(data.message))

    } catch (error) {
        dispatch(changeRoleFail(error.response.data.message));
    }
}




export const deleteBlogPost = (id) => async (dispatch) => {

    try {
        dispatch(deleteBlogPostRequest())

        const { data } = await axios.delete(`${server}/delete/${id}`, {
            withCredentials: true
        })
        console.log(id);
        dispatch(deleteBlogPostSuccess(data.message))

    } catch (error) {
        dispatch(deleteBlogPostFail(error.response.data.message));
    }
}


export const updateBlogFeatured = (id) => async (dispatch) => {

    try {
        dispatch(changeBlogFeaturedRequest())

        const { data } = await axios.put(`${server}/admin/changefeatured?id=${id}`, {}, {
            withCredentials: true
        })

        dispatch(changeBlogFeaturedSuccess(data.message))

    } catch (error) {
        dispatch(changeBlogFeaturedFail(error.response.data.message));
    }
}


export const updateBlog = (myFormData,id) => async (dispatch) => {

    try {
        dispatch(updateBlogRequest())

        const { data } = await axios.put(`${server}/update/${id}`, myFormData, {
            headers: {
                'Content-type': 'multipart/form-data',
            },
            withCredentials: true
        })


        dispatch(updateBlogSuccess(data.message))

    } catch (error) {
        dispatch(updateBlogFail(error.response.data.message));
    }
}



export const contactUs = (name,email,subject,message) => async (dispatch) => {

    try {
        dispatch(contactUsRequest())

        const { data } = await axios.put(`${server}/admin/contact`, {name,email,subject,message}, {
            headers: {
                'Content-type': 'application/json',
            },
            withCredentials: true
        })


        dispatch(contactUsSuccess(data.message))

    } catch (error) {
        dispatch(contactUsFail(error.response.data.message));
    }
}


