import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const isSmall = width <= 375;

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 3300;
  }
  return 350;
};
const horizontalScale = (size) => {
  (height / guidelineBaseWidth()) * size;
};
const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};
const verticalScale = (size) => {
  (height / guidelineBaseHeight()) * size;
};
const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};
const scaleFontSize = (size) => Math.round((width / guidelineBaseFonts()) * size);
export { horizontalScale, verticalScale, scaleFontSize };
