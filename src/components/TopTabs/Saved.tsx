import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Saved = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 21, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
          <Image resizeMode={"contain"} style={{ width: 120, height: 90, marginTop: 11 }} source={require("../../assets/Images/defaultPost.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Saved;
