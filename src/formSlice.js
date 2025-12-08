import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    isSignInForm: true,
  },

  reducers: {
    toggleForm: (state) => {
      state.isSignInForm = !state.isSignInForm;
    },
  },
});

export const { toggleForm } = formSlice.actions;

export default formSlice.reducer;
