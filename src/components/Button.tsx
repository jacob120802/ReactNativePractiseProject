import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { getFontFamily } from "../assets/fonts/helper";
import { scaleFontSize } from "../assets/styles/scaling";

const Button = ({ title, disabled, onPress }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[{ backgroundColor: "#2979F2", borderRadius: 50, borderWidth: 1, borderColor: "#fff", height: 55, justifyContent: "center" }, disabled && { opacity: 0.5 }]}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={{ fontFamily: getFontFamily("Inter", "500"), fontSize: scaleFontSize(16), lineHeight: scaleFontSize(19), color: "#FFFFFF", textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
