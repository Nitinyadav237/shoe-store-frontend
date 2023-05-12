import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/cartSlice.js";

const reducer = {
  cart: cartSlice,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
