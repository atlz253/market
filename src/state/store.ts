import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/slice";
import UIReducer from "./UI/slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: UIReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
