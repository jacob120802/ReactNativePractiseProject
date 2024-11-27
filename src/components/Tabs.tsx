import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { scaleFontSize } from "../assets/styles/scaling";
import { getFontFamily } from "../assets/fonts/helper";

const Tabs = ({ title, isInactive, onPress }) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };
  return (
    <TouchableOpacity
      disabled={isInactive}
      style={[{ backgroundColor: "#2979F2", borderRadius: 50, height: 50, justifyContent: "center" }, isInactive && { backgroundColor: "#FFF" }, tabWidth]}
      onPress={() => {
        onPress();
      }}
    >
      <Text
        onTextLayout={(event) => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[{ fontFamily: getFontFamily("Inter", "500"), fontSize: scaleFontSize(14), lineHeight: scaleFontSize(17), color: "#FFFFFF", textAlign: "center" }, isInactive && { color: "#79869F" }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Tabs;
