import { createSlice } from "@reduxjs/toolkit";

const maliSlice = createSlice({
  name: "mali",
  initialState: { Money: "0" },
  reducers: {
    addMoney: (state, action) => {
      state.Money = action.payload;
    },
  },
});

export const { addMoney } = maliSlice.actions;

export default maliSlice.reducer;
