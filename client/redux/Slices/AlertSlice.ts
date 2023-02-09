import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
    alert: string;
}



const initialState: AlertState = {
    alert: '',
    // BOOLEANS INDICATING WHETHER AN ALERT IS ON/OFF ??
}

export const alertSlice = createSlice({
    name: 'alert',

    initialState,
    reducers: {
        setAlert: (state, action) => {
            state.alert = action.payload;
        }
    }
})

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
