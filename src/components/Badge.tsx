import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { getFontFamily } from "../assets/fonts/helper";
import { scaleFontSize } from "../assets/styles/scaling";

const Badge = ({ title }) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };
  return (
    <View style={[{ backgroundColor: "#145855", borderRadius: 50, height: 22, justifyContent: "center" }, tabWidth]}>
      <Text
        onTextLayout={(event) => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[{ fontFamily: getFontFamily("Inter", "600"), fontSize: scaleFontSize(10), lineHeight: scaleFontSize(12), color: "#FFFFFF", textAlign: "center" }]}
      >
        {title}
      </Text>
    </View>
  );
};

export default Badge;
