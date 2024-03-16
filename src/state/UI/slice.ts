import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Device as Device, UIState } from "./types";
import detectCurrentDeviceByWindowWidth from "../../utils/detectCurrentDeviceByWindowWidth";

export const initialState: UIState = {
  device: detectCurrentDeviceByWindowWidth(),
} as const;

const UISlice = createSlice({
  name: "adaptive",
  initialState,
  reducers: {
    setDeviceType: (state, { payload }: PayloadAction<Device>) => {
      state.device = payload;
    },
  },
});

const UIReducer = UISlice.reducer;

export const { setDeviceType } = UISlice.actions;

export default UIReducer;
