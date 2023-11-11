import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: { cardItems: [],cardDate:[] },
  reducers: {
    addToCard: (state, action) => {
      state.cardItems.push(action.payload);
    },
    removeFromCard: (state, action) => {
      const itemIndex = action.payload;
      state.cardItems.splice(itemIndex, 1);
    },
    clearCard: (state) => {
      state.cardItems = [];
    },
    addCardDate: (state, action) => {
      state.cardDate.push(action.payload);
    },
    removeCardDate: (state, action) => {
      const dateIndex = action.payload;
      state.cardDate.splice(dateIndex, 1);
    },
  },
});

export const {
  addToCard,
  removeFromCard,
  clearCard,
  addCardDate,
  removeCardDate,
} = cardSlice.actions;

export default cardSlice.reducer;
