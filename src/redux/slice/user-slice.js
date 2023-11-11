import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "" },
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
