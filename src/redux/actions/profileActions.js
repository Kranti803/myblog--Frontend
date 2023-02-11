import { server } from '../store';
import axios from 'axios';
import { changePasswordFail, changePasswordRequest, changePasswordSuccess, changeProfilePicFail, changeProfilePicRequest, changeProfilePicSuccess, updateProfileFail, updateProfileRequest, updateProfileSuccess } from '../reducers/profileSlice';


export const changePassword = (oldPassword,newPassword) => async (dispatch) => {
    try {
        dispatch(changePasswordRequest());

        const { data } = await axios.put(`${server}/changepassword`,{oldPassword,newPassword}, {

            withCredentials: true,
        });


        dispatch(changePasswordSuccess(data.message));

    } catch (error) {

        dispatch(changePasswordFail(error.response.data.message));

    }
}

export const changeprofilePic = (myFormData) => async (dispatch) => {
    try {
        dispatch(changeProfilePicRequest());

        const { data } = await axios.put(`${server}/updateprofilepic`, myFormData, {
            headers: {
                'Content-type': 'multipart/form-data',
            },
            withCredentials: true,
        });


        dispatch(changeProfilePicSuccess(data.message));

    } catch (error) {

        dispatch(updateProfileFail(error.response.data.message));

    }
}

export const updateProfile = (name,email) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest());

        const { data } = await axios.put(`${server}/updateprofile`, {name,email}, {
            
            withCredentials: true,
        });


        dispatch(updateProfileSuccess(data.message));

    } catch (error) {

        dispatch(changeProfilePicFail(error.response.data.message));

    }
}