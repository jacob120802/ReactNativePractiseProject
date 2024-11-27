import { View, Text } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const User = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text> User - {id} </Text>
      <Link href="/Home">Home</Link>
    </View>
  );
};

export default User;
