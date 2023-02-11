import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        allBlogsRequest: (state) => {
            state.loading = true;
        },
        allBlogSuccess: (state, action) => {
            state.loading = false;
            state.blogs = action.payload;  
        },
        allBlogFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        singleBlogRequest: (state) => {
            state.loading = true;
        },
        singleBlogSuccess: (state, action) => {
            state.loading = false;
            state.blog = action.payload;  ////important
        },
        singleBlogFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        createBlogRequest: (state) => {
            state.loading = true;
        },
        createBlogSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        createBlogFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addCommentRequest: (state) => {
            state.loading = true;
        },
        addCommentSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        addCommentFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteCommentRequest: (state) => {
            state.loading = true;
        },
        deleteCommentSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteCommentFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null
        },
        clearMessage: (state) => {
            state.message = null
        }
    }
})

export const { allBlogsRequest, allBlogSuccess, allBlogFail,
    clearError, clearMessage, createBlogFail,
    createBlogSuccess, createBlogRequest,
    singleBlogFail, singleBlogRequest, singleBlogSuccess,
    addCommentFail,addCommentRequest,addCommentSuccess,
    deleteCommentFail,deleteCommentRequest,deleteCommentSuccess

} = blogSlice.actions;

export default blogSlice.reducer;