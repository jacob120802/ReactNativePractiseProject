import { View, Text } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import Posts from "./Posts";
import Reels from "./Reels";
import { getFontFamily } from "@/src/assets/fonts/helper";
import Saved from "./Saved";

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarIndicatorStyle: { backgroundColor: "transparent" },
      tabBarLabelStyle: { fontSize: 12, fontFamily: getFontFamily("Inter", "700") },
      tabBarStyle: { backgroundColor: "#FFF", zIndex: 0, elevation: 0 },
    }}
  >
    <Tab.Screen name="Reels" component={Saved} />
    <Tab.Screen name="Posts" component={Saved} />
    <Tab.Screen name="Saved" component={Saved} />
  </Tab.Navigator>
);

export default MaterialTopTabs;
