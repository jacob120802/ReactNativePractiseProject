import { View, Text, Image } from "react-native";
import React from "react";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark, faEllipsisH, faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";
import { getFontFamily } from "@/src/assets/fonts/helper";
import { horizontalScale } from "@/src/assets/styles/scaling";

const UserPost = (props) => {
  return (
    <View style={{ marginHorizontal: 24, marginTop: 35, borderBottomWidth: 1, paddingBottom: 20, borderBottomColor: "#EFF2F6" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <UserProfileImage profileImage={props.profileImage} imageDimensions={48} />

          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={{ color: "#000", fontFamily: getFontFamily("Inter", 500), fontSize: 16 }}>
              {props.firstName} {props.lastName}
            </Text>

            {props.location && <Text style={{ color: "#79869F", fontFamily: getFontFamily("Inter", 400), fontSize: 12, marginTop: 2 }}>{props.location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} size={24} color={"#79869F"} />
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image source={props.image} />
      </View>
      <View style={{ marginLeft: horizontalScale(10), flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesomeIcon icon={faHeart} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>{props.likes}</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 27 }}>
          <FontAwesomeIcon icon={faMessage} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>{props.comments}</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 27 }}>
          <FontAwesomeIcon icon={faBookmark} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
