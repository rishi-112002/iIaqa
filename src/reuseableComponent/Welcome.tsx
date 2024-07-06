import { View, Text, Image } from "react-native";
import React from "react";

export default function Welcome() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 50,
        marginHorizontal: 50,
        marginTop: 40,
      }}
    >
      <Image
        source={require("../../src/assests/images/Logo_Dummy.png")}
        resizeMode="contain"
        style={{ width: 75, height: 80 }}
      ></Image>
      <View style={{ display: "flex" }}>
        <Text
          style={{
            color: "#1D71D4",
            fontWeight: "800",
            fontSize: 24,
            fontFamily: "Jost_400Regular",
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            color: "#1D71D4",
            fontWeight: "800",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          iLaqa
        </Text>
      </View>
    </View>
  );
}
