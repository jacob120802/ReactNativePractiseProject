import { View, Text } from "react-native";
import React from "react";
import style from "./style";

const Title = (props) => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };
  return (
    <View>
      <Text style={[styleToApply(), props.color&&{color:props.color}]}>{props.title}</Text>
    </View>
  );
};

export default Title;
