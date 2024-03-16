import { Device } from "../state/UI/types";

function detectCurrentDeviceByWindowWidth(): Device {
  const width = window.screen.availWidth;

  if (width >= 993) {
    return "desktop";
  } else if (width >= 768) {
    return "tablet";
  } else {
    return "mobile";
  }
}

export default detectCurrentDeviceByWindowWidth;
