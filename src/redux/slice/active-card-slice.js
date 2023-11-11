import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCard: {},
};

const activeCardSlice = createSlice({
  name: "activeCard",
  initialState: initialState,
  reducers: {
    update: (state, action) => {
      state.activeCard = { ...state.activeCard, ...action.payload };
    },
    deactive: (state, action) => {
      state.activeCard = {};
    },
  },
});

export const { update, deactive } = activeCardSlice.actions;

export default activeCardSlice.reducer;
