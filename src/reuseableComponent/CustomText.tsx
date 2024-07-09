import { View, Text } from "react-native";
import React from "react";

export default function CustomText(props:{ content:any, style:any }) {
    const {content , style}= props
  console.log(style);
  return (
    <View>
      <Text style={[{ fontFamily: "Jost_400Regular" }, style]}>{content}</Text>
    </View>
  );
}