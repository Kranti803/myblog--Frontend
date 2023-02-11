import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        getAllUserRequest: (state) => {
            state.loading = true;
        },
        getAllUserSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        getAllUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        changeRoleRequest: (state) => {
            state.loading = true;
        },
        changeRoleSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        changeRoleFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserRequest: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteBlogPostRequest: (state) => {
            state.loading = true;
        },
        deleteBlogPostSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteBlogPostFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        changeBlogFeaturedRequest: (state) => {
            state.loading = true;
        },
        changeBlogFeaturedSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        changeBlogFeaturedFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateBlogRequest: (state) => {
            state.loading = true;
        },
        updateBlogSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateBlogFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    }
})
export const { getAllUserFail, getAllUserRequest, getAllUserSuccess, changeRoleFail,
    changeRoleRequest, changeRoleSuccess,
    clearError, clearMessage, deleteUserFail, deleteUserRequest,
    deleteUserSuccess, deleteBlogPostFail, deleteBlogPostRequest,
    deleteBlogPostSuccess, changeBlogFeaturedFail, changeBlogFeaturedRequest, changeBlogFeaturedSuccess,
    updateBlogFail, updateBlogRequest, updateBlogSuccess
} = adminSlice.actions;

export default adminSlice.reducer;