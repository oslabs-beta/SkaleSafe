/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { persistReducer, persistStore } from 'redux-persist';

// import alertReducer from './Slices/AlertSlice';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userReducer from './Slices/UserSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer.reducer);

const store = configureStore({
  reducer: persistedReducer,
});

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     alert: alertReducer,
//   },
// });

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
// export default store;
