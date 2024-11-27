const { StyleSheet } = require("react-native");
import { getFontFamily } from "../assets/fonts/helper";
import { scaleFontSize } from "../assets/styles/scaling";
const style = StyleSheet.create({
  title1: {
    color: "black",
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: scaleFontSize(25),
    lineHeight: scaleFontSize(29),
  },
  title3: {
    color: "black",
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  title2: {
    color: "black",
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
});
export default style;
