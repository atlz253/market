import { Device } from "../state/UI/types";

function detectCurrentDeviceByWindowWidth(): Device {
  const width = document.documentElement.scrollWidth;

  if (width >= 993) {
    return "desktop";
  } else if (width >= 768) {
    return "tablet";
  } else {
    return "mobile";
  }
}

export default detectCurrentDeviceByWindowWidth;
