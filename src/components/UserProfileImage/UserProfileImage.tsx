import { View, Text, Image } from "react-native";
import React from "react";

const UserProfileImage = (props) => {
  return (
    <View>
      <Image style={{ width: props.imageDimensions, height: props.imageDimensions, borderRadius: 50 }} source={props.profileImage} />
    </View>
  );
};

export default UserProfileImage;
