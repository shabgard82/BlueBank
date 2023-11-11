import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionList: []
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {
    submit: (state, action) => {
      state.transactionList = [...state.transactionList, action.payload];
    },
  },
});

export const { submit } = transactionSlice.actions;

export default transactionSlice.reducer;
