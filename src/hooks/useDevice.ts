import { useDispatch, useSelector } from "react-redux";
import { UISelectors } from "../state/UI/selectors";
import { useEffect } from "react";
import detectCurrentDeviceByWindowWidth from "../utils/detectCurrentDeviceByWindowWidth";
import { setDeviceType } from "../state/UI/slice";
import { Dispatch } from "@reduxjs/toolkit";
import { Device } from "../state/UI/types";

export function useOnResizeDeviceDetection() {
  const device = useDeviceInfo();
  const dispatch = useDispatch();

  return useEffect(() => {
    const onResize = getOnResizeCallback(dispatch, device);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [device, dispatch]);
}

function getOnResizeCallback(dispatch: Dispatch, device: Device) {
  return () => {
    const currentDevice = detectCurrentDeviceByWindowWidth();

    if (currentDevice !== device) {
      dispatch(setDeviceType(currentDevice));
    }
  };
}

export function useDeviceInfo() {
  return useSelector(UISelectors.device);
}
