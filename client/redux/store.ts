import alertReducer from './slices/alertSlice';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        alert: alertReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;


// CREATING AN ACTION MAY LOOK SOMETHING LIKE THIS:

// store.dispatch(counter.actions.increment())
// counter === name of slice
// 
// increment === name of reducer

// store.dispatch(signin.actions.setUsername())