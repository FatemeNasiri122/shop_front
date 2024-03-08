import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSnackbar: false,
  message: '',
  type: 'info'
};

export const snackSlice = createSlice({
  name: 'snack',
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.showSnackbar = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    closeSnackbar: (state, action) => {
      state.showSnackbar = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { openSnackbar, closeSnackbar } = snackSlice.actions;

export default snackSlice.reducer;
