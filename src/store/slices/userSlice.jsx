import { createSlice } from "@reduxjs/toolkit";
const userReducer = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    users: [],
  },
  reducers: {
    adduser(state, action) {
      state.users.push(action.payload);
      state.isLoggedIn = true;
    },

    removeuser(state, action) {
      state.users.splice(action.payload, 1);
    },
    deleteAlluser(state, action) {
      state.users = [];
    },
  },
});
export default userReducer.reducer;

export const { adduser, deleteAlluser, removeuser } = userReducer.actions;
