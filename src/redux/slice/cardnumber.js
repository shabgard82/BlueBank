import { createSlice } from "@reduxjs/toolkit";

const cardNumberSlice = createSlice({
  name: "card",
  initialState: { Card: "" },
  reducers: {
    setCardNumber: (state, action) => {
      state.Card = action.payload;
    },
  },
});

export const { setCardNumber } = cardNumberSlice.actions;

export default cardNumberSlice.reducer;