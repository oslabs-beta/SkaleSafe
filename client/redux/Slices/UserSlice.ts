import type { Action, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

export interface SignInState {
    userData: {
        firstname: string; 
        lastname: string;
        email: string;
        username: string;
        // password: string;
        // picture: string; 
    }
    // isFetching: boolean;
    // isSuccess: boolean;
    // isError: boolean;
    isLoggedIn: boolean;
}

const initialState: SignInState = {
    userData: {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        // password: '',
        // picture: '../assets/profile.png',     
    },
    // isFetching: false,
    // isSuccess: false,
    // isError: false,
    isLoggedIn: false,
}

export const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
})

export const { setUserData, setIsLoggedIn } = signinSlice.actions;

export default signinSlice.reducer;
