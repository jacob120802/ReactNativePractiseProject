import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";
import Tabs from "../components/Tabs";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
  return (
    <SafeAreaView>
      <Title title="Jacob A." type={1} />
      <Tabs title="Highlight" />
      <Tabs title="Highlight" isInactive={true} />
      
      <Button
        title="Pay Now!"
        onPress={() => {
          console.log("Pressed");
        }}
      />
      <Button title="Pay Now!" disabled={true} />
      <Search onSearch={(value)=>{console.log(value)}}/>
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:24}}>
        <Card uri={'https://fastly.picsum.photos/id/1003/536/354.jpg?hmac=rLHjkfF5lXdg2176Ol-4mv28e0A1s701ZrqX52v4rTY'} badgeTitle={"Course"} donationTitle={"React Native"} price={44}/>
        <Card uri="https://picsum.photos/seed/picsum/200/300" badgeTitle={"Course"} donationTitle={"React Native"} price={44}/>
        </View>
      <Link href="/User/10">User Screen</Link>
    </SafeAreaView>
  );
};

export default Home;
