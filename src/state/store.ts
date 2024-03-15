import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
