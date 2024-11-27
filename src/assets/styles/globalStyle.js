import { StyleSheet } from "react-native";
import { getFontFamily } from "../fonts/helper";
const globalStyle = StyleSheet.create({
  messageIcon: {
    padding: 14,
    backgroundColor: "#f0f0f0",
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: "#F35BAC",
    justifyContent: "center",
    flexDirection: "row",
    width: 10,
    height: 10,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: "#FFFFFF",
    fontSize: 6,
    fontFamily: getFontFamily("Inter", "600"),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});
export default globalStyle;
