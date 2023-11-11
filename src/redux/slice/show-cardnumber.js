import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "cardNumber",
  initialState: { cardNumber: "" },
  reducers: {
    addCard: (state, action) => {
      state.cardNumber = action.payload;
    },
  },
});

export const { addCard } = numberSlice.actions;

export default numberSlice.reducer;
