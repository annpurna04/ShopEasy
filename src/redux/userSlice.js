import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null, // { name, address, paymentMethod }
  orders: [],    // Array of past orders
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveProfile: (state, action) => {
      state.profile = action.payload;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { saveProfile, addOrder } = userSlice.actions;
export default userSlice.reducer;
