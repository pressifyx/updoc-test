// slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const brandSlice = createSlice({
  name: "auth",
  initialState: {
    brands: [],
  },
  reducers: {
    setBrands: (state, action) => {
      state.brands = [...action.payload];
    },
  },
});

export const { setBrands } = brandSlice.actions;
export default brandSlice.reducer;
