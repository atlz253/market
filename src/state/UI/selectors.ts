import { RootState } from "../store";

const ui = (state: RootState) => state.ui;

const device = (state: RootState) => ui(state).device;

export const UISelectors = {
  device,
} as const;
