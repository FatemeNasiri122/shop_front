import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoggedIn: false,
  enableLogout: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: (state, action) => {
      localStorage.removeItem('token');
      return initialState;
    },
    enableLogoutRequest: (state, action) => {
      debugger;
      state.enableLogout = !state.enableLogout;
    }
  }
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, enableLogoutRequest } = userSlice.actions;

export default userSlice.reducer;
