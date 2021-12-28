import { createSlice } from "@reduxjs/toolkit";
import { getThemefromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: getThemefromLocalStorage() || false,
  },

  reducers: {
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleDarkTheme } = themeSlice.actions;

export const selectDarkTheme = (state) => state.theme.darkTheme;
export default themeSlice.reducer;
