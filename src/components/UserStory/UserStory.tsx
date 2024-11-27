import { View, Text, Image } from "react-native";
import React from "react";
import { getFontFamily } from "@/src/assets/fonts/helper";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

const UserStory = (props) => {
  return (
    <View style={{ alignItems: "center", marginRight: 20 }}>
      <View style={{ borderColor: "#F35BAC", borderWidth: 2, padding: 3, borderRadius: 50 }}>
        <UserProfileImage profileImage={props.profileImage} imageDimensions={65} />
      </View>
      <Text style={{ fontFamily: getFontFamily("Inter", "500"), fontSize: 14, marginTop: 8 }}>{props.firstName}</Text>
    </View>
  );
};

export default UserStory;
