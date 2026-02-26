import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import themeReducer from "./themeSlice"; 

const store = configureStore({
  reducer: {
    form: formReducer,
    theme: themeReducer,
  },
});

export default store;