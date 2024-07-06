import { View, Image } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
function WelcomeScreen() {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "full",
        paddingHorizontal: 20,
      }}
    >
      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify().damping(15)}>
        <Image
          source={require("../../src/assests/images/image.png")}
          style={{ width: 174, height: 180, position: "absolute", top: "30%" }}
        ></Image>
      </Animated.View>
      <Image
        source={require("../../src/assests/images/Illustration_Dummy.png")}
        style={{ width: "100%", height: 225, position: "absolute", bottom: 3 }}
      ></Image>
    </View>
  );
}
export default WelcomeScreen;
