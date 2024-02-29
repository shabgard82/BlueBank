import { createSlice } from "@reduxjs/toolkit";

const PhoneSlice = createSlice({
  name: "phone",
  initialState: { phonenumber: "" },
  reducers: {
    addPhone: (state, action) => {
      state.phonenumber = action.payload;
    },
  },
});

export const { addPhone } = PhoneSlice.actions;
export default PhoneSlice.reducer;
