import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const profileSlice=createSlice({
    name:'profile',
    initialState,
    reducers:{
        changePasswordRequest: (state) => {
            state.loading = true;
        },
        changePasswordSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        changePasswordFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        changeProfilePicRequest: (state) => {
            state.loading = true;
        },
        changeProfilePicSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        changeProfilePicFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateProfileRequest: (state) => {
            state.loading = true;
        },
        updateProfileSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateProfileFail: (state, action) => {
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
export const { updateProfileFail,updateProfileRequest,updateProfileSuccess,changePasswordRequest,changePasswordSuccess,changePasswordFail,clearError,clearMessage,changeProfilePicFail,changeProfilePicRequest,changeProfilePicSuccess} = profileSlice.actions;
export default profileSlice.reducer;