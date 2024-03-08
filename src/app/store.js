import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import snackReducer from './features/snackbar/snackSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    snack: snackReducer
  }
});
