import { View, Text, Image } from "react-native";
import React from "react";
import Badge from "./Badge";
import Title from "./Title";

const Card = (props) => {
  return (
    <View style={{paddingTop:15}}>
      <View>
        <View style={{ position: "absolute", zIndex: 1, top: 13, left: 18 }}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image resizeMode='contain' source={{ uri: props.uri }} style={{ width: 155, height: 170, backgroundColor:'#FFFFFF' , borderRadius:5}} />
      </View>
      <View style={{ marginTop:16}}>
        <Title title={props.donationTitle} type={3} color={"#0A043C"} />
      </View>
      <View style={{marginTop:5}}>
        <Title title={"$" + props.price.toFixed(2)} type={3} color={"#156CF7"} />
      </View>
    </View>
  );
};

export default Card;
