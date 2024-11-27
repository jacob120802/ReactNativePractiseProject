import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { horizontalScale, verticalScale } from "../assets/styles/scaling";
import { getFontFamily } from "../assets/fonts/helper";
import MaterialTopTabs from "../components/TopTabs/layout";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 32 }}>
          <View style={{ borderWidth: 2, borderColor: "#0150EC", padding: 4, borderRadius: 110 }}>
            <Image style={{ borderRadius: 110, height: 110, width: 110 }} source={require("../assets/Images/defaultImage.png")} />
          </View>
        </View>
        <Text style={{ marginTop: 20, textAlign: "center", fontFamily: getFontFamily("Inter", "600"), fontSize: 20 }}>Jacob Abraham</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 40, marginTop: 30 }}>
          <View>
            <Text style={{ fontFamily: getFontFamily("Inter", "600"), fontSize: 20, color: "#022150", textAlign: "center" }}>45</Text>
            <Text style={{ fontFamily: getFontFamily("Inter", "400"), fontSize: 16, color: "#79869F", textAlign: "center" }}>Following</Text>
          </View>
          <View style={{ borderRightWidth: 1, borderColor: "lightgrey" }}></View>
          <View>
            <Text style={{ fontFamily: getFontFamily("Inter", "600"), fontSize: 20, color: "#022150", textAlign: "center" }}>30M</Text>
            <Text style={{ fontFamily: getFontFamily("Inter", "400"), fontSize: 16, color: "#79869F", textAlign: "center" }}>Followers</Text>
          </View>
          <View style={{ borderRightWidth: 1, borderColor: "lightgrey" }}></View>
          <View>
            <Text style={{ fontFamily: getFontFamily("Inter", "600"), fontSize: 20, color: "#022150", textAlign: "center" }}>100</Text>
            <Text style={{ fontFamily: getFontFamily("Inter", "400"), fontSize: 16, color: "#79869F", textAlign: "center" }}>Posts</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, borderColor: "lightgrey", borderBottomWidth: 1, marginHorizontal: 20 }}></View>
        <View style={{ flex: 1 }}>
          <MaterialTopTabs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
