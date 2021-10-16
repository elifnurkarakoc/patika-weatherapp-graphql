import {
  CloudIcon,
  CloudRainIcon,
  CloudySunIcon,
  CloudyMoonIcon,
  CloudyRainLightningIcon,
  SunnyIcon,
  ClearNightIcon,
  SunnyWindIcon,
  SnowyIcon,
  CloudsIcon,
} from "../icons/icons";

export const ChoiceIcon = (iconName) => {
  if (iconName === "01d") {
    return <SunnyIcon />;
  } else if (iconName === "01n") {
    return <ClearNightIcon />;
  } else if (iconName === "02d") {
    return <CloudySunIcon />;
  } else if (iconName === "02n") {
    return <CloudyMoonIcon />;
  } else if (iconName === "03d" || iconName === "03n") {
    return <CloudIcon />;
  } else if (iconName === "04d" || iconName === "04n") {
    return <CloudsIcon />;
  } else if (iconName === "09d" || iconName === "09n") {
    return <CloudRainIcon />;
  } else if (iconName === "10d" || iconName === "10n") {
    return <CloudRainIcon />;
  } else if (iconName === "11d" || iconName === "11n") {
    return <CloudyRainLightningIcon />;
  } else if (iconName === "13d" || iconName === "13n") {
    return <SnowyIcon />;
  } else if (iconName === "50d" || iconName === "50n") {
    return <SunnyWindIcon />;
  }
};
